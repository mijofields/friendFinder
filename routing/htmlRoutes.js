const friends = require("../data/friends.js");
const friendsArr	= friends.friendsArr;
const User = friends.User;


const path = require('path');


module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));

	});

	app.post('/survey', function(req, res){
			res.sendFile(path.join(__dirname, '../public/survey.html'));
	});


};