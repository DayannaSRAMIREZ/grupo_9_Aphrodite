const {
    body
} = require('express-validator');
const users = require('../data/dataUser.json');

module.exports = [
    body("name")
    .notEmpty().withMessage("No puede estar vacío").bail()
    .isAlpha().withMessage("Solo se permiten letras")
    .isLength({
        min: 4
    }).withMessage("Mínimo 4 letras"),
    body("surname")
    .notEmpty().withMessage("No puede estar vacío").bail()
    .isLength({
        min: 4
    }).withMessage("Mínimo 4 letras"),
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
    }).withMessage("Este email ya está registrado"),
    body("password")
    .notEmpty().withMessage("Tenes que escribir una contraseña").bail()
    .isLength({
        min: 8,
        max: 12
    }).withMessage("Tu contraseña debe tener como mínimo 8 caracteres y maximo 12"),


    body("password2")
    .notEmpty().withMessage("Tenes que escribir una contraseña").bail()
    .custom((value, {
        req
    }) => {
        if (value !== req.body.password) {
            return false
        } else {
            return true
        }
    }).withMessage("Las contraseñas tienen que coincidir"),
    body('country')
    .notEmpty().withMessage('Debes seleccionar una opcion'),
    body('gender')
    .notEmpty().withMessage('Debes seleccionar una opcion'),
    body('date')
    .notEmpty().withMessage('Debes seleccionar una fecha'),


]