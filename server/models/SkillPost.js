const mongoose = require("mongoose");

const skillPostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ["teach", "learn"], 
    required: true
  },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model("SkillPost", skillPostSchema);
