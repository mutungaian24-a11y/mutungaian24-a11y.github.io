const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON data in the request body

// Connect to MongoDB (get your URI from MongoDB Atlas)
if (!process.env.MONGO_URI) {
  console.warn('⚠️  MONGO_URI not set in .env — database connection skipped for local dev.');
} else {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ Connection Error:", err));
}

// Basic Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the Node.js Backend!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
