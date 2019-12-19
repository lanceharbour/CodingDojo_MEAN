const tasks = require ('../controllers/task.controller');

module.exports = function(app){
    app.get('/tasks', tasks.index);
    app.get('/tasks/:id', tasks.findTask);
    app.post('/tasks', tasks.addTask);
    app.put('/tasks/:id', tasks.editTask);
    app.delete('/tasks/:id', tasks.removeTask);
};