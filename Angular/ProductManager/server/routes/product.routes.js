const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api/products', ProductController.allProducts),
    app.get('/api/products/:id', ProductController.findProduct),
    app.post('/api/products/new', ProductController.addProduct),
    app.put('/api/products/edit/:id', ProductController.editProduct),
    app.delete('/api/products/remove/:id', ProductController.removeProduct)
}