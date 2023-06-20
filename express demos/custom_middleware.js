var exp = require('express');

var app = exp();

app.listen(9000, function(){
	console.log("express app - 9000");
})

app.use(function(req,res,next){
      console.log("in general middleware");
	next();
})

app.use(function(req,res,next){
      console.log("in general middleware 2");
      next();
})

app.use('/h*',function(req,res,next){
      console.log("in specific middleware - home request");
      next();
})

app.get('/home',function(req,res){
	res.send("<h1> Home Page </h1>");
})

app.all('*', function(req,res){
	res.send("<p> Invalid URL </p>");
});
