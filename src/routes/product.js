const express = require('express');
const router = express.Router(); 
const multer= require('multer');

const storage= multer.diskStorage({destination:(req,file,callback)=>{
      callback(null,'public/images')
}, filename: (req,file, callback)=>{
      callback(null, 'prueba.png')
}
}); 

const upload= multer({storage}); 

const{detail, cart, product, gift, addProduct, productsEdit, store, search, update, remove}= require('../controllers/productController');
router.get('/detail/:id', detail)
      .get('/cart', cart )
      .get('/', product)
      .get('/gifts', gift)
      .get('/add', addProduct)
      .post('/add',upload.single('image'), store)
      .get('/edit/:id', productsEdit)
      .get('/result', search)
      .put('/update/:id', update)
      .delete('/remove/:id', remove)
      


module.exports= router