const checkUser = async function(req,res,next){
//Authorisation
let verfiyuserID = req.userId
let userId = req.params.userId;
if (verfiyuserID !== userId) return res.send({ status: false, msg: "User logged is not allowed to modify the requested users data" })

next()
}

module.exports.checkUser = checkUser