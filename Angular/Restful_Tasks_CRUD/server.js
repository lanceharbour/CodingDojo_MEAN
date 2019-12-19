const express = require("express");
const path = require("path");
const app = express();

require('./server/config/mongoose.config.js');

app.use(
    express.json(),
    express.urlencoded({extended: true}),
    express.static( __dirname + '/public/dist/public')
    );

require('./server/routes/task.routes.js')(app);

app.all("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "/public/dist/public/index.html"))
);

app.listen(8000, () => console.log("listening on port 8000"));