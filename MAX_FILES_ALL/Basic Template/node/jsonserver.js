var http = require('http');
var fs = require('fs');
var fileContents;
var fileName = "tasks.json";

function readJSON() {
    fs.readFile(fileName, function(error, data) {
        // The file is now in data
        fileContents = data;
    });
}
readJSON();

var server = http.createServer(function(request, response) {
    console.log(request.url);
    if (request.url == "/") {
        // It's requesting the JSON
        response.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        response.write(fileContents);
    } else {
        // It's sending me a new task
        var task = request.url.substring(1);
        var tasks = JSON.parse(fileContents);
        tasks.push(task);
        fs.writeFile(fileName, JSON.stringify(tasks), function(err) {
            console.log("Error saving file");
        });
        response.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        response.write("true");
        readJSON();
    }
    response.end();
});
server.listen(8080);