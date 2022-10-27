const router = require("express").Router();
const thinkersCtrl = require("../controllers/thinkers");
const Thinker = require("../models/thinkers");

// GET /students
router.get("/", thinkersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post('/facts', thinkersCtrl.addFact);

// DELETE /facts/:id
// router.delete('/facts/:id', thinkersCtrl.delFact);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;
