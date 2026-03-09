const User = require("../schemas/user.schema");

// http://localhost:4001/api/signup
// data: name, email, password from client/browser/postman
// how to get data from client/browser/postman--> req.body
async function signUp(req, res) {
  //   const { name, email, password } = req.body;
  //step-1 get data from client using req.body
  const data = req.body;

  //step-2 store data into database
  const user = new User(data);
  await user.save();

  //step-3 return response to client/browser/postman
  res.status(200).json({ message: "User created successfully", data: user });
}

// http://localhost:4001/login
async function login(req, res) {}
// http://localhost:4001/profile
async function profile(req, res) {}

module.exports = { signUp, login, profile };
