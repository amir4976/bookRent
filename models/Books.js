const mongoose = require("mongoose");
const schema = mongoose.Schema;



const Book = schema({
    title: String,
    author: String,
    price: Number,
    quantity: Number,
    category: String,
    description: String,
    // image: String,
    status: String,
    createdAt: { type: Date, default: Date.now() }
});



module.exports = mongoose.model("Book", Book);