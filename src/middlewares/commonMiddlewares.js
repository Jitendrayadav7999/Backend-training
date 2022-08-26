
const mid1= function ( req, res, next) {
   let freeappuser = req.headers
    if (!freeappuser.isfreeappuser) {
        return res.send({msg:"the request is missing a mandatory header"})
    }
    next()
}

module.exports.mid1= mid1

