const Product = require('../models/product.model');

module.exports = {
    allProducts: (req, res) => {
        console.log('allProduct product controller');
        Product.find()
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    findProduct: (req, res) => {
        console.log('product controller - finding product');
        console.log(req.params);
        Product.findOne({_id: req.params.id})
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    addProduct: (req, res) => {
        console.log('add product');
        console.log(req.body);
        const product = new Product(req.body);
        product.save()
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    editProduct: (req, res) => {
        console.log('editing product');
        console.log(req.body);
        Product.findOne({_id: req.params.id})
            .then(product => {
                product.title = req.body.title;
                product.price = req.body.price;
                product.img_url = req.body.image_url;
                return product.save();
            })
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    removeProduct: (req, res) => {
        console.log('node removing product');
        console.log('req.params.id');
        Product.remove({_id: req.params.id})
            .then(() => res.json({removed:true}))
            .catch(err => res.json(err));
    }
};