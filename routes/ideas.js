var router = require("express").Router();
var ideasCtrl = require("../controllers/ideas");

router.get("/saadsays", isLoggedIn, ideasCtrl.newIdea);
router.get("/", ideasCtrl.index);
router.post("/:id", ideasCtrl.create);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;
