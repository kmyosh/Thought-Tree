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
  // console.log("user", req.user);

  // console.log("thought", req.query.thoughtId);
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
  // const idea = new Idea(req.body);
  // console.log(idea);
  // Thought.findOne();
  // idea.save(function (err) {});
  // if (err) console.log(err.message);
  return res.redirect("/thoughts");
  // });
}
// above create function might not work.
