const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
   let book = req.body
   let check1 = req.body.authorId
   let check2 = req.body.publisherId

   if (!check1)
      return res.send({ msg: "authorId detail is required" })
   else if (!check2)
      return res.send({ msg: "publisherId detail is required" })

   let autherId = await authorModel.findOne({ _id: "62ffd5975af27bb721f965d9" })
   let publisherId = await publisherModel.findOne({ _id: "62ffd3bf5af27bb721f965cf" })
   let id = autherId._id
   let id2 = publisherId._id

   if (check1 != id)
      return res.send({ msg: "the author is not present." })
   else if (check2 != id2)
      return res.send({ msg: "the publisher is not present." })

   let bookCreated = await bookModel.create(book)
   res.send({ data: bookCreated })
}


const getBooks = async function (req, res) {
   let specificBook = await bookModel.find().populate("authorId").populate("publisherId")
   res.send({ data: specificBook })
}


const books = async function (req, res) {
   let findPublisher = await publisherModel.find({$or:[{name:"Penguin"},{name:'HarperCollins'}]}).select({_id:1})
   let updatedBook= await bookModel.find({"publisherId":findPublisher}).updateMany({$set:{ isHardCover:true}})
 
   let findRating = await authorModel.find({rating :{$gt:3.5}}).select({_id:1})
   let updatePrice = await bookModel.find({"authorId":findRating}).updateMany({$inc:{price:10}})

   res.send({msg1:updatedBook,msg2:updatePrice})

}

module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.books = books
