const express = require("express");
const session = require('express-session');
const app = express();
app.use(session({
    secret: 'sessiontest',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    if(req.session.counter){
        req.session.counter++;
        count = req.session.counter;
        res.render('index', {count});
    } else {
        req.session.counter = 1;
        count = req.session.counter;
        res.render('index', {count});
    }
});

app.get('/addtwo', (req, res) => {
    req.session.counter++;
    res.redirect('/');
});

app.get('/clear', (req, res) => {
    req.session.counter = 0;
    res.redirect('/');
});

app.listen(8000, () => console.log("listening on port 8000"));