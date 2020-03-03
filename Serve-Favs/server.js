const http = require("http");
const fs = require("fs");

const PORT = 8500;

const server = http.createServer(handleRequest);



//Function which handles incoming requests and sends responses
function handleRequest(req, res) {

    const path = req.url;

    switch (path) {

        case "/index.html":

        case "/movies.html":           

        case "/foods.html":

        case "/css-frameworks.html":
            
        default:
            return display404(path, res);
    }
}



//Start our server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});