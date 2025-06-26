// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

//   if (!token) return res.status(401).json({ error: 'Access denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // add user ID to request
//     next();
//   } catch (err) {
//     res.status(403).json({ error: 'Invalid token' });
//   }
// };

// module.exports = verifyToken;

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token verified. User ID:", decoded.id); // Debug line
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verification failed", err.message);
    res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;
