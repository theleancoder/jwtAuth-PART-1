var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User');
var jwt = require('jwt-simple');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

function createSendToken(user, res) {

    var payload = {
        sub: user.id
    }

    var token = jwt.encode(payload, 'shhh...');

    res.status(200).send({user: user.toJSON(), token: token});
}

app.post('/register', function (req, res) {
    var user = req.body;

    var newUser = new User({
        email: user.email,
        password: user.password
    });

    newUser.save(function (err) {
        createSendToken(newUser, res);
    });
});

mongoose.connect('mongodb://localhost/jwtAuthApp');

var server = app.listen(3000, function () {
    console.log('api listeing on ', server.address().port);
});