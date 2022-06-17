const {
    check
} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({
        min: 3
    }).withMessage('El nombre debe tener como mínimo 3 letras').bail(),
    check('category')
    .notEmpty().withMessage('Debes seleccionar una categoria').bail(),
    check('materials')
    .notEmpty().withMessage('Debes seleccionar un material').bail(),
    check('unidades')
    .notEmpty().withMessage('Debes ingresar unidades').bail()
    .isNumeric(),
    check('price')
    .notEmpty().withMessage('Debes ingresar precio').bail()
    .isNumeric(),
    check('size')
    .notEmpty().withMessage('Debes seleccionar un talle').bail(),
    check('description')
    .notEmpty().withMessage('Debes ingresar una descripcion').bail(), 
 
]