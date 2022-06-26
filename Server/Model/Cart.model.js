const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userId: String,
    cartCreated: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);