const express = require('express');
const router = express.Router(); 

const{detail, cart, product, gift, addProduct, productsEdit, store, search}= require('../controllers/productController');
router.get('/detail/:id', detail)
      .get('/cart', cart )
      .get('/', product)
      .get('/gifts', gift)
      .get('/add', addProduct)
      .get('/edit/:id', productsEdit)
      .post('/add', store)
      .get('/result', search)
      


module.exports= router