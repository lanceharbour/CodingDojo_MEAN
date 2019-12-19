const mongoose = require('mongoose'),
    People = mongoose.model('People');

module.exports = {
    index: (req, res) => {
        People.find()
            .then(people => res.json(people))
            .catch(err => res.json(err));
    },

    addPerson: (req, res) => {
        console.log(req.params);
        const person = new People(req.params);
        person.save()
            .then(person => res.json(person))
            .catch(err => res.json(err));
    },

    removePerson: (req, res) => {
        console.log(req.params);
        People.remove(req.params)
            .then(() => res.json({removed:true}))
            .catch(err => res.json(err));
    },

    name: (req, res) => {
        People.findOne({name: req.params})
            .then(person => res.json(person))
            .catch(err => res.json(err));
    }
};