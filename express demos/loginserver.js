var exp = require('express');
var bp = require('body-parser')

var app = exp();
//app.use(bp.json());
app.use(bp.urlencoded({extended: false}))  //populates req.body object

app.listen(9000,function(){
	console.log("exp server started at 9000");
})

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/loginform.html");
})

app.get('/logincheck',function(req,res){
	//req.query - gives the values in the query string
	if(req.query.uid == "bakul" && req.query.pwd == "bakul123")
	    res.send("Login success");
	else
	    res.send("Login failed"); 
})

app.post('/logincheck', function(req,res){
	if(req.body.uid == "bakul" && req.body.pwd == "bakul123")
	    res.send("Login success");
	else
	    res.send("Login failed"); 
});

app.all('*',function(req,res){
	res.send("URL incorrect")
})
