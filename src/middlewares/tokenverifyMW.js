const jwt = require("jsonwebtoken");

const tokenverify = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token)
        return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "jit-860-yad-799-end-211-av-9759-ra-7009-371",
     function(err, decoded) {         //call back function
        if (err)
        return res.send({ status: false, message:"invalid token"}); 
        next();
       });
       
    };



    // if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

    // next()
// }
module.exports.tokenverify = tokenverify