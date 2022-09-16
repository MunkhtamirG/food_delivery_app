const express = require("express");
const router = express.Router();
const foodsRoute = require("./foods.routes");
const usersRoute = require("./users.routes");
const rolesRoute = require("./roles.routes");
const categoryRoute = require("../v1/category.routes");
const paymentRoute = require("../v1/payment.routes");

router.use("/foods", foodsRoute);
router.use("/users", usersRoute);
router.use("/roles", rolesRoute);
router.use("/payment", paymentRoute);
router.use("/category", categoryRoute);

module.exports = router;
