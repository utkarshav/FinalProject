var exp= require('express');
var app= exp();

app.use(exp.static('images'));
app.get('/image',function(res,req)){
	res.send("<img src= 'loginpic.jpg'/> ")
});
app.listen(9000,function(){
	console.log("Server started at 9000");
});