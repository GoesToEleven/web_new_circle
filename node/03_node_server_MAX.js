// We load an external module from node.js (including plugins)
var http = require('http');
var server = http.createServer(requestReceived).listen(8080);

/*
OR THIS
 var server = http.createServer(requestReceived);
 server.listen(8080);

 */

function requestReceived(request, response) {
    var url = request.url;
    if (url == "/") {
        // write header of HTTP response
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        // Message to the browser
        response.write("Hello <b>there!</b>");
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
    }
    // Message to the server's cons`
    console.log(request.url);
    response.end();
}