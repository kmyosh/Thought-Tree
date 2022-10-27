const Thought = require("../models/thoughts");
module.exports = {
  index,
  newThought,
  create,

  // addFact,
  // delFact,
};

function index(req, res, next) {
  console.log("index");
  res.render("thoughts/index", { user: req.user });
}
// do i need a show function here?
function newThought(req, res) {
  console.log("new thought");
  res.render("thoughts/new", { title: "New Thought", user: req.user });
}
function create(req, res) {
  const thought = new Thought(req.body);
  thought.save(function (err) {
    if (err) return res.redirect("/thoughts/new");
    // res.redirect('/movies');
    res.redirect("/thoughts");
  });
}
