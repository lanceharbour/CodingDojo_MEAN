const express = require("express");
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost/MessageBoard', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const CommentSchema = new mongoose.Schema({
    comment: { type: String, required: true, minlength: 2},
    name: {type: String, required: true, minlength: 3}
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);

const MessageSchema = new mongoose.Schema({
    message: {type: String, required: true, minlength: 2},
    name: {type: String, required: true, minlength: 3},
    comments: [CommentSchema]
}, {timestamps: true});

const Message = mongoose.model('Message', MessageSchema);

app.get('/', (req, res) => {
    Message.find()
        .then(data => res.render('index', {messages: data, moment: moment}))
        .catch(err => {
            console.log("Error retrieving messages:", err);
            res.redirect('/');
        })
});

app.post('/addmessage', (req, res) => {
    console.log(req.body);
    const message = new Message(req.body);
    message.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("Add message error:", err);
            res.redirect('/');
        });
});

app.post('/addcomment/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    const comment = new Comment(req.body);
    Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}})
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("Add comment err", err);
            res.redirect('/');
        });
});

app.listen(8000, () => console.log("listening on port 8000"));