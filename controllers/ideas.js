const Idea = require("../models/ideas");
module.exports = {
  index,
  newIdea,
  create,
};
function index(req, res, next) {
  console.log(req, user);
  Thought.find().then((thoughts) => {
    res.render("ideas/index", { user: req.user, ideas, thoughts });
  });
}
function newIdea(req, res) {
  console.log("new idea", req.user);

  res.render("ideas/new", { title: "New Idea", user: req.user });
}
function create(req, res) {}
