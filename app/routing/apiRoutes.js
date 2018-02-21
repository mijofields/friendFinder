var path = require('path');

var friends = require("../data/friends.js");
var friendsArr	= friends.friendsArr;
var User = friends.User;

// var userData = require("../public/friendsUser.js");


module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsArr);
	});


	app.post('/api/friends', function(req, res) {

		var user =  new User (req.body.name, req.body.species, req.body.planet, req.body.gender, req.body.age, req.body.scores);
		user.match();
		console.log(user.bestie);
	});




};