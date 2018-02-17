var friends = require("./app/data/friends.js");
var friendsArr	= friends.friendsArr;
var User = friends.User;

var express = require("express");
var path = require('path');

var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");


var app = express();
var PORT = 4321;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// app.use(express.static());
 

app.get("/api/friends", function(req, res) {

	res.render("allFriends", {data: friendsArr});
  // res.json(friendsArr);
});
app.get("/", function(req, res) {
  res.render("home");
});









app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});