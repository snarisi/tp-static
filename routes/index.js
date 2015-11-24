var express = require('express');
var router = express.Router();
var Place = require('../models/').Place;
var Hotel = require('../models/').Hotel;
var Activity = require('../models/').Activity;
var Restaurant = require('../models/').Restaurant;
var Promise = require('bluebird');
var path = require('path');

router.use(function (req, res, next) {
  console.log(req.url);
  console.log(path.join(__dirname, '../node_modules', req.url));
  next();
})

//router.use(function (req, res, next) {
//  express.static(path.join(__dirname, '../node_modules', req.url));
//  next();
//});

router.use('/public', express.static(path.join(__dirname, '../public')));

router.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));

router.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));

router.get('/', function(req,res,next){
	var getAllArr = [];
	getAllArr.push(Hotel.find().exec());
	getAllArr.push(Activity.find().exec());
	getAllArr.push(Restaurant.find().exec());
	Promise.all(getAllArr).then(function(resultsArr) {
		res.status(200).render('index', {
			Hotels: resultsArr[0],
			Activities: resultsArr[1],
			Restaurants: resultsArr[2]
		});
	}, next);
})

module.exports = router;