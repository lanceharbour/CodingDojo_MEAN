const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;