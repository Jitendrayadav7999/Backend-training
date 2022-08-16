const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")

router.post("/createBook", bookController.createBook )

router.get("/BookList", bookController.BookList)

router.post("/getBooksInYear", bookController.getBooksInYear)

router.post("/getParticularBooks", bookController.getParticularBooks)

router.post("/getXINRBooks",  bookController.getXINRBooks)



router.get("/get", bookController.get)
module.exports = router; 
