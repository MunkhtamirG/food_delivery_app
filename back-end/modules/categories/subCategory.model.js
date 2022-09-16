const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
