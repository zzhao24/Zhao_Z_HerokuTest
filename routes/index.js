var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'THE NEW J12',
        message: 'The J12 stands as the iconic CHANEL watch with an identity that has withstood the test of time.',
        img: 'banner-image.jpg'
    });
});

// get a dynamic user via the route parameter
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
