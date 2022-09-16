const categoryServices = require("./category.services");

const create = async (req, res) => {
  try {
    const category = await categoryServices.createCategory(req);
    res.json({
      data: category,
    });
  } catch (error) {
    res.json({
      data: error,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryServices.getAllCategory();
    res.json({ data: categories });
  } catch (error) {
    res.json({ data: error, success: false });
  }
};

const update = async (req, res) => {
  try {
    const categories = await categoryServices.updateCategory(req);
    res.json({
      data: categories,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const categories = await categoryServices.getByIdCategory(req);
    res.json({ data: categories });
  } catch (error) {
    res.json({ success: false, data: error });
  }
};
const deleteCat = async (req, res) => {
  try {
    const category = await categoryServices.deleteCategory(req);
    res.json({ data: category });
  } catch (error) {
    res.json({ data: error });
  }
};

module.exports = {
  create,
  getAllCategories,
  update,
  getById,
  deleteCat,
};
