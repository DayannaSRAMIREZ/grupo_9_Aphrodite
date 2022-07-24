const express = require('express'); 
const router = express.Router(); 
const categoriesValidator = require('../validations/categoriesValidator'); 
const {index,addCategory,editCategory,create,update,remove}= require('../controllers/categoryController')

router 
    .get('/',index)
    .get('/add', addCategory)
    .post('/add',categoriesValidator, create)
    .get('/edit/:id', editCategory)
    .put('/update/:id', categoriesValidator, update)
    .delete('/remove/:id', remove)

    module.exports= router