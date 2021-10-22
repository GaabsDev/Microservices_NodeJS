require("dotenv").config();
const path = require('path');
const response = require('./app/Http/response')
const accountRouter = require('./app/modules/Account/routes/index');
const express = require('express'), mongo = require("./mongoose")

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
