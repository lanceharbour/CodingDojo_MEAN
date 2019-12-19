const quotes = require('../controllers/quotes.constollers.js');

module.exports = function(app){
    app.get('/', quotes.index);
    app.post('/quotes', quotes.addquotes);
    app.get('/quotes', quotes.findquotes);
};