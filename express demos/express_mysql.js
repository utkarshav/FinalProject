var exp = require('express');
var mysql = require('mysql2');

var app = exp();

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"test"
})

con.connect(function(err){
	if(!err)
            console.log('db connected');
	else
	    console.log('db connection failed');	
})

app.listen(9000,function(){
	console.log("exp server started at 9000");
})

app.get('/emps',function(req,res){
	con.query('select * from emp10 ',function(err,result){
		if(!err){
		     res.write("<table border=1>");
		     result.forEach(function(v){
			 res.write("<tr>");
		         res.write("<td>"+v.EMPNO+"</td>");
		         res.write("<td>"+v.ENAME+"</td>");
		         res.write("<td>"+v.JOB+"</td>");
		         res.write("<td>"+v.DEPTNO+"</td>");
			 res.write("</tr>");
		     });
		     res.write("</table>");		
		     res.end();	
		}
	})
});

app.all('*',function(req,res){
	res.send("URL incorrect")
})
