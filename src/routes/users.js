var express = require('express');
var router = express.Router();

/* GET users listing. */
const {register, login, processLogin, registerController,logout, profile, profileUpdate}= require('../controllers/usersController'); 
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator= require('../validations/profileValidatior'); 
const uploadImagesUsers= require('../middlewares/uploadImagesUsers')
const profileCheck= require('../middlewares/profileCheck')

router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/register', register);
router.post('/register', registerValidator, registerController);
router.get('/logout',logout);
router.get('/profile',profileCheck,profile);
router.put('/profile-update',uploadImagesUsers.single('image'),profileValidator, profileUpdate);


module.exports = router;
