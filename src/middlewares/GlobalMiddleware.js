const GlobalMiddleware = function (req, res, next) {
    let timestamp = new Date()
    let ip = req.socket.remoteAddress
    let route = req.url
    console.log (timestamp,ip,route);
    next();
}
module.exports.GlobalMiddleware = GlobalMiddleware