const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}; 
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const guardarJson = (array) => fs.writeFileSync(productsFilePath, JSON.stringify(array, null, 3));


module.exports = {
    detail: (req, res) => {
        let products= readProducts(); 
        const {
            id
        } = req.params;
        const product = products.find(producto => producto.id === +id);
      

        res.render('productDetail', {
            product
        })
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    product: (req, res) => {
        let products= readProducts(); 
        let arrayAnillos= products.filter(product=>product.category === "anillos" ); 
        let arrayCollares= products.filter(product=>product.category === "collares" ); 
        let arrayPulseras= products.filter(product=>product.category === "pulseras" ); 
        let arrayRelojes= products.filter(product=>product.category === "relojes" ); 
        let arrayAritos= products.filter(product=>product.category === "aritos" ); 
      
        res.render('products', {
            arrayAnillos,
            arrayAritos,
            arrayCollares,
            arrayPulseras,
            arrayPulseras,
            arrayRelojes   
        })
    },
    gift: (req, res) => {
        res.render('gifts')
    },
    addProduct: (req, res) => {
        res.render('addProducts')
    },
    productsEdit: (req, res) => {
        let products= readProducts(); 
        const {
            id
        } = req.params;
        const product = products.find(producto => producto.id === +id);

        res.render('productsEdit', {
            product
        })
    },
    store: (req, res) => {
        let products= readProducts(); 
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
            id: products[products.length - 1].id + 1,
            name: name.trim(),
            materials,
            size,
            description: description.trim(),
            category,
            price: +price,
            unidades: +unidades,
            img1: req.file ? req.file.filename : 'noimage.png' ,
            img2: "noimage.png",
            img3: "noimage.png",

        }
        products.push(producto);
        guardarJson(products);
        return res.redirect('/product')
    },
    search: (req, res) => {
        let products= readProducts(); 
        const {
            keyword
        } = req.query;
        const results = products.filter(producto => producto.name.toLowerCase().includes(keyword.toLowerCase()) || producto.description.toLowerCase().includes(keyword.toLowerCase()));

        res.render('results', {
            results,
            keyword
        })
    },
    update: (req, res) => {
        let products= readProducts(); 
        const {
            id
        } = req.params;
        const {
            name,
            materials,
            size,
            description,
            category,
            price,
            unidades, imagen

        } = req.body
       

        const arrayModify = products.map(product => {
            if (product.id === +id) {
                let productModify = {

                    ...product,
                    name: name,
                    materials,
                    size,
                    description: description,
                    category,
                    price: +price,
                    unidades: +unidades,
                    img1: req.file ? req.file.filename : product.img1,

                }
                return productModify;
            }
            return product
        });

        guardarJson(arrayModify);
        return res.redirect('/product');

    },
    remove: (req, res) => {
        let products= readProducts(); 
        const {
            id
        } = req.params;
        const productsModify = products.filter(product => product.id !== +id);
        guardarJson(productsModify)
        res.redirect('/product');
    }
}