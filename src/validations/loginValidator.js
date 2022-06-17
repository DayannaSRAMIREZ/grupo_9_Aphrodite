const bcryptjs = require('bcryptjs');
const {
    check
} = require('express-validator');
const users = require('../data/dataUser.json');

module.exports = [
    check('email')
    .notEmpty().withMessage('Debes ingresar un email.').bail()
    .isEmail().withMessage('Debes ingresar un email valido')
    .custom((value) => {
        let registrado = users.find(user => user.email === value)
        if (!registrado) {
            console.log(registrado)
            returnfalse
        } else {
            return true
        }
    }).withMessage('El usuario no existe'),



    check('password')
    .notEmpty().withMessage('Debes ingresar una contraseña.')
    .custom((value, {
        req
    }) => {
        let registrado = users.find(user => user.email === req.body.email)
        if (!registrado) {
            return false
        } else {
            if (bcryptjs.compareSync(value, registrado.password)) {
                return true
            } else {
                return false
            }

        }
    }).withMessage('Contraseña erronea'),

]