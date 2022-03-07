const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    userRole: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
