const {validationResult} = require('express-validator');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const path = require('path');
const users = require('../data/dataUser.json');
const guardarJson = (array) => fs.writeFileSync(
    path.resolve(__dirname, "..", "data", "dataUser.json"),
    JSON.stringify(array, null, 3),
    "utf-8"
);


module.exports = {
    register: (req, res) => {
        res.render('register')
    },
    registerController: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let {
                name,
                surname,
                email,
                password,
                date,
                country,
                gender
            } = req.body
            let lastId = users.length !== 0 ? users[users.length - 1].id : 0
            let newUser = {
                id: +lastId + 1,
                name: name.trim(),
                surname: surname.trim(),
                email,
                password: bcryptjs.hashSync(password, 10),
                date,
                country: country.trim(),
                gender,
                rol: "guest",
            }

            users.push(newUser)
            guardarJson(users);
            res.redirect('/')
         
        }else{
        
            return res.render('register', {
                old: req.body, 
                errors: errors.mapped()
            });
        }
    },
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);
          if (errors.isEmpty()) {
            const {
                id,
                name,
                image
            } = users.find(user => user.email === req.body.email)
            req.session.login = {
                id,
                name,
                image
            }
            if (req.body.remember) {
                res.cookie("grupo_9_aphrodite", req.session.login, {
                    maxAge: 1000*60*2
                })
            }
            res.redirect('/')
        } else {
            return res.render("login", {
                old: req.body,
                errors: errors.mapped(),
            });
        }
    },
    logout : (req,res) => {
        req.session.destroy();
        res.cookie('userAphrodite',null,{maxAge : -1})
        return res.redirect('/')
      },
      
} 