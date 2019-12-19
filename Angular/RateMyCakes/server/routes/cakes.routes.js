const CakeController = require('../controllers/cake.controller');
const RatingController = require('../controllers/rating.controller');

module.exports = function(app){
    app.get('/api/cakes', CakeController.index ),
    app.post('/api/cakes/new', CakeController.addCake),
    app.get('/api/cakes/ratings', RatingController.index)
}