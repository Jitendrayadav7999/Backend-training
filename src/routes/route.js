const express = require('express');
const router = express.Router();

const BookController = require("../controllers/BookController")


router.post("/createBookList",  BookController.createBooksList)

router.post("/createAutherList",BookController.createAutherList)

router.get("/getBooklist", BookController.getBookList)

router.get("/UpdateBookPrice", BookController.UpdateBookPrice)

router.get ("/BooksCost",BookController.BooksCost)

module.exports = router; 
