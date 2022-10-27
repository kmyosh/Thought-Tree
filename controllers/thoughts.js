const Thought = require("../models/thoughts");
module.exports = {
  index,
  newThought,
  create,

  // addFact,
  // delFact,
};

function index(req, res, next) {
  console.log(req.user);
  console.log("index");
  Thought.find().then((thoughts) => {
    res.render("thoughts/index", { user: req.user, thoughts });
  });
}
// do i need a show function here?
function newThought(req, res) {
  console.log("user", req.user);
  console.log("new thought");
  res.render("thoughts/new", { title: "New Thought", user: req.user });
}
function create(req, res) {
  console.log("creating");
  const thought = new Thought(req.body);
  console.log(thought);
  thought.save(function (err) {
    if (err) return res.redirect("/thoughts/new");
    // res.redirect('/movies');
    res.redirect("/thoughts");
  });
}
