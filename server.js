const app = require('./app');
const connectDB = require('./Config/db');
require('dotenv').config();

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});