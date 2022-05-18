const express = require('express');
const router = express.Router(); 
// const multer= require('multer');

// const storage= multer.diskStorage();


const{detail, cart, product, gift, addProduct, productsEdit, store, search, update, remove}= require('../controllers/productController');
router.get('/detail/:id', detail)
      .get('/cart', cart )
      .get('/', product)
      .get('/gifts', gift)
      .get('/add', addProduct)
      .post('/add', store)
      .get('/edit/:id', productsEdit)
      .get('/result', search)
      .put('/update/:id', update)
      .delete('/remove/:id', remove)
      


module.exports= router