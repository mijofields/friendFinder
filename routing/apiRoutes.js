const path = require('path');

const friends = require("../data/friends.js");
const friendsArr = friends.friendsArr;
const bestie = friends.bestie
const User = friends.User;

module.exports = function(app){

	app.post('/api/friends', function(req, res) {


		var user =  new User (req.body.name, req.body.species, req.body.scores);
		
		user.match();
		res.json(user.bestie); 	
		return;
		
	});




};