const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  type:     { type: String, required: true },
  date:     { type: String, required: true },
  amount:   { type: Number, required: true },
  category: { type: String, required: true },
  notes:    { type: String }
});

module.exports = mongoose.model('transactions',ExpenseSchema);