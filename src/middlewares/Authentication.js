const jwt = require("jsonwebtoken");
//Authentication
const tokenverify = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token)
        return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "jit-860-yad-799-end-211-av-9759-ra-7009-371",)
    if (!decodedToken) return res.send({ status: false, message: "invalid token" });

    req.userId = decodedToken.userId  //Set an attribute in request object 
    next();
};

module.exports.tokenverify = tokenverify

































