const tasks = require ('../controllers/task.controller');

module.exports = function(app){
    app.get('/api/tasks', tasks.index);
    app.get('/api/tasks/:id', tasks.findTask);
    app.post('/api/tasks', tasks.addTask);
    app.put('/api/tasks/:id', tasks.editTask);
    app.delete('/api/tasks/:id', tasks.removeTask);
};