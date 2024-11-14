const mongoose = require('mongoose');

const chocolateSchema = new mongoose.Schema({
  chocolate_type: String,
  flavor: String,
  price: Number,
});

module.exports = mongoose.model('Chocolate', chocolateSchema);
