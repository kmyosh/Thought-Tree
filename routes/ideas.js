var router = require("express").Router();
var ideasCtrl = require("../controllers/ideas");

router.get("/", ideasCtrl.index);
router.get("/new", isLoggedIn, ideasCtrl.newIdea);
router.post("/", ideasCtrl.create);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;