var router = require("express").Router();
var passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  res.redirect("/thoughts");
});
// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/thoughts",
    failureRedirect: "/thoughts",
  })
);

// OAuth logout route

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/thoughts");
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;
