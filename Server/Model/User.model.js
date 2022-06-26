const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    idNumber: Number,
    password: String,
    city: String,
    street: String,
    role: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);