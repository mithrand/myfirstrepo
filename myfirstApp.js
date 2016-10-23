var express = require("express");

var myServerApp = express();

myServerApp.get("/", inicio);


function inicio(request,response)
{
	response.sendFile('index.html', {root: __dirname })
}

myServerApp.listen(8080);