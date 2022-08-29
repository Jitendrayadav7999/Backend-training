const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const checkUser = async function(req,res,next){
//Authorisation
let verfiyuserID = req.userId
let userId = req.params.userId;
if (verfiyuserID !== userId) return res.send({ status: false, msg: "User logged is not allowed to modify the requested users data" })

req.userId = userId   //Set an attribute in request object 


next()
}

module.exports.checkUser = checkUser