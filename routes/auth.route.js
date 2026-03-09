const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/user.controller");

http://localhost:4001/api/signup
router.post("/signup", signUp);

module.exports = router;
