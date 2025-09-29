// Controller functions for authentication

// Google OAuth callback
exports.googleCallback = (req, res) => {
  // Successful authentication, redirect to dashboard or home
  res.redirect("/dashboard");
};

// Logout
exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
};

// Get current user
exports.getCurrentUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      success: true,
      user: req.user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }
};

// Check authentication status
exports.checkAuth = (req, res) => {
  res.json({
    authenticated: req.isAuthenticated(),
    user: req.user || null,
  });
};
