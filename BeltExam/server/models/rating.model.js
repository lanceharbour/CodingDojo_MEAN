const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    reviewer: {type: String},
    stars: {type: Number},
    review: {type: String}
    }, {timestamps: true}
);

module.exports.Rating = mongoose.model('Rating', RatingSchema);
module.exports.RatingSchema = RatingSchema;