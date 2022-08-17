const express = require("express")
const Book2Model = require("../models/BookModel")



const createBookList = async function(req,res){
    let data = req.body
    let saveData = await Book2Model.create(data)
    res.send ({msg:saveData})
}
module.exports.createBookList = createBookList