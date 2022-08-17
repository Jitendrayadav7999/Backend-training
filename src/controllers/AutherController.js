const express = require("express")
const AutherModel = require("../Models/AutherModel")

const createAutherList = async function(req,res){
    let Data = req.body
    let saveData = await AutherModel.create(Data)
    res.send({msg:saveData})
}

module.exports.createAutherList = createAutherList





