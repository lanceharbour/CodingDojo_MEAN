const moment = require('moment');
const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote');

module.exports = {

    index: (req, res) => res.render('index'),

    addquotes: (req, res) => {
        const quote = new Quote(req.body);
        quote.save()
            .then(() => res.redirect('/quotes'))
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('quotes', err.errors[key].message);
                }
                res.redirect('/');
            });
    },
    
    findquotes: (req, res) => {
        Quote.find()
            .then(data => res.render('quotes', {quotes: data, moment: moment}))
            .catch(err => res.json(err));
    }
};