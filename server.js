var User = require("./data/friends.js");

var express = require("express");

var app = express();
var port = 3666;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");







app.listen(port);