const { Schema, Model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

//create a virtual to get a reactionCount

const Thought = Model("thought", thoughtSchema);

module.exports = Thought;
