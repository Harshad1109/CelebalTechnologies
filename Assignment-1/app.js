const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer( (req,res) => {
    res.writeHead(200,{"content-type" : "text/html"});
    fs.readFile("index.html" , (err,data) => {
        if(err) {
            res.writeHead(404);
            res.write("Error : File not Found");
        } else {
            res.write(data)
        }
        res.end();
    })
})

server.listen(port, (err) => {
    if(err) {
        console.log("Something went wrong.",err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
})