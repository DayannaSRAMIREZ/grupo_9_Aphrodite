const db = require('../database/models');
const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const {
    validationResult
} = require("express-validator");

const readProducts = () => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products
};
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const guardarJson = (array) => fs.writeFileSync(productsFilePath, JSON.stringify(array, null, 3));


module.exports = {

    detail: (req, res) => {
        let product = db.Product.findByPk(req.params.id, {
            include: ['images']
        })
        let categories = db.Category.findAll()
        let materials = db.Material.findAll()
        let sizes = db.Size.findAll()

        Promise.all([product, categories, materials, sizes])
            .then(([product, categories, materials, sizes]) => {
                return res.render('productDetail', {
                    product,
                    categories,
                    materials,
                    sizes
                })

            })
            .catch(error => console.log('error'))
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    product: (req, res) => {
    db.Product.findAll({include:['images']})

        .then(products =>{
            
           let arrayAnillos = products.filter(product => product.categoryId === 1);
            let arrayCollares = products.filter(product => product.categoryId === 2);
            let arrayPulseras = products.filter(product => product.categoryId === 3);
             let arrayRelojes = products.filter(product => product.categoryId === 4);
            let arrayAritos = products.filter(product => product.categoryId === 5);
            res.render('products', {
                arrayAnillos,
                arrayAritos,
                arrayCollares,
                arrayPulseras,
                arrayPulseras,
                arrayRelojes
            })
        })
        .catch(error=>console.log(error))
  
    },
    gift: (req, res) => {
        res.render('gifts')
    },
    addProduct: (req, res) => {
        res.render('addProducts')
    },
    productsEdit: (req, res) => {
        let product = db.Product.findByPk(req.params.id, {
            include: ['images']
        })
        let categories = db.Category.findAll()
        let materials = db.Material.findAll()
        let sizes = db.Size.findAll()

        Promise.all([product, categories, materials, sizes])
            .then(([product, categories, materials,sizes]) => {
                return res.render('productsEdit', {
                    product,
                    categories,
                    materials,
                    sizes
                })

            })
            .catch(error => console.log('error'))   
      
    },
    store: (req, res) => {
        let products = readProducts();
        let errors = validationResult(req)

        if (errors.isEmpty()) {
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
                img1: req.file ? req.file.filename : 'noimage.png',
                img2: "noimage.png",
                img3: "noimage.png",

            }
            products.push(producto);
            guardarJson(products);
            return res.redirect('/product')
        } else {
            res.render('addProducts', {
                errors: errors.mapped(),
                old: req.body,
            })

        }

    },
    search: (req, res) => {
        let products = readProducts();
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
        let products = readProducts();
        let errors = validationResult(req);


        if (errors.isEmpty()) {
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
                unidades,
                imagen

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

        } else {
            return res.render('productsEdit', {
                product: {
                    id: req.params.id,
                    ...req.body
                },
                errors: errors.mapped(),

            });

        }

    },
    remove: (req, res) => {
        let products = readProducts();
        const {
            id
        } = req.params;
        const productsModify = products.filter(product => product.id !== +id);
        guardarJson(productsModify)
        res.redirect('/product');
    },
    collares: (req, res) => {
        let products = readProducts();
        const collares = products.filter(product => product.category === 'collares');
        res.render('collares', {
            collares
        })


    },
    anillos: (req, res) => {
        let products = readProducts();
        const anillos = products.filter(product => product.category === 'anillos');
        res.render('anillos', {
            anillos
        })

    },
    pulseras: (req, res) => {
        let products = readProducts();
        const pulseras = products.filter(product => product.category === 'pulseras');
        res.render('pulseras', {
            pulseras
        })


    },
    aritos: (req, res) => {
        let products = readProducts();
        const aritos = products.filter(product => product.category === 'aritos');
        res.render('aritos', {
            aritos
        })

    },
    relojes: (req, res) => {
        let products = readProducts();
        const relojes = products.filter(product => product.category === 'relojes');
        res.render('relojes', {
            relojes
        })

    }
}