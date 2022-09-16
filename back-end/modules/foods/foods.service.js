const Food = require("./food.model");
const mongoose = require("mongoose");

const createFood = async (req) => {
  const food = new Food(req.body);
  return food.save();
};

const getAllFoods = (req) => {
  return Food.find();
};

const updateFood = async (req) => {
  const { id } = req.query;
  await Food.findByIdAndUpdate(id, req.body);
  const food = await Food.findById(id);
  return food;
};

const deleteFood = async (req) => {
  const { id } = req.params;
  const food = await Food.findByIdAndDelete(id);
  return food;
};

const getFoodById = async (req) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const food = await Food.findById(id);
    return food;
  }
};

module.exports = {
  createFood,
  getAllFoods,
  updateFood,
  deleteFood,
  getFoodById,
};
