const bookModel = require("../models/bookModel")

const createBookData = async function(req, res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg:savedData})
}

const getBookData = async function(req,res){
    let allBooks  = await bookModel.find()
    res.send({msg: allBooks})
}
module.exports.createBookData = createBookData
module.exports.getBookData = getBookData