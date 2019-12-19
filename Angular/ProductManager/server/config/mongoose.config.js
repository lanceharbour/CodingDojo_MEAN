const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ProductManager', {
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch(reason => console.log("Something went wrong connecting to mongodb", reason));