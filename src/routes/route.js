const express = require('express');


const router = express.Router();

router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
 
    let sum = 0;
    for (var i in arr) {
        sum = sum + arr[i];
    }
 
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let totalSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= totalSum - sum
   
    res.send(  { data: missingNumber  }  );
  });
 
 
module.exports = router;
// adding this comment for no reason