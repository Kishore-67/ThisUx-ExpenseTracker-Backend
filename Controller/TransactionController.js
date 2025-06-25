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
exports.updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update transaction' });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};
