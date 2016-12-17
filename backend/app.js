'use strict';

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressValidator = require('express-validator');

let productApi = require('./routes/api/product'),
    categoryApi = require('./routes/api/category');

let app = express();
module.exports = app; //for testing

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(expressValidator());

/* Use this only for dev */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/categories', categoryApi);

app.use('/api/products', productApi);

const DEV_HOST = 'localhost', DEV_PORT = 3001;

app.listen(DEV_PORT, DEV_HOST, () => {
    console.log("JsCrowdSession backend server starting on " + DEV_HOST + ' ' + DEV_PORT);
});