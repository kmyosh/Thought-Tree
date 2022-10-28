const mongoose = require("mongoose");

const thinkerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thinker", thinkerSchema);
