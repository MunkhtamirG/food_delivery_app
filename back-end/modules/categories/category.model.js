const mongoose = require("mongoose");
const SubCategory = require("./subCategory.model");

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
    unique: true,
  },
  category_status: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
