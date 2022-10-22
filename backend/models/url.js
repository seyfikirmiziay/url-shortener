const mongoose = require("mongoose");

const urlModel = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("urls", urlModel);
