var express = require('express');
var router = express.Router();

/* GET users listing. */
const {register, login, processLogin, registerController}= require('../controllers/usersController'); 
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

router.get('/register', register);
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.post('/register', registerValidator, registerController);

module.exports = router;
