require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./database/db-connection");
const router = require("./routes/auth.route");
// middleware for json format accept data from client
app.use(express.json());

http://localhost:4001/api
app.use("/api", router);

// first parametr - path, second - function, / root path
app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = 4001;
app.listen(port, function () {
  console.log(`Server listening on port http://localhost:${port}`);
  dbConnect();
});
