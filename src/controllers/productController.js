const products = require('../data/products.json');
const path = require('path'); 
const fs= require('fs');
const guardarJson= (array)=>fs.writeFileSync(path.resolve(__dirname,'..','data', 'products.json'), JSON.stringify(array, null, 3),'utf-8')


module.exports = {
    detail: (req, res) => {
        res.render('productDetail')
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    product: (req, res) => {
        res.render('products')
    },
    gift: (req, res) => {
        res.render('gifts')
    },
    addProduct: (req, res) => {
        res.render('addProducts')
    },
    productsEdit: (req, res) => {
        res.render('productsEdit')
    },
    store: (req, res) => {
        const {
            name,
            materials,
            size,
            description,
            category, 
            price, 
            unidades
        } = req.body;
        const producto = {
            id: products[products.length-1].id+1, 
            name, 
            materials,
            size,
            description,
            category,
            price: +price,
            unidades: +unidades, 
            img1: "noimage.JPG", 
            img2: "noimage.JPG", 
            img3: "noimage.JPG", 

        }
        products.push(producto);
        guardarJson(products);
        return res.redirect('/product')
    }
}