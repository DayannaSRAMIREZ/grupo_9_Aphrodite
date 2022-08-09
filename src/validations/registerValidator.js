const {
    body
} = require('express-validator');
const db = require ('../database/models');

module.exports = [
    body("name")
    .notEmpty().withMessage("No puede estar vacío").bail()
    .isAlpha().withMessage("Solo se permiten letras")
    .isLength({
        min: 3
    }).withMessage("Mínimo 3 letras"),
    body("surname")
    .notEmpty().withMessage("No puede estar vacío").bail()
    .isLength({
        min: 3
    }).withMessage("Mínimo 3 letras"),
    body("email")
    .notEmpty().withMessage("No puede estar vacío").bail()
    .isEmail().withMessage("Tienes que poner un email válido")
  
    .custom((value) => {
        return db.User.findOne({
            where: {
                email: value
            }
        }).then(user=>{
            if(user){
            return Promise.reject() 
        }
       }).catch(() => Promise.reject('El mail ya se encuentra registrado'))
        }),
    body("password")
    .notEmpty().withMessage("Tenes que escribir una contraseña").bail()
    .isLength({
        min: 6,
        max: 12
    }).withMessage("Tu contraseña debe tener como mínimo 6 caracteres y maximo 12"), 
//     .custom((value)=>{
//         let oneUpperCase= false; 
//        console.log(value);
// for (let i = 0; i < value.length; i++) {
//     console.log(value[i]);
//     if(value[i]==value[i].toUpperCase() && typeof value[i] === 'string'){
//         oneUpperCase= true
//         console.log('mayuscula');
//     }   
// }
  //     if(!oneUpperCase){
    //         return false
    //     }else{
    //         return true
    //     }

    // }).withMessage("Al menos debe contener una mayuscula"),
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
    body('terminos')
    .isString('on').withMessage('Debes aceptar términos y condiciones'),


]