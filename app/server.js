//dependencies and boilerplate

var express = require("express");
var path = require("path");

var app = express();
var PORT = 4321;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));


//routes required as per the homework instructions
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});