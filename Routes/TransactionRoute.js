const express = require('express');
const router = express.Router();
const transactionController = require('../Controller/TransactionController');

router.get('/',transactionController.getAllTransactions);
router.post('/',transactionController.addTransaction);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);


module.exports = router;
