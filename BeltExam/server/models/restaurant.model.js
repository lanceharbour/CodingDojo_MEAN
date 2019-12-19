const mongoose = require('mongoose');
const { RatingSchema } = require('./rating.model');

const RestaurantSchema = new mongoose.Schema({
    name: {type: String},
    cuisine: {type: String},
    ratings: [RatingSchema]
}, {timestamps: true});

module.exports = mongoose.model('Restaurant', RestaurantSchema);