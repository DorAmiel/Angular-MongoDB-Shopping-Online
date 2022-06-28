const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cartProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartProduct' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);