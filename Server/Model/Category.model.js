const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    categoryName: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);