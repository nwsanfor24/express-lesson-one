const http = require("http");

const PORT = 9000;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    const requestData = "";

    req.on("data", function(data) {
        requestData += data;
    });

    req.on("end", function() {
        console.log("You did a", req.method, "with the data:\n", requestData);
        res.end();
    });
}

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + POST);
});