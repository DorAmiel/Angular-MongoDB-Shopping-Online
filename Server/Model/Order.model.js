const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    userId: String,
    cartId: String,
    totalPrice: Number,
    city: String,
    street: String,
    shippingDate: Date,
    orderCreated: Date,
    creditCard: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);