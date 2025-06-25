const express = require('express');
const router = express.Router();
const transactionController = require('../Controller/TransactionController');

router.post('/',transactionController.getAllTransactions);
router.post('/',transactionController.addTransaction);

module.exports = router;
