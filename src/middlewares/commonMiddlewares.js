
const mid1= function ( req, res, next) {
   let freeappuser = req.headers.isfreeappuser
    if (!freeappuser) {
        return res.send({msg:"the request is missing a mandatory header"})
    }else{
        // convert to boolean header value
    }
    next()
}

module.exports.mid1= mid1

