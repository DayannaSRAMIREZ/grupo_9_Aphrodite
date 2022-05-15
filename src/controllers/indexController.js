const products = require('../data/products.json');
const path = require('path');
const fs = require('fs');
const guardarJson = (array) => fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), JSON.stringify(array, null, 3), 'utf-8')


module.exports= {
    index: (req,res)=>{
        res.render('index', {products})
    },
    weAre: (req,res)=>{
        res.render('weAre')
    },
    find: (req,res)=>{
        res.render('findStore')
    }
}