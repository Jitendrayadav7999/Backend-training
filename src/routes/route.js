const express = require('express');
const abc = require('../introduction/intro')
const module1 = require("../logger/logger")
const module2 = require("../util/helper")
const module3 = require("../validato/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    module1.welcome()
    module2.Date()
    module2.Month()
    module2.BatchInfo()
    console.log("After trim :",module3.trim)
    console.log("Change to Lower Case :",module3.lowerCase)
    console.log("change to Uper Case",module3.UperCase)

    res.send('My Assignment')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason