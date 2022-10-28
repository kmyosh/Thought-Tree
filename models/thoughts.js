const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thoughtSchema = new mongoose.Schema(
  {
    thought: String,
    select: Boolean,
  },
  {
    timestamps: true,
  }
);
const ideaSchema = new mongoose.Schema(
  {
    name: String,
    idea: String,
    thoughts: [thoughtSchema],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Thought", thoughtSchema);
