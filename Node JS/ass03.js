
var h = require('http')

var server = h.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h2>welcome to web<h2>");
	res.end();
});
server.listen(9000,function(){
	console.log("server started on 9000");
});