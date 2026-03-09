//step-1 import mongoose package
const mongoose = require("mongoose");
//step-2 detructure Schema class
const { Schema } = mongoose;
// step-3 create schama
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
// step-4 create document model
const User = mongoose.model("User", userSchema);
// step-5 export the model instance
module.exports = User;
