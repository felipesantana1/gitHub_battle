const express = require("express");
const app = express();
const path = require("path"); 
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./public/dist")));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8910, function(){
    console.log("App is listening on port 8910");
});
