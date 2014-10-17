// We load an external module from node.js (including plugins)
var http = require('http');
// load an external FILE SYSTEM module
// http://nodejs.org/api/fs.html
var fs = require('fs');
var fileContents;

// read a file
fs.readFile("index.html", function(error, data){
    // the file is now in data; assign it to a variable
    fileContents = data;
    // don't use 'var' in above b/c then it would only be local
});

var server = http.createServer(requestReceived).listen(8080);


function requestReceived(request, response) {
    var url = request.url;
    if (url == "/") {
        // write header of HTTP response
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        // Message to the browser
        response.write(fileContents);
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
    }
    // Message to the server's cons`
    console.log(request.url);
    response.end();
}