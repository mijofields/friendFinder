var path = require('path');

var friends = require("../data/friends.js");
var friendsArr	= friends.friendsArr;
var User = friends.User;

// var userData = require("../public/friendsUser.js");


module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsArr);
	});

	app.post('api/friends', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));

		var user =  new User (newUser);
		console.log(user);
		// res.json(user);

	});




};