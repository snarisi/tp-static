var express = require('express');
var router = express.Router();
var Place = require('../models/').Place;
var Hotel = require('../models/').Hotel;
var Activity = require('../models/').Activity;
var Restaurant = require('../models/').Restaurant;
var Promise = require('bluebird');

router.get('/', function(req,res,next){
	var getAllArr = [];
	getAllArr.push(Hotel.find().exec());
	getAllArr.push(Activity.find().exec());
	getAllArr.push(Restaurant.find().exec());
	Promise.all(getAllArr).then(function(resultsArr) {
		console.log(resultsArr);
		res.status(200).render('index', {
			Hotels: resultsArr[0],
			Activities: resultsArr[1],
			Restaurants: resultsArr[2]
		});
	}, next);
})

module.exports = router;