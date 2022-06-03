const {body} = require('express-validator');
const users = require('../data/dataUser.json');

module.exports = [
    body("name")
        .notEmpty().withMessage("No puede estar vacío").bail()
        .isAlpha().withMessage("Solo se permiten letras")
        .isLength({min:4}).withMessage("Mínimo 4 letras"),
    body("surname")
        .notEmpty().withMessage("No puede estar vacío").bail()
        .isAlpha().withMessage("Solo se permiten letras")
        .isLength({min:4}).withMessage("Mínimo 4 letras"),
    body("email")
        .notEmpty().withMessage("No puede estar vacío").bail()
        .isEmail().withMessage("Tienes que poner un email válido")
        .custom((value) => {
            const user = users.find(user => user.email === value)
            if (user) {
                return false
            } else {
                return true
            }
        } ).withMessage("Este email ya está registrado"),
    body("password")
        .isLength({min:8, max: 12}).withMessage("Tu contraseña debe tener como mínimo 8 caracteres y maximo 12")
        .notEmpty().withMessage("Tenes que escribir una contraseña")
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
        }),
    body("password2")
        .custom((value, {req}) => {
            if (value !== req.body.password) {
                return false
            } else {
                return true
            }
        }).withMessage("Las contraseñas tienen que coincidir"),
    
        
]