const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: String
    },
    price: {
        indian: String,
        european: String
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: [],
    authorName: String,
    totalPages: String,
    stockAvailable: Boolean

}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema)
