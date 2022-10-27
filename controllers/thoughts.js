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
  res.render("thoughts/new");
}
function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/movies/new');
    // res.redirect('/movies');
    res.redirect(`/movies/${movie._id}`);
  });
}