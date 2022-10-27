const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema(
  {
    thought: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thought", thoughtSchema);
