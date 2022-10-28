const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ideaSchema = new mongoose.Schema(
  {
    idea: String,
  },
  {
    timestamps: true,
  }
);

const thoughtSchema = new mongoose.Schema(
  {
    thought: String,
    idea: [ideaSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thought", thoughtSchema);
