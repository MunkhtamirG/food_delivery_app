const express = require("express");
const router = express.Router();
const foodsController = require("../../modules/foods");

router.post("/", foodsController.createFood);
router.get("/", foodsController.getAllFoods);
router.get("/:id", foodsController.getFoodById);
router.put("/", foodsController.updateFood);
router.delete("/:id", foodsController.deleteFood);

module.exports = router;
