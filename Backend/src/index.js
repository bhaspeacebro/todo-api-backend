// ✅ Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const taskRoutes = require('./routes/tasks');

const app = express();

// ✅ Define allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://todo-frontend-five-beige.vercel.app"
];

// ✅ Handle CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ Blocked CORS request from: ${origin}`);
      callback(new Error("CORS not allowed from this origin"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Debug: Show connection string (for dev only)
console.log("MONGO_URI is:", process.env.MONGO_URI);

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Enable preflight response for CORS
app.options('*', cors());

// ✅ Public test route
app.get('/', (req, res) => {
  res.send('✅ TODO API is running. Welcome aboard, Bhaskar!');
});

// ✅ Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', authMiddleware, taskRoutes);

// ✅ Catch-all for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
