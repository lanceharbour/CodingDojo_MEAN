const Cake = require('../models/cake.model');

module.exports = {
    index: (req, res) => {
        Cake.find()
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },

    addCake: (req, res) => {
        console.log('cake controller');
        console.log(req.body)
        const cake = new Cake(req.body);
        cake.save()
            .then(task => res.json(task))
            .catch(err => res.json(err));
    }
}