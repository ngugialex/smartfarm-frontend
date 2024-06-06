const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/config');
const authRoutes = require('./Routes/authRoutes');
const weatherRoutes = require('./Routes/weatherRoutes');
const cropRoutes = require('./Routes/cropRoutes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/crops', cropRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)})
