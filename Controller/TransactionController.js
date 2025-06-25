const Transaction = require('../model/Expense');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

exports.addTransaction = async (req, res) => {
  const { type, date, amount, category, notes } = req.body;

  if (!type || !amount || !category || !date) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  try {
    const transaction = new Transaction({ type, date, amount, category, notes });
    await transaction.save();
    res.status(201).json({ message: 'Transaction added', transaction });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add transaction' });
  }
};
