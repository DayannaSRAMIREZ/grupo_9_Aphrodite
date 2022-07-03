/*const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');*/



/*const readProducts = () => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}*/

const db = require("../database/models");

module.exports= {
    index: (req,res)=>{
    db.Product.findAll({
        order:[
            [
                'discount', 'DESC'
            ]
        ],
        include:['images']
    })
    
    .then(products => {res.render('index', {products})})
    
    .catch(error => console.log(error)); 
    },
    weAre: (req,res)=>{
        res.render('weAre')
    },
    find: (req,res)=>{
        res.render('findStore')
    }
}