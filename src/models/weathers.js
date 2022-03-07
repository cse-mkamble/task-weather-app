const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    celsius: {
      type: Number,
      default: 0,
    },
    fahrenheit: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const weatherModel = mongoose.model("weathers", weatherSchema);
module.exports = weatherModel;
