const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}


module.exports= {
    index: (req,res)=>{
    let products= readProducts(); 
        res.render('index', {products})
    },
    weAre: (req,res)=>{
        res.render('weAre')
    },
    find: (req,res)=>{
        res.render('findStore')
    }
}