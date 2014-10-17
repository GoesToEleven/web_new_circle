/**
 * Created by toddmcleod on 10/17/14.
 */

// to load local file (our own http module, for instance)
//var myExternalModule = require('./filename.js');

// we load an external module from nod.js (including plugins)
// go and load the http module; this comes default with node.js
var http = require('http');

// see the object
//console.log(http);

// create the server
// you can create more than one server
var server = http.createServer(function(request, response){
   console.log("incoming request");
});


/*
* you can also do it like this
*

var server = http.createServer(requestReceived);

function requestReceived (request, response){
 console.log("incoming request");
 }

*
* */

// start the server
// any number for the port works
// usually, 80 or 8080
// any number less than 65536 (2^16)
// usually you'll use numbers after 1024 as less are used by OS
// if you created more than one server, you can have them listening on different ports
// here is setting the port
server.listen(8080)


/*

you can also do it like this

http.createServer(requestReceived).listen(9090);

 */

// run it at the command prompt
// the server will now be listening for a request from a client
// go to a browser
// type localhost:8080
// goto command prompt
// you'll have an incoming request


// now you can look up your IP address
// on a mac go to wifi symbol / open network preferences
// then enter IP:PORT ... eg, 10.61.134.21:8080 ... and you will be able to receive requests from others on internet


// ADD TO YOUR CODE NOW ... GO TO NEXT FILE


