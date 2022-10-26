var express = require('express');
var router = express.Router();

/* This is the assignment for npm */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Divya Sree Vadlakonda' });
});

module.exports = router;
