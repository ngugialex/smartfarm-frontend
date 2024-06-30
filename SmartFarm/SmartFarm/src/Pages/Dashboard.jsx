import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Pie } from 'react-chartjs-2';

const Dashboard = () => {
  const weatherAnalyticsData = {
    labels: ['Rainfall', 'Temperature', 'Wind'],
    datasets: [
      {
        label: 'Weather Analytics',
        data: [30, 50, 20], // Dummy data percentages
        backgroundColor: ['#4CAF50', '#2196F3', '#FF5722'], // Colors for pie segments
      },
    ],
  };

  const recentWeatherData = {
    temperature: 28,
    humidity: 72,
    conditions: 'Sunny',
  };

  const recentUserActivity = [
    { action: 'Updated profile', timestamp: '10:30 AM' },
    { action: 'Viewed crop recommendations', timestamp: '09:45 AM' },
    { action: 'Logged in', timestamp: '08:15 AM' },
  ];

  const cropRecommendations = [
    { crop: 'Corn', recommendation: 'Good', icon: '🌽' },
    { crop: 'Tomato', recommendation: 'Excellent', icon: '🍅' },
    { crop: 'Potato', recommendation: 'Fair', icon: '🥔' },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-72 -mt-[630px]">
        <h1 className="text-2xl font-bold">Welcome to SmartFarm Dashboard</h1>

        {/* Recent Weather Data */}
        <div className="flex gap-16">
        <div className="mt-4 bg-white p-4 rounded shadow-md w-[300px] h-[200px]">
          <h2 className="text-xl mb-2">Recent Weather Data</h2>
          <p className="mb-2">Temperature: {recentWeatherData.temperature}°C</p>
          <p className="mb-2">Humidity: {recentWeatherData.humidity}%</p>
          <p>Conditions: {recentWeatherData.conditions}</p>
        </div>

        <div className="mt-4 bg-white p-4 rounded shadow-md w-[300px] h-[200px]">
          <h2 className="text-xl mb-2">Predicted Weather Data</h2>
          <p className="mb-2">Temperature: {recentWeatherData.temperature}°C</p>
          <p className="mb-2">Humidity: {recentWeatherData.humidity}%</p>
          <p>Conditions: {recentWeatherData.conditions}</p>
        </div>

        <div className="mt-4 bg-white p-4 rounded shadow-md w-[300px] h-[200px]">
          <h2 className="text-xl mr-8 mb-2">Analytics</h2>
          {/* <Pie data={weatherAnalyticsData} /> */}
        </div>
        </div>


       {/* Recent User Activity */}
        <div className="mt-8">
          <h2 className="text-xl mb-2">Recent User Activity</h2>
          <div className="flex grid-cols-3 gap-24">
            {recentUserActivity.map((activity, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <p className="font-semibold">{activity.action}</p>
                <p className="text-gray-500">{activity.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crop Recommendations */}
        <div className="mt-8">
          <h2 className="text-xl mb-2">Crop Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cropRecommendations.map((crop, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md flex items-center">
                <span className="text-4xl mr-2">{crop.icon}</span>
                <div>
                  <p className="font-semibold">{crop.crop}</p>
                  <p>{crop.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </>
  );
};

export default Dashboard;
