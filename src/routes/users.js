var express = require('express');
var router = express.Router();

/* GET users listing. */
const {register, login, processLogin}= require('../controllers/usersController'); 

const loginValidator = require('../validations/loginValidator');

router.get('/register', register);
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

module.exports = router;
