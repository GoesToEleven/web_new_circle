/**
 * Created by toddmcleod on 10/17/14.
 */

// at command prompt control c to stop server
// server will restart when you run this code

var http = require('http');
var server = http.createServer(requestReceived).listen(8080);

function requestReceived (request, response){
    // write header to client
    // http codes
    // 404 - no page there, no resource there, not found
    // 200 - means "I have what you want" ... when you get
    // what you requested when browsing the web, your browser
    // is getting a 200 code ... we have what you want
    response.writeHead(200)
    // message to the browser
    response.write("Hello there!")
    // message to the server's console
    console.log("incoming request");
    // terminates the client's http session
    response.end();
}


// after running in command prompt
// open browser and goto
// localhost:8080
