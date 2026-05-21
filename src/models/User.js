const mongoose = require("mongoose");
const Accommodation = require('./accommodation')
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
    },
    // TODO: Add profileImage field
    
  },
  { timestamps: true },
);

userSchema.pre("findOneAndDelete", async function (next) {
  await Accommodation.deleteMany({ userId: this.getQuery()["_id"] });
  next();
});

module.exports = mongoose.model("User", userSchema);
