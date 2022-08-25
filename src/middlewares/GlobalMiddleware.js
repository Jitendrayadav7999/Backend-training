const moment = require("moment")

const GlobalMiddleware = function (req, res, next) {
    let timestamp = moment().format('YYYY MM DD, h:mm:ss a')
    let ip = req.socket.remoteAddress
    let route = req.url
    console.log (timestamp,ip,route);
    next();
}
module.exports.GlobalMiddleware = GlobalMiddleware
