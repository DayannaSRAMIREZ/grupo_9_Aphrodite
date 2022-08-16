const {
    body
} = require('express-validator');


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
    body("image")
    .matches(/(\.jpg|\.jpeg|\.png|\.gif)$/i).withMessage('Formato de imágen no válido')

]