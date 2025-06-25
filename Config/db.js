const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kishorep:mongopass@e-t-cluster.aoe8mjn.mongodb.net/transactionsDB?retryWrites=true&w=majority&appName=E-T-Cluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectDB;
