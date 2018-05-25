const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
const server = require('http').createServer(app);

const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 3001;

const {MONGODB_URI} = require('./config/');
require('./libs/db-connection');


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// global var
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.errors = [];
    next();
})

app.use(express.static(path.join(__dirname,'/public')));
app.use(require('./routes/')); // main routes

// if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
//   }

  server.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});