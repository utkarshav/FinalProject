var h = require('http')
var u = require('url')
var fs = require('fs')

h.createServer(function(req,res){
	var parsed_url = u.parse(req.url,true)
	var pname = parsed_url.pathname;
	var fname = pname.substring(1);
	
	fs.readFile(fname,function(err,data){
		if(!err)
		{
			res.writeHead(200,{'content-type':'text/html'});
			res.write(data.toString());
		}
		else
			res.write("no data in the file")
		
		res.end();
	});
	
	
}).listen(9000,function(){
	console.log("server started on 9000");
});