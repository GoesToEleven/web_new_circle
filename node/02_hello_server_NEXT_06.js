/**
 * Created by toddmcleod on 10/17/14.
 */

/*
 what happens if we now go to this URL
 http://localhost:8080/anything/something/else

 can we access the URL path?

 */

var http = require('http');
var server = http.createServer(requestReceived).listen(8080);

function requestReceived (request, response){
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("Hello <b>there!</b>")
    console.log("incoming request");
    //ADD THIS
    console.log(request);
    /*
     and you can get to properties like this
     console.log(request.url);

     or whatever property is there
     */
    response.end();
}

