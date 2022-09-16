const { default: mongoose } = require("mongoose");
const Category = require("./category.model");

const createCategory = async (req) => {
  const category = new Category(req.body);
  return category.save();
};

const getAllCategory = async () => {
  return Category.find();
};

const updateCategory = async (req) => {
  const { id } = req.query;
  await Category.findByIdAndUpdate(id, req.body);
  return Category.findById(id);
};
const getByIdCategory = async (req) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) return Category.findById(id);
};

const deleteCategory = async (req) => {
  const { id } = req.params;
  return Category.findByIdAndDelete(id, req.body);
};

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  getByIdCategory,
  deleteCategory,
};
