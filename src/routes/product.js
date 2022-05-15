const express = require('express');
const router = express.Router(); 

const{detail, cart, product, gift, addProduct, productsEdit, store}= require('../controllers/productController');
router.get('/detail', detail)
      .get('/cart', cart )
      .get('/', product)
      .get('/gifts', gift)
      .get('/add', addProduct)
      .get('/edit/:id', productsEdit)
      .post('/add', store)
      


module.exports= router