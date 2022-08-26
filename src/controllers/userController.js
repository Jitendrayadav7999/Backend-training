const UserModel= require("../models/userModel")
const createUser= async function (req, res) {
    let data = req.body 
    let data1 = req.headers.isfreeappuser
    let createuser = await UserModel.create(data)
    let update = await UserModel.updateOne({name:createuser.name},{$set:{isFreeAppUser:data1}})

    res.send({msg:createuser})
}

module.exports.createUser= createUser
