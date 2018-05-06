var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get contact page
router.get('/contact',function (req, res,next) {
    res.render('contact',{title:'Contact'});
});


//get officebearers page
router.get('/official',function (req, res,next) {
    res.render('official',{title:'Contact'});
});

module.exports = router;
