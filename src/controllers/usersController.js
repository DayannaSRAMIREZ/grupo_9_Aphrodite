const {validationResult} = require('express-validator');
const fs = require ('fs');
const bcryptjs = require ('bcryptjs');
const path = require ('path');
const users = require ('../data/dataUser.json')


module.exports={
    register: (req,res)=>{
        res.render('register')
    },
    login: (req,res)=>{
        res.render('login')
    },
    processLogin: (req,res) =>{
        const errors = validationResult(req);
        if (errors.isEmpy()) {
            const {id,name,image} = users.find(user => user.email === req.body.email)
            req.session.userLogin = {
                id,
                name,
                image
            }
            if(req.body.remember){
                res.cookie("grupo_9_aphrodite",req.session.userLogin,{maxAge:1000*60*2})
            }
            res.redirect('/')
        }else {
            return res.render("userLogin",{
                old: req.body,
                errors: errors.mapped(),
            }); 
        }
    },
}