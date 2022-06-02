const bcryptjs = require('bcryptjs');

const {
    check
} = require('express-validator');

const users = require('../data/dataUser.json');



module.exports = [
    check('email')
    .notEmpty().withMessage("Ingrese su email").bail()
    .isEmail().withMessage("Ingrese email válido"),

    check('password')
    .notEmpty().withMessage("Ingrese su contraseña").bail()
    .custom((value, {
        req
    }) => {
        const user = users.find(user => user.email === req.body.email);
        if (!user) {
            return false
        } else {
            if (!bcryptjs.compareSync(value, user.password)) {
                return false
            }
        }
        return true
    }).withMessage('credenciales invalidas')

]