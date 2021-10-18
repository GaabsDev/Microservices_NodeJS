const express = require('express'), mongo = require("./mongoose")
const path = require('path');
const response = require('./app/Http/response')
const accountRouter = require('./app/modules/Account/routes/index');
require("dotenv").config();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

global.response = response

mongo.connect(function(error){
    if (error) throw error;
});

app.use(accountRouter);

module.exports = app;
