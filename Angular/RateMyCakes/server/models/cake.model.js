const mongoose = require('mongoose');
const { RatingSchema } = require('./rating.model');

const CakeSchema = new mongoose.Schema({
    baker_name: {type: String},
    image_url: {type: String},
    ratings: [RatingSchema]
}, {timestamps: true});

module.exports = mongoose.model('Cake', CakeSchema);