const express = require('express');
const router = express.Router(); 

const{detail, cart, product, gift, addProduct, productsEdit}= require('../controllers/productController');
router.get('/detail', detail)
      .get('/cart', cart )
      .get('/products', product)
      .get('/gifts', gift)
      .get('/add', addProduct)
      .get('/edit/:id', productsEdit)
      


module.exports= router