const {
    check
} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({
        min: 3
    }).withMessage('El nombre debe tener como mínimo 3 letras').bail()
]