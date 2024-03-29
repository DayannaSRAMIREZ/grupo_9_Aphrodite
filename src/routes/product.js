const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadImagesProducts'); 
const productsValidator = require('../validations/productValidator'); 
const adminCheck = require('../middlewares/adminCheck'); 

const{detail,list, cart, product, gift, addProduct, productsEdit, store, search, update, remove, relojes,anillos,aritos, pulseras,collares}= require('../controllers/productController');
router.get('/detail/:id', detail)
      .get('/cart', cart )
      .get('/', product)
      .get('/relojes', relojes)
      .get('/anillos', anillos)
      .get('/pulseras', pulseras)
      .get('/collares', collares)
      .get('/aritos', aritos)
      .get('/gifts', gift)
      .get('/add',adminCheck, addProduct)
      .post('/add',upload.array('images'),productsValidator,  store)
      .get('/edit/:id',adminCheck, productsEdit)
      .get('/result', search)
      .put('/update/:id',upload.array('image'), productsValidator,update)
      .get('/list', list)
      .delete('/remove/:id', remove), 
      
      


module.exports= router