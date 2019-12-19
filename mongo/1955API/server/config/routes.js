const peoples = require ('../controllers/1955API.controller');

module.exports = function(app){
    app.get('/', peoples.index);
    app.get('/new/:name/', peoples.addPerson);
    app.get('/remove/:name', peoples.removePerson);
    app.get('/:name', peoples.name);
};