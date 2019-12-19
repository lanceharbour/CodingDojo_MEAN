const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/result', (req, res) => {
    results = req.body;
    res.render('results', {results})
});

app.listen(8000, () => console.log("listening on port 8000"));