const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Signup
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch {
    res.status(400).json({ error: 'User already exists or invalid data' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const valid = user && await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET
, { expiresIn: '1h' });
    res.json({ token });
  } catch {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
