const {
    check
} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({
        min: 3
    }).withMessage('El nombre debe tener como mínimo 3 letras').bail(),
    check('categoryId')
    .notEmpty().withMessage('Debes seleccionar una categoria').bail(),
    check('materialId')
    .notEmpty().withMessage('Debes seleccionar un material').bail()
    .isNumeric(),
    check('units')
    .notEmpty().withMessage('Debes ingresar unidades').bail()
    .isNumeric(),
    check('price')
    .notEmpty().withMessage('Debes ingresar precio').bail()
    .isNumeric(),
    check('sizeId')
    .notEmpty().withMessage('Debes seleccionar un talle').bail()
    .isNumeric(),
    check('description')
    .notEmpty().withMessage('Debes ingresar una descripcion').bail(), 
    check('discount')
    .notEmpty().withMessage('Debes ingresar un descuento').bail(), 
 
]