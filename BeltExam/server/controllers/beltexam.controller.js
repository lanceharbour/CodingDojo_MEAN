const Restaurant = require('../models/restaurant.model');
const Rating = require('../models/rating.model');

module.exports = {
    allRestaurants: (req, res) => {
        console.log('beltexam controller - allRestaurants');
        Restaurant.find()
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    findRestaurant: (req, res) => {
        console.log('beltexam controller - finding restaurant');
        console.log(req.params);
        Restaurant.findOne({_id: req.params.id})
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    addRestaurant: (req, res) => {
        console.log('beltexam controller - add restaurant');
        console.log(req.body);
        const restaurant = new Restaurant(req.body);
        restaurant.save()
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    editRestaurant: (req, res) => {
        console.log('beltexam controller - editing Restaurant');
        console.log(req.body);
        Restaurant.findOne({_id: req.params.id})
            .then(restaurant => {
                restaurant.name = req.body.name;
                restaurant.cuisine = req.body.cuisine;
                return restaurant.save();
            })
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    },

    removeRestaurant: (req, res) => {
        console.log('beltexam controller -  removing Restaurant');
        console.log(req.params.id);
        Restaurant.remove({_id: req.params.id})
            .then(() => res.json({removed:true}))
            .catch(err => res.json(err));
    },

    addReview: (req, res) => {
        console.log('beltexam controller - adding review');
        console.log(req.params.id);
        console.log(req.body);
        let rating = {reviewer: req.body.reviewer, stars: req.body.stars, review: req.body.review};
        Restaurant.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: rating}})
            .then(rating => res.json(rating))
            .catch(err => res.json(err));
    }
};