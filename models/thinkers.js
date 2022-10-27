const mongoose = require("mongoose");

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
const factSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

const thinkerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
    cohort: String,
    avatar: String,
    facts: [factSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thinker", thinkerSchema);
