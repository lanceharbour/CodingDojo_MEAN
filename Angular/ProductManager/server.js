const express = require("express");
const app = express();
const path = require("path");

require('./server/config/mongoose.config.js');

app.use(
    express.json(),
    express.urlencoded({extended: true}),
    express.static( __dirname + '/public/dist/public')
    );

require('./server/routes/product.routes.js')(app)

app.all('*', (req, res) => 
    res.sendFile(path.resolve(__dirname + "/public/dist/public/index.html"))
);

app.listen(8000, () => console.log("listening on port 8000"));