const { Schema, Model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: "Thought",
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: "Friend",
  },
});

const User = Model("user", userSchema);

module.exports = User;
