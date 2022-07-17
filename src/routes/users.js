var express = require('express');
var router = express.Router();

/* GET users listing. */
const {register, login, processLogin, registerController,logout, profile, profileUpdate, admin}= require('../controllers/usersController'); 
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator= require('../validations/profileValidatior'); 
const uploadImagesUsers= require('../middlewares/uploadImagesUsers');
const profileCheck= require('../middlewares/profileCheck'); 
const notLoggedCheck = require('../middlewares/notLoggedCheck'); 
const adminCheck = require('../middlewares/adminCheck');

router.get('/login',notLoggedCheck, login);
router.post('/login', loginValidator, processLogin);
router.get('/register', notLoggedCheck, register);
router.post('/register', registerValidator, registerController);
router.get('/logout',logout);
router.get('/profile',profileCheck,profile);
router.get('/admin', adminCheck, admin);
router.put('/profile-update',uploadImagesUsers.single('image'),profileValidator, profileUpdate);


module.exports = router;
