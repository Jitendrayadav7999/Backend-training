const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
   let book = req.body

   if (!book.authorId)
      return res.send({ msg: "authorId detail is required" })

   let auther = await authorModel.findById(book.authorId)

   if (!auther)
      return res.send({ msg: "the author is not present." })

   if (!book.publisherId)
      return res.send({ msg: "publisherId detail is required" })

   let publisher = await publisherModel.findById(book.publisherId)

   if (!publisher)
      return res.send({ msg: "the publisher is not present." })

   let bookCreated = await bookModel.create(book)
   res.send({ data: bookCreated })
}


const getBooks = async function (req, res) {
   let specificBook = await bookModel.find().populate("authorId").populate("publisherId")
   res.send({ data: specificBook })
}


const books = async function (req, res) {
   let findPublisher = await publisherModel.find({ $or: [{ name: "Penguin" }, { name: 'HarperCollins' }] }).select({ _id: 1 })
   let updatedBook1 = await bookModel.updateMany(
      { publisherId:{$in: findPublisher }},
      { $set: { isHardCover: true } },
   )

   let findRating = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
   let updatePrice1 = await bookModel.updateMany(
      { authorId:{$in: findRating }},
      { $inc: { price: 10 } }
   )

   res.send({ msg1: updatedBook1, msg2: updatePrice1 })

}

module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.books = books
