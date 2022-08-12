const {
    validationResult
} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const fs = require("fs");
const path = require("path");
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
            db.User.create({
                    name: name.trim(),
                    surname: surname.trim(),
                    email: email.trim(),
                    password: bcryptjs.hashSync(password, 10),
                    dob: date,
                    country: country.trim(),
                    gender,
                    image: 'noimage.png',
                    rol: "guest",
                })
                .then(() => {
                    return res.redirect("/")
                })

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
                .then((user) => {
                    req.session.userLogin = {
                        id: +user.id,
                        name: user.name,
                        image: user.image,
                        rol: user.rol
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
                usuario: user,
            }))
            .catch(error => console.log(error))

    },
    profileUpdate: (req, res) => {

        const errors = validationResult(req);

        if (errors.isEmpty()) {

            if (req.session.userLogin.image && req.file && req.session.userLogin.image != "noimage.png") {
                fs.unlinkSync(
                    path.resolve(__dirname, "..", "..", "public", "images", "profileImages", req.session.userLogin.image)
                )
            }

            let {
                name,
                surname,
                date,
                country,
                gender
            } = req.body;

            db.User.update({

                    name: name.trim(),
                    surname: surname.trim(),
                    dob: date,
                    country,
                    gender,
                    image: req.file && req.file.filename

                }, {
                    where: {
                        id: req.session.userLogin.id
                    }
                })
                .then(() => {

                    req.session.userLogin = {
                        id: req.session.userLogin.id,
                        name: req.body.name,
                        image: req.file && req.file.filename || req.session.userLogin.image,
                        rol: req.session.userLogin.rol
                    }

                    res.redirect('/users/profile')
                })


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
    },
    admin: (req, res) => {

        db.User.findAll()
            .then(users => {

                res.render('vistaAdmin', {

                    users
                })
            })
            .catch(error => console.log(error))
    },
    menuAdmin: (req, res) => {
        res.render('menuAdmin')
    },
    adminUpdate:async(req,res)=>{
        try {
           
            let {rol} = await db.User.findByPk(req.params.id)

           if(rol=== "admin"){
            await db.User.update( {rol: 'guest'}, {where :{ id:req.params.id}})

           }else{
            await db.User.update( {rol: 'admin'}, {where :{ id:req.params.id}})
           }
           return res.redirect('/users/admin');
        } catch (error) {
            console.log(error);
        }
    }, 
    remove: (req, res) => {
        db.User.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((info) => {
                return res.redirect('/users/admin');
            })
            .catch(error => console.log(error))
    },
    /*API */
    checkEmail: async(req,res)=>{
        try{
           let user = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            let response= {
                ok: true,
                data: user ? true:false
            }
            return res.status(200).json(response)

        }catch(error){
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Comuniquese con el administrador'
            })
        }
    }


}