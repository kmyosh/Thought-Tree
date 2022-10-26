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

const thoughtSchema = new mongoose.Schema(
  {
    comments: [{ body: String, date: Date }],
    // facts: [factSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thought", thoughtSchema);
