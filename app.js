const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/AuthRoute');
const transactionRoutes = require('./Routes/TransactionRoute');

const app = express();

app.use(cors());
app.use(express.json());

// Mount all auth routes under /api/auth
app.use('/api/auth', authRoutes);

// Mount transactions normally
app.use('/api/transactions', transactionRoutes);

module.exports = app;
