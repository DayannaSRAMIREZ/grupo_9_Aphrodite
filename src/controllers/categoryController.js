const db = require('../database/models');
const {
    validationResult
} = require("express-validator");



module.exports = {

    index: (req, res) => {
        db.Category.findAll()
            .then(categories => {
                res.render('allCategories', {
                    categories
                })
            })
            .catch(error => console.log(error))
    },
    addCategory: (req, res) => {
        res.render('addCategory')
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const {
                name
            } = req.body;
            db.Category.create({
                    name
                })
                .then(() => res.redirect('/categories'))
                .catch(error => console.log(error))
        }else{
            res.render('addCategory', {
                errors: errors.mapped()
            })
        }
    },
    editCategory: (req, res) => {
        const id = req.params.id;
        db.Category.findByPk(id)
            .then(category => {
                res.render('editCategory', {
                    category
                })
            })
            .catch(error => console.log(error))

    },
    update: (req, res) => {

        let errors = validationResult(req);
   

        console.log(errors.isEmpty());
        if (errors.isEmpty()) {
            db.Category.update({
                    name: req.body.name
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => res.redirect('/categories'))
                .catch(error => console.log(error))
        } else {
            const id = req.params.id;
            db.Category.findByPk(id)
                .then(category => {
                    res.render('editCategory', {
                        category, 
                        errors: errors.mapped()
                    })
                })
                .catch(error => console.log(error))
        }


    },
    remove: (req, res) => {
        db.Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((info) => {
                return res.redirect('/categories');
            })
            .catch(error => console.log(error))
    }


}