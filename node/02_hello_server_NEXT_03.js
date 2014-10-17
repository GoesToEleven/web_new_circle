/**
 * Created by toddmcleod on 10/17/14.
 */


var http = require('http');
var server = http.createServer(requestReceived).listen(8080);

function requestReceived (request, response){
    response.writeHead(200)
    // THIS DOESN'T RENDER ... B/C IT'S PLAIN TEXT
    // I DIDN'T TELL THE CLIENT WHAT TYPE OF TEXT I SENT
    // YOU NEED TO SET THE HEADER ... WHICH WE'LL DO IN THE NEXT FILE ...
    response.write("Hello <b>there!</b>")
    console.log("incoming request");
    response.end();
}