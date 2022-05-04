var express = require('express');
var router = express.Router();
const {index, weAre,find}= require('../controllers/indexController');


/* GET home page. */
router.get('/', index)
router.get('/weAre', weAre)
router.get('/find', find)

module.exports = router;
