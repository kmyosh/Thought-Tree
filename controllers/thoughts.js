const Thinker = require("../models/thinker");

module.exports = {
  index,
  // addFact,
  // delFact,
};

function index(req, res, next) {
  console.log(req.query);
  res.render("thoughts/index", { user: req.user });
  // Make the query object to use with Thinker.find based up
  // the user has submitted the search form or now
  // let modelQuery = req.query.name
  //   ? { name: new RegExp(req.query.name, "i") }
  //   : {};
  // // Default to sorting by name
  // let sortKey = req.query.sort || "name";
  // Thinker.find(modelQuery)
  //   .sort(sortKey)
  //   .exec(function (err, thinkers) {
  //     if (err) return next(err);
  //     // Passing search values, name & sortKey, for use in the EJS
  //     res.render("thinkers/index", {
  //       thinkers,
  //       name: req.query.name,
  //       sortKey,
  //       user: req.user,
  //     });
  //   });
}

// function addFact(req, res, next) {
//   req.user.facts.push(req.body);
//   req.user.save(function (err) {
//     res.redirect("/thinkers");
//   });
// }

// function delFact(req, res, next) {}
