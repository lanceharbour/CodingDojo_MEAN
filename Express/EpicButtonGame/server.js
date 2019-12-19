const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(6789, () => console.log("listening on port 6789"));
const io = require('socket.io')(server);

let clickCount = 0;

io.on('connection', function (socket) {
    console.log('Client connected....');

    socket.on('clicked', function(data) {
        clickCount++;
        console.log(clickCount);
        io.emit('clickUpdate', clickCount);
    });

    socket.on('clear', function(data) {
        clickCount = 0;
        console.log(clickCount);
        io.emit('clickUpdate', clickCount);
    });
});