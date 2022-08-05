const printDate = function(){
    console.log("Today date is : 5")
}

const printMonth = function(){
    console.log("Current month is : August")
}

const getBatchInfo = function(){
    console.log("Plutonium, W3D5, the topic for today is Nodejs module system")
}

module.exports.Date = printDate
module.exports.Month = printMonth
module.exports.BatchInfo = getBatchInfo