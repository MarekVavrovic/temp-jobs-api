const express = require("express");
const router = express.Router();

//import functions from controllers folder, auth.js
const { register, login } = require("../controllers/auth");

//set up routes using controllers functions
router.post("/register", register);
router.post("/login", login);

//export for app.js
module.exports = router;
