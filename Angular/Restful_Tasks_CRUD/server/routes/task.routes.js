const TaskController = require ('../controllers/task.controller');

module.exports = function(app){
    app.get('/api/tasks', TaskController.index);
    app.get('/api/tasks/:id', TaskController.findTask);
    app.post('/api/tasks/new', TaskController.addTask);
    app.put('/api/tasks/edit/:id', TaskController.editTask);
    app.delete('/api/tasks/remove/:id', TaskController.removeTask);
};