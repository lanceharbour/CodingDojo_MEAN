const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost/BeltExam', {
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch(reason => console.log("Something went wrong connecting to mongodb", reason));