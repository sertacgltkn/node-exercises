// console.log("merhaba")

var http = require("http"); // import http from "http";

var server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url == "/") {
        res.write("<h1>Home</h1>")
    } else if(req.url == "/products") {
        res.write("<h1>Products</h1>")
    } else {
        res.write("<h1>404</h1>")
    }

    res.end();
})

server.listen(3000, () => {
    console.log("server is running at port 3000")
});
