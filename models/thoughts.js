const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema(
  {
    thought: [{ body: String, date: Date }],
    // facts: [factSchema]
  },
  {
    // timestamps: true,
  }
);

module.exports = mongoose.model("Thought", thoughtSchema);
