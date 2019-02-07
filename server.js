//dependencies and boilerplate

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");


const app = express();
const port = process.env.PORT || 4812;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));


//routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

//setInterval to ping the app every 5 mins to prevent it going idle

setInterval(function() {

    http.get("https://tranquil-thicket-86715.herokuapp.com");
  }, 300000);
    