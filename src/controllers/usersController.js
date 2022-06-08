const {
    validationResult
} = require('express-validator');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/dataUser.json');

const readUsers = () => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
	return users
}; 

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
        let users= readUsers(); 
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
                image: 'noimage.png',
                rol: "guest",
            }

            users.push(newUser)
            guardarJson(users);
            res.redirect('/')

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
        let users= readUsers(); 

        if (errors.isEmpty()) {
            const {
                id,
                name,
                image,
                rol
            } = users.find(user => user.email === req.body.email)
            // levanto session
            req.session.userLogin = {
                id,
                name,
                image,
                rol
            }
            if (req.body.remember) {
                res.cookie('userAprhodite', req.session.userLogin, {
                    maxAge: 1000 * 60 * 2
                })
            }
            res.redirect('/')
        } else {
            res.render('login', {
                errors: errors.mapped()
            })

        }

    },
    profile: (req, res) => {
        let users= readUsers(); 
        const usuario = users.find(usuario => usuario.id === req.session.userLogin.id);

        return res.render('profile', {
            usuario
        })

    },
    profileUpdate: (req, res) => {

        const errors = validationResult(req);
        let users= readUsers(); 

        if (errors.isEmpty()) {
            let {
                name,
                surname,
                password,
                date,
                country,
                gender
            } = req.body;
            const {
                id
            } = users.find(user => user.id === req.session.userLogin.id);

            const usuariosModificados = users.map((usuario) => {
                if (usuario.id === id) {
                    let usuarioModificado = {
                        ...usuario,
                        name: name.trim(),
                        surname: surname.trim(),
                        date,
                        country,
                        gender,
                        image: req.file ? req.file.filename : usuario.image,
                     
                    };

                  
                    
                    return usuarioModificado;
                }
                return usuario;
            });

            guardarJson(usuariosModificados)
            req.session.userLogin = {
                ...req.session.userLogin,
                name
            }

            return res.redirect("/");


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