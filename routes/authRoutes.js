const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");

// @route   GET /auth/google
// @desc    Authenticate with Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @route   GET /auth/google/callback
// @desc    Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  authController.googleCallback
);

// @route   GET /auth/logout
// @desc    Logout user
router.get("/logout", authController.logout);

// @route   GET /auth/current
// @desc    Get current user
router.get("/current", authController.getCurrentUser);

// @route   GET /auth/status
// @desc    Check authentication status
router.get("/status", authController.checkAuth);

module.exports = router;
