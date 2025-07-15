
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to MongoDB');
});

app.listen(5000, () => console.log('Server running on port 5000'));
