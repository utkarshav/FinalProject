var h = require('http')
var u = require('url')

h.createServer(function(req,res){
	var url = u.parse(req.url,true)
	console.log(url.pathname)
	console.log(url.query.name)
	console.log(url.query.cl)
	var nm = url.query.name;
	var cl = url.query.cl;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h2 style='color:"+cl+"'> ")
	res.write("welcome "+nm);
	res.write("</h2>");
	res.end();
}).listen(9000,function(){
	console.log("server started on 9000");
});