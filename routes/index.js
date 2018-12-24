var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { title: 'Express Exercise' });
});

// About page
router.get('/news', function(req, res, next) {
  res.render('content/news', { title: 'News Page' });
});

// Contact page
router.get('/info', function(req, res, next) {
  res.render('content/info', { title: 'Info Page' });
});


module.exports = router;
