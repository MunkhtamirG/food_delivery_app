const express = require("express");
const router = express.Router();
const categoriesController = require("../../modules/categories");

router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getById);
router.post("/", categoriesController.create);
router.put("/", categoriesController.update);
router.delete("/:id", categoriesController.deleteCat);

module.exports = router;
