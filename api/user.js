var express = require('express');
var router = express.Router();
var fs = require('fs');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.json({user: req.user});
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    admin: req.body.admin
  });
  user.save(function(err, result) {
    console.log("saving");
    if (err) {
      console.log(err);
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

router.post('/auth/login', function(req, res, next) {
  console.log(mongoose.connection.readyState);
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    var cert = fs.readFileSync('./private/keys/private.key');
    var token = jwt.sign({user: user.toJSON()}, cert, {algorithm: 'RS256', expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      user: user.toJSON()
    });
  });
});

module.exports = router;
