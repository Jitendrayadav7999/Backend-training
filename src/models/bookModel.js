const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName : String,
    authorName : String,
    category : {
        type : String,
        require : true
    },
    year : {
        type: Number,
        require : true
    } 
}, {timestamps:true});

module.exports = mongoose.model("Book",bookSchema) //books