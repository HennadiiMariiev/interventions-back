const { Schema, model } = require("mongoose");

const interventionSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      default: 1,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Intervention = model("intervention", interventionSchema);

module.exports = { Intervention };
