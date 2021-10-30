const express = require("express");
const router = express.Router()
const { registerUser, loginUser, logout, forgotPassword } = require("../controllers/user.controller");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword)
router.route("/logout").post(logout)

module.exports = router;