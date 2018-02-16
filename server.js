var User = require("./app/data/friends.js");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PORT = 6666;

var exphbs = require("handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");







app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
;