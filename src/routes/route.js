const express = require('express');
const router = express.Router();
let person = [
    {name : "PK",
     age : 10,
     votingStatus : false
    },
    {
     name : "Sk",
     age : 20,
     votingStatus : false 
    },
    {
     name : "AA",
     age : 70,
     votingStatus : false
    },
    {
     name : "Sc",
     age : 5,
     votingStatus : false
    },
    {
    name: "No",
    age: 40,
    votingStatus: false
    }

 ]
router.post("/check-Voting-Age", function(req,res){
let age = req.query.age
for (let i = 0; i < person.length; i++) {
    const personAge = person[i];
    if (personAge.age >= age) {
        personAge.votingStatus = true
     }
}
 let validVoter =person.filter(ele => ele.age >= age)
res.send(validVoter)
})


module.exports = router