var exp = require('express');

var app = exp();

app.listen(9000,function(){
	console.log("exp server started at 9000");
})

app.get('/home',function(req,res){
	res.send("<h1> Home Page </h1>");
});

app.get('/index',function(req,res){
	res.write("<p> HTML and CSS </p>");
	res.write("<p> Javascript </p>");
	res.write("<p> JQuery </p>");
	res.write("<p> Bootstrap </p>");
	res.end();
})

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/loginform.html");
})

app.all('*', function(req,res){
	res.send("<p> Please check URL </p>");
})