const express = require('express');
const router = express.Router();
const MemeController = require("../controllers/memeController")

router.get("/getMemes",MemeController.getMemes)
router.post("/createMemes",MemeController.createMemes)

module.exports = router;