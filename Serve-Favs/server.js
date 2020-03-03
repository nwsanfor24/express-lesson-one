const http = require("http");
const fs = require("fs");

const PORT = 8500;

const server = http.createServer(handleRequest);



//Function which handles incoming requests and sends responses
function handleRequest(req, res) {

    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

//Start our server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});