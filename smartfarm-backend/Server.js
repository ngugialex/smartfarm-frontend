const express = require('express');
const { connectDB } = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const weatherRoutes = require('./Routes/weatherRoutes');
const cropRoutes = require('./Routes/cropRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/crops', cropRoutes);

// Start server after DB connection
// connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
// }).catch((err) => {
//   console.error('Error connecting to database:', err);
// });
