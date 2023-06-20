var exp = require('express');

var app = exp();

app.listen(9000, function(){
	console.log("express app - 9000");
})

app.use(exp.static('images'));
app.use(exp.static('scripts'));
app.use(exp.static('styelsheets'));

app.get('/image',function(req,res){
	res.send("<img src='Jellyfish.jpg' width='200' height='200' />")
});

app.get('/background',function(req,res){
	res.sendFile(__dirname+"/background_scroll.html")
});

app.all('*',function(req,res){
	res.send("Please check URL");
})