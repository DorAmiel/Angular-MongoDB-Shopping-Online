const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    productName: String,
    categoryName: String,
    price: Number,
    image: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);