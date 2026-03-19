const jwt = require("jsonwebtoken");

async function isAuthenticated(req, res, next) {
  try {
    const token = req.headers["access-token"];
    if (!token) {
      res.status(400).json({
        success: false,
        message: "Unauthenticated",
      });
    }
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
}

module.exports = isAuthenticated;
