const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    name: String,
    idea: String,
    thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thought" }],
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Idea", ideaSchema);

