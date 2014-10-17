// To load a local file
//var myExternalModule = require('./filename.js');

// We load an external module from node.js (including plugins)
var http = require('http');
var fs = require('fs');
var fileContents;
fs.readFile("index.html", function(error, data) {
    // The file is now in data
    fileContents = data;
});

var server = http.createServer(requestReceived);
server.listen(8080);

function requestReceived(request, response) {
    var verb = request.method;
    var url = request.url;
    if (url=="/") {
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





