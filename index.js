// console.log("merhaba")

var http = require("http"); // import http from "http";
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else if (req.url == "/products") {
    fs.readFile("products.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      res.write(html);
      res.end();
    });
  }

  res.end();
});

server.listen(4000, () => {
  console.log("server is running at port 4000");
});
