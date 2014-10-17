/**
 * Created by toddmcleod on 10/17/14.
 */

var http = require('http');
var server = http.createServer(requestReceived).listen(8080);

function requestReceived (request, response){
    // add an object in JSON format for settings ...
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("Hello <b>there!</b>")
    console.log("incoming request");
    console.log(request)
    response.end();
}

