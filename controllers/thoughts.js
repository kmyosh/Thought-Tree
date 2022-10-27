const Thinker = require("../models/thinkers");
const Thought = require("../models/thoughts");
module.exports = {
  index,
  newThought,
  create,
  show,

  // addFact,
  // delFact,
};

function index(req, res, next) {
  console.log(req.query);
  res.render("thoughts/index", { user: req.user });
}
function newThought(req, res) {
  res.render("thoughts/new", { title: "New Thought" });
}
function create(req, res) {
  const thought = new Thought(req.body);
  thought.save(function (err) {
    if (err) return res.redirect("/thoughts/new");
    // res.redirect('/movies');
    res.redirect("/thoughts");
  });
}
