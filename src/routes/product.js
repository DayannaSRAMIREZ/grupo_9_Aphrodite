const express = require('express');
const router = express.Router(); 

const{detail, cart, product, gift}= require('../controllers/productController');
router.get('/detail', detail)
router.get('/cart', cart )
router.get('/products', product)
router.get('/gifts', gift)

;


module.exports= router