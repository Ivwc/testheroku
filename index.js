const express = require('express');
var url = require('url');
var fs = require('fs');
const bodyParser = require('body-parser');
const app = express();


const port = process.env.PORT || 5000;


app.use(express.static('public'))

//使用body-parser中间件 要使用post的话就需要使用body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));


app.post('/api/getform', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('email:' + email);
    console.log('password:' + password);

});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})






// const server = require("./server");
// server.start();