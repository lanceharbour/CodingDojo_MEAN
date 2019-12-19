const mongoose = require('mongoose');
const path = require('path');

mongoose
.connect('mongodb://localhost/RateMyCakes', {
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch(reason => console.log("Something went wrong connecting to mongodb"));

