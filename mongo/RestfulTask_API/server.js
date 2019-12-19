const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/client/static"));

require('./server/config/task.mongoose.js');
require('./server/routes/task.routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));