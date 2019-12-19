const Task = require("../models/task.model")

module.exports = {
    index: (req, res) => {
        Task.find()
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },

    findTask: (req, res) => {
        // console.log(req.params);
        Task.findOne({_id: req.params.id})
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },

    addTask: (req, res) => {
        // console.log(req.body);
        const task = new Task(req.body);
        task.save()
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },

    editTask: (req, res) => {
        // console.log('editing task');
        // console.log(req.body);
        Task.findOne({_id: req.params.id})
            .then(task => {
                task.title = req.body.title;
                task.description = req.body.description;
                task.completed = req.body.completed;
                return task.save();
            })
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },

    removeTask: (req, res) => {
        // console.log(req.params);
        Task.remove({_id: req.params.id})
            .then(() => res.json({removed:true}))
            .catch(err => res.json(err));
    },
};