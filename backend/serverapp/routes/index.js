var express = require('express');
var router = express.Router();

/* Testing oage. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend works correctly' });
});

module.exports = router;
