var friends = require("../data/friends.js");
var friendsArr	= friends.friendsArr;
var User = friends.User;


var path = require('path');


module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});


	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});



};