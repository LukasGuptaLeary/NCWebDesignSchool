var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({student: "works!"});
});

module.exports = router;
