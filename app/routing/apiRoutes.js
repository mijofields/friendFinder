var path = require('path');

var friends = require("../data/friends.js");
var friendsArr	= friends.friendsArr;
var User = friends.User;


module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsArr);
	});




};