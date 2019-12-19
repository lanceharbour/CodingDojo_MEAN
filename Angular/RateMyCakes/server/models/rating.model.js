const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    stars: {type: Number},
    comment: {type: String}
    }, {timestamps: true}
);

module.exports.Rating = mongoose.model('Rating', RatingSchema);
module.exports.RatingSchema = RatingSchema;