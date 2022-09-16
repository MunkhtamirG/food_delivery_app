const express = require("express");
const router = express.Router();
const usersController = require("../../modules/users");

router.get("/", usersController.getAllUser);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.put("/", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
router.post("/login", usersController.loginUser);

module.exports = router;
