const Thought = require("../models/thoughts");

module.exports = {
  index,
  newIdea,
  create,
};
function index(req, res, next) {
  //   console.log(req.user);
  //   Idea.find().then((results) => {
  //     res.render("ideas/index", { user: req.user, ideas: results });
  //     // removed 'thoughts' from line 11 inside object.
  //   });
}
function newIdea(req, res) {
  const thoughtId = req.query.thoughtId;

  Thought.find({}, (err, thoughts) => {
    let thought;
    if (err) return err.message;

    thoughts.forEach((t) => {
      console.log(t._id);
      console.log("test", thoughtId);
      if (t._id == thoughtId) {
        thought = t;
      }
      console.log(thought);
    });
    res.render("./ideas/new", {
      thought,
      title: "New Idea",
      user: req.user,
      id: req.params.id,
    });
  });
}
function create(req, res) {
  console.log("creating idea");
  console.log(req.params.id);
  Thought.findById(req.params.id, function (err, thought) {
    if (err) return res.send(err.message);
    thought.idea.push(req.body);
    thought.save;
    thought.save(function (err) {
      if (err) return res.send(err.message);
      return res.redirect("/thoughts");
      // console.log(thought);
    });
  });
}
