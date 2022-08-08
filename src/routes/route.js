const express = require('express');
const lod = require('lodash');


const router = express.Router();

router.get('/test-me', function (req, res) {
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let result1 = lod.chunk(months, 3)
    console.log("after division by 3", result1)

    let oddNumber = [1,3,5,7,9,11,13,15,17,19]
    let tail = lod.tail(oddNumber)
    console.log(tail)


    let number = ([3,2,1,4,5,6],[4,5,6,1,2,3],[3,6,5,2,4,1],[1,4,2,5,6,3],[5,2,4,1,6,3])
    let union = lod.union(number)
    console.log(union)


    let movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let fromPairs = lod.fromPairs(movies)
    console.log(fromPairs)




    res.send('My module Assignment')
     
});

module.exports = router;
// adding this comment for no reason