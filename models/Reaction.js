const { Schema, Model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,

    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Reaction = Model("reaction", reactionSchema);

module.exports = Reaction;
