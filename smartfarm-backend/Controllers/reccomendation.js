const crops = require('./crops.json'); // Assuming the JSON file is in the same directory

function getCropRecommendations(weatherData) {
  const recommendations = crops.filter(crop => {
    const tempInRange = weatherData.main.temp >= crop.temperature.min && weatherData.main.temp <= crop.temperature.max;
    const humidityInRange = weatherData.main.humidity >= crop.humidity.min && weatherData.main.humidity <= crop.humidity.max;
    const rainfallInRange = weatherData.rain && weatherData.rain['1h'] >= crop.rainfall.min && weatherData.rain['1h'] <= crop.rainfall.max;

    return tempInRange && humidityInRange && rainfallInRange;
  });

  return recommendations;
}

module.exports = getCropRecommendations;
