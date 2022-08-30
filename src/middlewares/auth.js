const jwt = require("jsonwebtoken");
const tokenverify = async function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        if (token) {
            let decodedToken = jwt.verify(token, "jit-860-yad-799-end-211-av-9759-ra-7009-371")
            let tokenUserId = decodedToken.userId  
            let userId = req.params.userId;
            if (tokenUserId == userId) {
                req.userId = userId     //Set an attribute in request object 
                next();
            } else {
                return res.status(403).send({ status: false, msg: "User logged is not allowed to modify the requested users data" })
            }
        } else {
            return res.status(400).send({ status: false, msg: "token must be present" });
        }
    } catch (error) {
        res.status(500).send({ status: false, error:error.message });
    }

};

module.exports.tokenverify = tokenverify

































