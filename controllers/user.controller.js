const User = require("../schemas/user.schema");
const jwt = require("jsonwebtoken");

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
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const checkUserExits = await User.findOne({ email: email });

    if (!checkUserExits) {
      res.status(400).json({ message: "User not found" });
    }

    if (checkUserExits.password === password) {
      const token = jwt.sign(
        {
          id: checkUserExits._id,
          name: checkUserExits.name,
          email: checkUserExits.email,
        },
        process.env.SECRET_KEY,
      );
      console.log(token);
      res.status(200).json({
        success: true,
        message: "User logged in",
        token,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "passsword incorrect!",
      });
    }

    console.log(checkUserExits);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error });
  }
}
// http://localhost:4001/profile
async function profile(req, res) {
  try {
    const user = req.user;
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

module.exports = { signUp, login, profile };
