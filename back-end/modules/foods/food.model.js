const Schema = require("mongoose");
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  food_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Foods = mongoose.model("Foods", foodSchema);

module.exports = Foods;
