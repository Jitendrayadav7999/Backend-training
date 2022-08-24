const express = require('express');
const router = express.Router();
const test_1 = require("../controllers/test-1Controller")
const test_2 = require("../controllers/test-2Controller")
const test_3 = require("../controllers/test-3Controller")
const test_4 = require("../controllers/test-4Controller")

// ===============Assignment Middleware============

router.get("/test-1",test_1.test_1)
router.get("/test-2",test_2.test_2)
router.get("/test-3",test_3.test_3)
router.get("/test-4",test_4.test_4)

// ========================================================
module.exports = router;