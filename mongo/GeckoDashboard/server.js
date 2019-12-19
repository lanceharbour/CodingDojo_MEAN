const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost/GeckoDashboard', {useNewUrlParser: true, useUnifiedTopology: true});

const GeckoSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
}, {timestamps: true});

const Gecko = mongoose.model('Gecko', GeckoSchema);

app.get('/', (req, res) => {
    Gecko.find()
    .then(data => res.render('index', {geckos: data}))
    .catch(err => res.json(err));
});

app.post('/geckos', (req, res) => {
    console.log('adding new gecko');
    console.log(req.body);
    const gecko = new Gecko(req.body);
    gecko.save()
    .then(() => res.redirect('/'))
    .catch(err => res.json(err));
});

app.get('/geckos/new', (req, res) => {
    res.render('new');
});

app.get('/geckos/:id', (req, res) => {
    console.log(req.params.id);
    Gecko.findOne({_id: req.params.id})
        .then(data => res.render('info', {gecko: data}))
        .catch(err => res.json(err));
});

app.get('/geckos/edit/:id', (req, res) => {
    console.log(req.params.id);
    Gecko.findOne({_id: req.params.id})
        .then(data => res.render('edit', {gecko: data}))
        .catch(err => res.json(err));
});

app.post('/geckos/:id', (req, res) => {
    console.log('editing gecko');
    console.log(req.body);
    Gecko.findOne({_id: req.params.id})
        .then(gecko => {
            gecko.name = req.body.name;
            gecko.age = req.body.age;
            return gecko.save();
        })
        .then(() => res.redirect('/'))
        .catch(err => res.json(err));
});

app.post('/geckos/destroy/:id', (req, res) => {
    console.log('deleting gecko');
    console.log(req.body);
    Gecko.remove({_id: req.params.id})
        .then(() => res.redirect('/'))
        .catch(err => res.json(err));
});

app.listen(8000, () => console.log("listening on port 8000"));