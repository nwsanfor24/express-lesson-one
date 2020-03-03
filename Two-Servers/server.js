const http = require("http");

//Server 1
var PORT1 = 7000;

function handleRequest(request, response) {
    response.end("All you have to decide, is what to do with the time that is given to you" + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1);
});

//Server 2
var PORT2 = 7500;

function anotherRequest(request, response) {
    response.end("All who wander are not lost" + request.url);
}

const anotherServer = http.createServer(anotherRequest);

anotherServer.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
});