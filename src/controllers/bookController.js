const express = require("express")
const bookModel = require("../models/bookModel")

const createBook = async function(req, res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg:savedData})
}

const BookList = async function(req,res){
    let allBooks  = await bookModel.find().select({authorName:1,bookName:1,_id:0})
    res.send({msg: allBooks})
}

const getBooksInYear = async function(req,res){
    let year = req.query.year
   let bookYear = await bookModel.find({year:year})
   res.send({msg:bookYear})
}

const getParticularBooks = async function(req,res){
  let bookname = req.body.name
  let year = req.body.year
  let ParticularBooks = await bookModel.find({
    $or:[{bookName: bookname},{year:year}]
  } )
  res.send({msg:ParticularBooks})
}

const getXINRBooks = async function(req,res){
let XINRBooks = await bookModel.find({"price.indian": { $in: ["100INR", "200INR", "500INR"] } ,})
res.send({msg:XINRBooks})
}



const get = async function(req,res){
    let randambooks = await bookModel.find({ $or:[{stockAvailable: true},{totalPages:{$gt:500}}]})
res.send({msg:randambooks})
} 

module.exports.createBook = createBook
module.exports.BookList = BookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.get = get
