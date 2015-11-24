var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/tripPlanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new Schema({
	address: {type: String},
	city: {type: String},
	state: {type: String},
	phone: {type: String},
	location: {type: [Number]}	
});

var hotelSchema = new Schema({
	name: {type: String},
	place: {type: [placeSchema]},
	num_stars: {type: Number, min: 1, max: 5},
	amenities: {type: String}
});

var activitySchema = new Schema({
	name: {type: String},
	place: {type: [placeSchema]},
	age_range: {type: String}
});

var restaurantSchema = new Schema({
	name: {type: String},
	place: {type: [placeSchema]},
	cuisines: {type: String},
	price: {type: Number, min: 1, max: 5}
});

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
}