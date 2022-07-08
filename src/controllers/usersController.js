const {
    validationResult
} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require ('../database/models');
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
            db.User.create ({
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                password: bcryptjs.hashSync(password, 10),
                dob:date,
                country: country.trim(),
                gender,
                image: 'noimage.png',
                rol: "guest",
            })
            .then( () => {
                return res.redirect("/")})

        } else {

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
         
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user)=> {
            req.session.userLogin = {
                id : +user.id,
                name: user.name,
                image: user.image,
                rol : user.rol
            }

         // levanto session
            if (req.body.remember) {
                res.cookie('userAprhodite', req.session.userLogin, {
                    maxAge: 1000 * 60 * 2
                })
            }
            res.redirect('/') 
        })
        } else {
            res.render('login', {
                errors: errors.mapped()
            })

        }

    },
    profile: (req, res) => {
        db.User.findByPk(req.session.userLogin.id) 
        .then((user) => res.render("profile", {
            usuario : user,
          }))
          .catch (error => console.log(error)) 

    },
    profileUpdate: (req, res) => {
     
       const errors = validationResult(req);
 
        if (errors.isEmpty()) {
            
            let {
                name,
                surname,
                date,
                country,
                gender
            } = req.body;
            
            db.User.update ({
                     
                        name: name.trim(),
                        surname: surname.trim(),
                        dob:date,
                        country,
                        gender,
                        image: req.file && req.file.filename                    
                    
            },
            {
                 where:{
                    id:req.session.userLogin.id
                 }
            } )
            .then( () => res.redirect('/users/profile'))
             .catch(error => console.log(error))
      } else {
            return res.render('profile', {
                usuario: req.body,
                errors: errors.mapped(),

            });

        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('userAprhodite', null, {
            maxAge: -1
        });
        res.redirect('/')
    }

}