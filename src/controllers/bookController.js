const express = require("express")
const AutherModel = require("../Models/AutherModel")
const BookModel = require("../models/BookModel")

const createBooksList = async function(req,res){
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send ({msg:saveData})
}

const createAutherList = async function(req,res){
    let Data1 = req.body
    let saveData1 = await AutherModel.create(Data1)
    res.send({msg:saveData1})
}

const getBookList = async function(req,res){
    let findAuther = await AutherModel.findOne({author_name :"Chetan Bhagat"}).select({author_id: 1, _id:0})
    let bookList1 = await BookModel.find( findAuther)
    res.send({msg: bookList1})
}

const UpdateBookPrice = async function(req,res){
let updatePrice = await BookModel.findOneAndUpdate(
    {name:"Two states"},
    {$set:{price:100}},
    {new:true,upsert:true}
)
let findId = await BookModel.findOne(updatePrice).select( {author_id:1, _id:0})
let findAuther = await AutherModel.find(findId)
res.send({msg1:findAuther,msg2:updatePrice})
}


const BooksCost = async function(req,res){
    let costbeetween = await BookModel.find({price :{$gte:50,  $lte:100}}).select({author_id:1, _id:0})
    let findId = costbeetween.map(x=>x.author_id)
    let findAuthor = await AutherModel.find({author_id:{$in:findId}}).select({author_name:1, _id:0)
//     console.log(findId)
    res.send({msg:findAuthor})
}

module.exports.createAutherList = createAutherList
module.exports.createBooksList = createBooksList
module.exports.getBookList = getBookList
module.exports.UpdateBookPrice = UpdateBookPrice
module.exports.BooksCost = BooksCost
