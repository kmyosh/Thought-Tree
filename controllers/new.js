const newThought = require("../models/new");

module.exports = {
  index,
  newThought
};

function newThought(req, res) {
  res.render("thoughts/new");
}
