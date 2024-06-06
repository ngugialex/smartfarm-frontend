const axios = require('axios');

exports.getCurrentWeather = async (req, res) => {
  const { location } = req.query;

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getWeatherForecast = async (req, res) => {
  const { location } = req.query;

  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
