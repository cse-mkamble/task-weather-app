const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { loginCheck, isAuth, isAdmin, authMiddleware } = require("../middleware/auth");

router.post("/isadmin", authController.isAdmin);
router.post('/register', authController.register)
router.post("/login", authController.login);
// router.post("/user", loginCheck, isAuth, isAdmin, authController.allUser);

module.exports = router;
