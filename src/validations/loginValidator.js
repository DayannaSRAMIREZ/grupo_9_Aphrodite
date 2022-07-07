const bcryptjs = require('bcryptjs');
const {
    check
} = require('express-validator');
const db = require ('../database/models');

module.exports = [
    check('email')
    .notEmpty().withMessage('Debes ingresar un email.').bail()
    .isEmail().withMessage('Debes ingresar un email valido')
    .custom((value,{req}) => {
       return db.User.findOne({
        where: {
            email: req.body.email
        }
       })
       .then (user =>{
        if(!user) {
            return Promise.reject() 
        }
       }).catch(() => Promise.reject('Credenciales inválidas'))
    }),



    check('password')
    .notEmpty().withMessage('Debes ingresar una contraseña.')
    .custom((value, {
        req
    }) => {
        return db.User.findOne({
            where : {
              email : req.body.email
            }
          }).then(user => {
            if(!user || !bcryptjs.compareSync(value, user.password)){
              return Promise.reject()
            }
          }).catch(() => Promise.reject('Credenciales inválidas'))
        })
]