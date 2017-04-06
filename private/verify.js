var fs = require('fs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

module.exports = function (req, res, next) {
	var cert = fs.readFileSync('./private/keys/public.key');
	jwt.verify(req.get('Authorization'), cert, function (err, decoded) {
        if (err) {
            req.user = null;
        } else {
            User.findOne({_id: decoded.userID}, function(err, user) {
              if (err) {
                req.user = null;
              } else {
                req.user = user;
              }
            });
        }
        next();
    })
};
