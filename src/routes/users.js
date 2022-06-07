var express = require('express');
var router = express.Router();

/* GET users listing. */
const {register, login, processLogin, registerController,logout, profile}= require('../controllers/usersController'); 
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');


router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/register', register);
router.post('/register', registerValidator, registerController);
router.get('/logout',logout);
router.get('/profile',profile);

module.exports = router;
