const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel =require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let check1 = req.body.authorId
    let check2 = req.body.publisherId


    if (!check1) {
        return res.send({msg: "authorId detail is required"})
     }else if (!check2) {
        return res.send({msg: "publisherId detail is required"}) 
     }

    let autherId = await authorModel.findOne({_id:"62ff71fbd27ecc1a1c3c8a3b"})
    let publisherId = await publisherModel.findOne({_id:"62ff72a1d27ecc1a1c3c8a3d"})
     let id = autherId._id
     let id2 = publisherId._id 

         if(check1 != id)
            return res.send({msg:"the author is not present."})  
         else if (check2 != id2) 
            return res.send({msg:"the publisher is not present."})
          


    let bookCreated = await bookModel.create(book)
     res.send({data: bookCreated})
}

const getBooks = async function (req, res) {
    let specificBook = await bookModel.find().populate("authorId").populate("publisherId")
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooks = getBooks
