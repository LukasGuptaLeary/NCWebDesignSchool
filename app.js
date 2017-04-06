var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var verify = require('./private/verify');

var app = express();

mongoose.connect('localhost:27017/ncwds');

app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use(verify);

var normalizedPath = require("path").join(__dirname, "api");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  var path = "/api/" + file.split(".")[0];
  console.log(file);
  app.use(path, require("./api/" + file.split(".")[0]));
});

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = app;
