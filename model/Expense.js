const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount :{type:Number,required:true},
    category :{type:String,required:true},
    amount :{type:Number,required:true},
    amount :{type:Number,required:true},

});

module.exports = mongoose.model('transactions',ExpenseSchema);