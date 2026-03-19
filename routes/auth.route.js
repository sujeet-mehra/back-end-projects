const express = require("express");
const router = express.Router();
const { signUp, login, profile } = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

// http://localhost:4001/api/signup
router.post("/signup", signUp);

//localhost:4001/api/login
router.post("/login", login);

//localhost:4001/api/profile
router.get("/profile", isAuthenticated, profile);

module.exports = router;
