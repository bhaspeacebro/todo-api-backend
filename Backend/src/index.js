require('dotenv').config(); // Step 2: Load .env FIRST!

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Parse incoming JSON

// 🔍 Debug: Show loaded MongoDB URI
console.log("MONGO_URI is:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Route setup
const taskRoutes = require('./routes/tasks'); // Make sure file name matches!
app.use('/api/tasks', taskRoutes);

// Sample root route
app.get('/', (req, res) => {
  res.send('Backend server is running! 🎉');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
