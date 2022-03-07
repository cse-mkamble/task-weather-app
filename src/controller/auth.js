const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const userModel = require("../models/users");

class Auth {
  async isAdmin(req, res) {
    let { loggedInUserId } = req.body;
    try {
      let loggedInUserRole = await userModel.findById(loggedInUserId);
      res.json({ role: loggedInUserRole.userRole });
    } catch {
      res.status(404);
    }
  }

  async allUser(req, res) {
    try {
      let allUser = await userModel.find({});
      res.json({ users: allUser });
    } catch {
      res.status(404);
    }
  }

  /* User Registration/Signup controller  */
  async register(req, res) {
    try {
      let { name, username, email, password, cf_password, user_role } = req.body;
      let cPassword = cf_password;
      let userRole = user_role;
      let error = {};
      if (!name || !username || !email || !password || !cPassword) {
        error = {
          ...error,
          name: "Filed must not be empty",
          username: "Filed must not be empty",
          email: "Filed must not be empty",
          password: "Filed must not be empty",
          cPassword: "Filed must not be empty",
        };
        return res.json({ error });
      }
      if (name.length < 3 || name.length > 25) {
        error = { ...error, name: "Name must be 3-25 charecter" };
        return res.json({ error });
      } else {
        // If Email & Number exists in Database then:
        try {
          password = bcrypt.hashSync(password, 10);
          const data = await userModel.findOne({ email: email });
          if (data) {
            error = {
              ...error,
              password: "",
              name: "",
              email: "Email already exists",
            };
            return res.json({ error });
          } else {
            let newUser = new userModel({ name, username, email, password, userRole });
            newUser.save().then((data) => {
              const token = jwt.sign({ _id: data._id, role: data.userRole }, JWT_SECRET)
              const encode = jwt.verify(token, JWT_SECRET)
              return res.json({ token: token, user: encode, success: "Your Account have create successfully!" })
            }).catch((error) => {
              return res.json({ error: "Alread exit your email!" })
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  }

  /* User Login/Signin controller  */
  async login(req, res) {
    let { email, password } = req.body;
    if (!email || !password) return res.json({ error: "Fields must not be empty" });
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  }

}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '10m' })
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}

const authController = new Auth();
module.exports = authController;
