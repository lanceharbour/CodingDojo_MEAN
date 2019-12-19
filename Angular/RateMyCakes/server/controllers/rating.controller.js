const { Rating } = require('../models/rating.model');

module.exports = {
    index: (req, res) => {
    Rating.find()
    .then(task => res.json(task))
    .catch(err => res.json(err));
    },


}