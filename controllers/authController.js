// Controller functions for authentication

// Google OAuth callback
exports.googleCallback = (req, res) => {
  // IMPORTANT: this must point at the React app's callback route, not
  // at this server's own /dashboard endpoint. A bare "/dashboard"
  // redirect resolves against this Express server's own origin, which
  // is why users were seeing the raw { message, user } JSON instead of
  // the actual app — the backend was redirecting to itself.
  const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
  res.redirect(`${clientUrl}/auth/callback`);
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
  console.log("Current user:", req.user);
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
