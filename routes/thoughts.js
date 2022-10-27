var router = require("express").Router();
var thoughtsCtrl = require("../controllers/thoughts");

// GET /students
router.get("/", thoughtsCtrl.index);
router.get("/new", isLoggedIn, thoughtsCtrl.newThought);
router.post("/", thoughtsCtrl.create);
// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post('/facts', thoughtsCtrl.addFact);

// DELETE /facts/:id
// router.delete('/facts/:id', thoughtsCtrl.delFact);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;
