const BeltExamController = require('../controllers/beltexam.controller');

module.exports = function(app) {
    app.get('/api/restaurants', BeltExamController.allRestaurants),
    app.get('/api/restaurants/:id', BeltExamController.findRestaurant),
    app.post('/api/restaurants/new', BeltExamController.addRestaurant),
    app.post('/api/restaurants/edit/:id', BeltExamController.editRestaurant),
    app.delete('/api/restaurants/remove/:id', BeltExamController.removeRestaurant),
    app.post('/api/restaurants/review/:id', BeltExamController.addReview)
}