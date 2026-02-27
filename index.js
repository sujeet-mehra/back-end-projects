const express = require('express')
const app = express()

const dbConnect = require('./database/db-connection')

// first parametr - path, second - function, / root path
app.get('/', function (req, res) {
    res.send('Hello World!');
});

const port = 4001
app.listen(port, function () {
    console.log(`Server listening on port http://localhost:${port}`);
    dbConnect();
});
