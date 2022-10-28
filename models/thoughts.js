const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema(
  {
    thought: String,
    select: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thought", thoughtSchema);
