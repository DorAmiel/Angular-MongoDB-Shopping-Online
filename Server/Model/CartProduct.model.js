const mongoose = require('mongoose');

const CartProductSchema = mongoose.Schema({
    productId: String,
    amount: Number,
    totalPrice: Number,
    cartId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('CartProduct', CartProductSchema);