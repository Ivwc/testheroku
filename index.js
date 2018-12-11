const http = require("http");

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen(PORT);
console.log(`Server running at http://${hostname}:${PORT}/`);





// var server = require("./server");

// server.start();



// var http = require("http");
// var fs = require('fs');
// var url = require('url');

// const hostname = "127.0.0.1";
// const PORT = process.env.PORT || 5000;

// const server = http.createServer((request, response) => {
//     console.log("Request received...");
//     var pathname = url.parse(request.url).pathname;
//     var ext = pathname.match(/(\.[^.]+|)$/)[0]; //取得后缀名
//     switch (ext) {
//         case ".css":
//         case ".js":
//             fs.readFile("." + request.url, 'utf-8', function(err, data) { //读取内容
//                 if (err) throw err;
//                 response.writeHead(200, {
//                     "Content-Type": {
//                         ".css": "text/css",
//                         ".js": "application/javascript",
//                     }[ext]
//                 });
//                 response.write(data);
//                 response.end();
//             });
//             break;
//         default:
//             fs.readFile('./index.html', 'utf-8', function(err, data) { //读取内容
//                 if (err) throw err;
//                 response.writeHead(200, {
//                     "Content-Type": "text/html"
//                 });
//                 response.write(data);
//                 response.end();
//             });

//     }
// });

// server.listen(PORT);
// console.log(`Server running at http://${hostname}:${PORT}/`);