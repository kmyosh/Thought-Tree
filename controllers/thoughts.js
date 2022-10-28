const Thought = require("../models/thoughts");
module.exports = {
  index,
  newThought,
  create,

  // addFact,
  // delFact,
};

function index(req, res, next) {
  // console.log(req.user);
  // console.log("index");

  Thought.find({}, function (err, thoughts) {
    // thoughts.forEach(t =>{
    //   console.log(t.idea);
    // })

    res.render("thoughts/index", { user: req.user, thoughts });
  });
}
// do i need a show function here?
function newThought(req, res) {
  res.render("thoughts/new", {
    title: "New Thought",
    user: req.user,
  });
}
function create(req, res) {
  const thought = new Thought(req.body);

  thought.save(function (err) {
    if (err) return res.redirect("/thoughts/new");
    // res.redirect('/movies');
    res.redirect("/thoughts");
  });
}
