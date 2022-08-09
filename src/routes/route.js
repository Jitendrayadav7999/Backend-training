const express = require('express');


const router = express.Router();

 router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let sum = 0;
    for (var i in arr) {
        sum = sum + arr[i];
    }
 
    let lastDigit= arr.pop()
    let tolalSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= tolalSum - sum
 
    res.send(  { data: missingNumber  }  );
  });
 
module.exports = router;
// adding this comment for no reason