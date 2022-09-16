const foodsService = require("./foods.service");

const createFood = async (req, res) => {
  try {
    const food = await foodsService.createFood(req);
    res.json({
      data: food,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await foodsService.deleteFood(req);
    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const updateFood = async (req, res) => {
  const food = await foodsService.updateFood(req);
  res.json({
    data: food,
  });
};

const getAllFoods = async (req, res) => {
  const foods = await foodsService.getAllFoods(req);
  res.json({
    data: foods,
  });
};

const getFoodById = async (req, res) => {
  try {
    const food = await foodsService.getFoodById(req);
    res.json({ success: true, data: food });
  } catch (err) {
    res.json({ success: false, data: err });
  }
};

module.exports = {
  createFood,
  deleteFood,
  updateFood,
  getAllFoods,
  getFoodById,
};
