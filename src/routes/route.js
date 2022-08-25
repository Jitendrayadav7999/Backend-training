const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/orderController")
const ProductController = require("../controllers/productController")
const UserController = require("../controllers/userController")
const middleware = require("../middlewares/commonMiddlewares")

router.post("/CreateUser",middleware.mid1,UserController.createUser)

router.post("/CreateProduct",ProductController.createProduct)

router.post("/CreateOrder", middleware.mid1, OrderController.createOrder)

module.exports = router;