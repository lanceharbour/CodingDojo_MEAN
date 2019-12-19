const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/Restful_Task_API', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch(reason => console.log("Something went wrong with connection"));
