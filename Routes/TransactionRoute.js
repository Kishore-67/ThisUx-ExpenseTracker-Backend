// const express = require('express');
// const router = express.Router();
// const transactionController = require('../Controller/TransactionController');

// router.get('/',transactionController.getAllTransactions);
// router.post('/',transactionController.addTransaction);
// router.put('/:id', transactionController.updateTransaction);
// router.delete('/:id', transactionController.deleteTransaction);


// module.exports = router;

const express = require('express');
const router = express.Router();
const transactionController = require('../Controller/TransactionController');
const verifyToken = require('../Middleware/AuthMiddleware'); // ⬅️ Import middleware

// 🔐 Apply JWT protection to all routes
router.use(verifyToken);

// All routes below are protected now
router.get('/', transactionController.getAllTransactions);
router.post('/', transactionController.addTransaction);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
