const axios = require('axios');
const getCropRecommendations = require('./reccomendation');

exports.getCurrentWeather = async (req, res) => {
  const { CityName } = req.query;  

  if (!CityName) {
    return res.status(400).send('CityName is required');
  }

  const options = {
    method: 'GET',
    url: `https://open-weather13.p.rapidapi.com/city/${CityName}/EN`,
    headers: {
      'x-rapidapi-key': 'a3a3b938f9mshb267fb03af5b126p14988ajsna0be9d8d873i9',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    },
    timeout: 10000  // 5 seconds timeout
  };

  try {
    const response = await axios.request(options);
    console.log("Fetching weather");
    console.log(response.data);
    const cropRecommendations = getCropRecommendations(response.data);
    res.json({ weather: response.data, cropRecommendations });
  } catch (error) {
    console.error(error);
    if (error.code === 'ETIMEDOUT' || error.code === 'ENETUNREACH') {
      res.status(504).send('Network error or request timed out');
    } else {
      res.status(500).send('Server error');
    }
  }
};

exports.getWeatherForecast = async (req, res) => {
  const { CityName } = req.query;

  if (!CityName) {
    return res.status(400).send('CityName is required');
  }

  const options = {
    method: 'GET',
    url: `https://open-weather13.p.rapidapi.com/city/${CityName}/EN`,
    headers: {
      'x-rapidapi-key': 'a3a3b938f9mshb267fb03af5b126p14988ajsna0be9d8d8739',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    },
    timeout: 10000  
  };

  try {
    const response = await axios.request(options);
    console.log("fetching weather forecast");
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    if (error.code === 'ETIMEDOUT' || error.code === 'ENETUNREACH') {
      res.status(504).send('Network error or request timed out');
    } else {
      res.status(500).send('Server error');
    }
  }
};
