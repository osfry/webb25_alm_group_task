const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema(
  {
    adress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    rent: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Accommodation", accommodationSchema);
