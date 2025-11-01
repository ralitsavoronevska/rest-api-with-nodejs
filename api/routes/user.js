const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const checkAuth = require("../middleware/check-auth");

// Public routes
router.post("/signup", UserController.user_signup);
router.post("/login", UserController.user_login);

// Protected routes
router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
