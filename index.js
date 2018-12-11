// const express = require('express');
// var url = require('url');
// var fs = require('fs');
// const bodyParser = require('body-parser');
// const app = express();

// const port = process.env.POST || 5000;

// //使用body-parser中间件 要使用post的话就需要使用body-parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extends: false }));

// app.get("/", (request, response) => {
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
// app.post('/api/getform', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     console.log('email:' + email);
//     console.log('password:' + password);

// });
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// })






const server = require("./server");
server.start();