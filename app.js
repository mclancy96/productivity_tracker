const express = require("express");
const app = express();
const methodOverride = require("method-override");
const random = require('random');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", function(req,res){
	res.render("index");
});

app.listen(process.env.PORT, function(){
	console.log("Hold generator has started...");
});