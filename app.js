const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
	res.render("index");
});

app.listen(process.env.PORT, function(){
	console.log("Hold generator has started...");
});