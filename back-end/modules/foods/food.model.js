const Schema = require("mongoose");
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  food_name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Foods = mongoose.model("Foods", foodSchema);

module.exports = Foods;
