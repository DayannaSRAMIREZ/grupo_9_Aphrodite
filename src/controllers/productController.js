const db = require('../database/models');

const {
    validationResult
} = require("express-validator");
const {
    Op
} = require('sequelize');
const fs = require("fs");
const path = require("path");
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {

    detail: (req, res) => {
        let product = db.Product.findByPk(req.params.id, {
            include: ['images']
        })
        let categories = db.Category.findAll()
        let materials = db.Material.findAll()
        let sizes = db.Size.findAll()
        let products = db.Product.findAll({
            include:['images']
        })


        Promise.all([product, categories, materials, sizes, products])
            .then(([product, categories, materials, sizes, products]) => {
                return res.render('productDetail', {
                    product,
                    categories,
                    materials,
                    sizes,
                    products
                })

            })
            .catch(error => console.log('error'))
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    product: (req, res) => {
        db.Product.findAll({
                include: ['images']
            })

            .then(products => {

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
            .catch(error => console.log(error))

    },
    gift: (req, res) => {
        res.render('gifts')
    },
    addProduct: (req, res) => {
        let categories = db.Category.findAll()
        let materials = db.Material.findAll()
        let sizes = db.Size.findAll()

        Promise.all([categories, materials, sizes])
            .then(([categories, materials, sizes]) => {
                return res.render('addProducts', {
                    categories,
                    materials,
                    sizes
                })

            })
            .catch(error => console.log('error'))
    },
    productsEdit: (req, res) => {
        let product = db.Product.findByPk(req.params.id, {
            include: ['images']
        })
        let categories = db.Category.findAll()
        let materials = db.Material.findAll()
        let sizes = db.Size.findAll()

        Promise.all([product, categories, materials, sizes])
            .then(([product, categories, materials, sizes]) => {
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
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const {
                name,
                price,
                discount,
                sizeId,
                materialId,
                description,
                categoryId,
                units
            } = req.body;
            db.Product.create({
                    name: name.trim(),
                    price: +price,
                    sizeId,
                    discount: +discount,
                    description: description.trim(),
                    materialId,
                    units: +units,
                    categoryId,
                    materialId,

                })
                .then(product => {
                    if (req.files.length > 0) {
                        let images = req.files.map(({
                            filename
                        }, i) => {
                            let image = {
                                name: filename,
                                productId: product.id,
                                primary: i === 0 ? 1 : 0
                            }
                            return image
                        })
                        db.Image.bulkCreate(images, {
                                validate: true
                            })
                            .then(result => res.redirect('/product'))

                    }


                })
                .catch(error => console.log(error))

        } else {
            let categories = db.Category.findAll()
            let materials = db.Material.findAll()
            let sizes = db.Size.findAll()

            Promise.all([categories, materials, sizes])
                .then(([categories, materials, sizes]) => {
                    return res.render('addProducts', {
                        categories,
                        materials,
                        sizes,
                        errors: errors.mapped(),
                        old: req.body
                    })
                })

        }

    },
    search: (req, res) => {
        const {
            keyword
        } = req.query;

        db.Product.findAll({
            where: {
                [Op.or]: [{
                        name: {
                            [Op.substring]: keyword
                        }
                    },
                    {
                        description: {
                            [Op.substring]: keyword
                        }
                    }
                ]
            },
            include: ['images']
        }).then(results => {
            return res.render('results', {
                results,
                keyword,

            })
        }).catch(error => console.log(error))


    },
    update: (req, res) => {
        let errors = validationResult(req);



        if (errors.isEmpty()) {
            const {
                id
            } = req.params;
            const {
                name,
                materialId,
                sizeId,
                description,
                categoryId,
                discount,
                price,
                units,

            } = req.body

            db.Product.update({
                    name: name.trim(),
                    price: +price,
                    sizeId,
                    discount: +discount,
                    description: description.trim(),
                    materialId,
                    units: +units,
                    categoryId,
                    materialId,

                }, {
                    where: {
                        id: req.params.id

                    }
                })
                .then(() => {
              
                        if (req.files.length > 0) {
                            
                            db.Product.findByPk(req.params.id,{
                                include: ['images']
                            })
                            .then(product=>{
                                if(product.images.length>0){
                                
                               
                                product.images.forEach(image => {
                                    fs.unlinkSync(
                                        path.resolve(__dirname,"..", "..", "public", "images","products", image.name)
                                     )
                                    
                                })
                                
                           
                              }
                            db.Image.destroy({
                                    where: {
                                        productId: req.params.id
                                    }
                                })
                                .then(() => {
                                    
                                  let images = req.files.map(({
                                        filename
                                    }, i) => {
                                        let image = {
                                            name: filename,
                                            productId: req.params.id,
                                            primary: i === 0 ? 1 : 0
                                        }
                                        return image
                                    })
                                    db.Image.bulkCreate(images, {
                                            validate: true
                                        })
                                        .then(() => {
                                            return res.redirect('/product')
                                        })

                                })
   
                            })
                        }else{
                            return res.redirect('/product')
                        }

                    }

                )
                .catch(error => console.log(error))



        } else {
            let categories = db.Category.findAll()
            let sizes = db.Size.findAll()
            let materials = db.Material.findAll()


            Promise.all([categories, sizes, materials])
                .then(([categories, sizes, materials]) => {
                    return res.render('productsEdit', {


                        product: {
                            id: req.params.id,
                            ...req.body
                        },
                        errors: errors.mapped(),
                        categories,
                        materials,
                        sizes

                    });

                })
        }

    },

    remove: (req, res) => {
        db.Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((info) => {
                return res.redirect('/product');
            })
            .catch(error => console.log(error))
    },
    collares: (req, res) => {
        db.Product.findAll({
                include: ['images']
            })

            .then(products => {

                let collares = products.filter(product => product.categoryId === 2);

                res.render('collares', {

                    collares
                })
            })


    },
    anillos: (req, res) => {
        db.Product.findAll({
                include: ['images']
            })

            .then(products => {

                let anillos = products.filter(product => product.categoryId === 1);

                res.render('anillos', {

                    anillos
                })
            })
            .catch(error => console.log(error))



    },
    pulseras: (req, res) => {
        db.Product.findAll({
                include: ['images']
            })

            .then(products => {

                let pulseras = products.filter(product => product.categoryId === 3);

                res.render('pulseras', {

                    pulseras
                })
            })
            .catch(error => console.log(error))



    },
    aritos: (req, res) => {
        db.Product.findAll({
                include: ['images']
            })

            .then(products => {

                let aritos = products.filter(product => product.categoryId === 5);

                res.render('aritos', {

                    aritos
                })
            })
            .catch(error => console.log(error))



    },
    relojes: (req, res) => {
        db.Product.findAll({
                include: ['images']
            })

            .then(products => {

                let relojes = products.filter(product => product.categoryId === 4);

                res.render('relojes', {

                    relojes
                })
            })
            .catch(error => console.log(error))

    }, 
    list: (req,res)=>{
        db.Product.findAll()
        .then(products=>{
          res.render('productsList', {products})  
        })
        
    }
}