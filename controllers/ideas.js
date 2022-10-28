const Idea = require("../models/ideas");
module.exports = {
  index,
  newIdea,
  create,
};
function index(req, res, next) {
  console.log(req.user);
  Idea.find().then((results) => {
    res.render("ideas/index", { user: req.user, ideas: results });
    // removed 'thoughts' from line 11 inside object.
  });
}
function newIdea(req, res) {
  console.log("user", req.user);
  res.render("ideas/new", { title: "New Idea", user: req.user });
}
function create(req, res) {
  console.log("creating idea");
  const idea = new Idea(req.body);
  console.log(idea);
  idea.save(function (err) {
    if (err) console.log(err.message);

    return res.redirect("/thoughts");
  });
}
// above create function might not work.
