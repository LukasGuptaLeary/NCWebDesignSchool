var fs = require('fs');
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	var cert = fs.readFileSync('keys/public.key');
	jwt.verify(req.get('Authorization'), cert, function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
};
