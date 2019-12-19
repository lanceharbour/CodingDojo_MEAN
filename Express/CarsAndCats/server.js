const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/');
app.get("/cars", (req, res) => {
    res.render('cars');
});
app.get("/cars/new", (req, res) => {
    res.render('new');
});
app.get("/cats", (req, res) => {
    res.render('cats');
});

app.get("/cats/grumpy", (req, res) => {
    var cat_array = {
        image: "grumpy_cat.png",
        name: "Grumpy Cat",
        age: 3,
        spots: ['In the sunbeam']
    }
    res.render('details', {details: cat_array});
});

app.get("/cats/cat2", (req, res) => {
    var cat_array = {
        image: "cat_2.png",
        name: "Sam",
        age: 5,
        spots: ['In the sun', 'on the pillow']
    }
    res.render('details', {details: cat_array});
});

app.listen(8000, () => console.log('listening on port 8000'));