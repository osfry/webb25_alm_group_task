const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
    },
    profileImage: {
      type: String,
      required: false,
      validate: {
        validator: (value) => !value || /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(value),
        message: "Invalid profileImage URL",
      },
    },
    // TODO: Add profileImage field
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
