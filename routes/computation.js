var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var variable1 = Math.floor(Math.random()*30);
    var variable2 = Math.fround(variable1);
    var variable3 = Math.random(variable1);
    var variable4 = Math.round(variable1);
  res.render('computation', { title: 'Math.fround() applied to ' + variable1 + 'is' + variable2 },
  { title1: 'Math.random() applied to ' + variable1 + 'is' + variable3 },
  { title2: 'Math.round() applied to ' + variable1 + 'is' + variable4 })
});

module.exports = router;
