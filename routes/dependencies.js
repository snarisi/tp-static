var express = require('express');
var router = express.Router();
var path = require('path');

router.use(function (req, res, next) {
  console.log(req);
  console.log(path.join(__dirname, '../node_modules'));
  next();
})

router.use(express.static(path.join(__dirname, '../node_modules')));

module.exports = router;