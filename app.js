const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/AuthRoute');
const transactionRoutes = require('./Routes/TransactionRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

module.exports = app;
