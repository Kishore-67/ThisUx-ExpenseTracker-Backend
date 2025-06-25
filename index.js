const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
//const MONGO_URI = 'mongodb+srv://kishorep:mongopass@e-t-cluster.aoe8mjn.mongodb.net/transactionsDB?retryWrites=true&w=majority&appName=E-T-Cluster';
const MONGO_URI = process.env.mongodb_uri;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  type:     { type: String, required: true },
  date:     { type: String, required: true },
  amount:   { type: Number, required: true },
  category: { type: String, required: true },
  notes:    { type: String },
});
const Transaction = mongoose.model('Transaction', transactionSchema);

// Signup
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  const newUser = new User({ username, email, password });
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });
});

// Fetch all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const allTransactions = await Transaction.find();
    res.json(allTransactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Add transaction
app.post('/api/transactions', async (req, res) => {
  const { type, date, amount, category, notes } = req.body;

  if (!type || !amount || !category || !date) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  try {
    const newTransaction = new Transaction({ type, date, amount, category, notes });
    await newTransaction.save();
    res.status(201).json({ message: 'Transaction added', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add transaction' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
