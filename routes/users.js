var express = require('express');
var util = require('util');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send( util.format('respond with a resource %j',req.query));
});

module.exports = router;
