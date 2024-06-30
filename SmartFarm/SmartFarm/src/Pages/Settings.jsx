import React from 'react';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Settings = () => {
  const marketTrends = [
    { crop: 'Corn', trend: 'Rising', price: '$3.50/bushel' },
    { crop: 'Wheat', trend: 'Stable', price: '$4.20/bushel' },
    { crop: 'Soybeans', trend: 'Falling', price: '$9.80/bushel' },
  ];

  const topPerformingCrops = [
    { crop: 'Potatoes', performance: '20% increase' },
    { crop: 'Tomatoes', performance: '15% increase' },
    { crop: 'Carrots', performance: '10% increase' },
  ];

  const priceFluctuations = [
    { crop: 'Rice', fluctuation: '+5%', price: '$1.20/kg' },
    { crop: 'Barley', fluctuation: '-3%', price: '$2.00/kg' },
    { crop: 'Oats', fluctuation: '+2%', price: '$1.50/kg' },
  ];

  const recentNews = [
    { headline: 'New agricultural policy boosts crop production', date: '2024-06-10' },
    { headline: 'Weather patterns affect wheat prices', date: '2024-06-09' },
    { headline: 'Innovations in sustainable farming', date: '2024-06-08' },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      
      <div className="ml-72 -mt-[630px] p-4">
        <h1 className="text-2xl font-bold mb-4">Supply Market Insights</h1>
        
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">Market Trends</h2>
          <ul>
            {marketTrends.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.crop}</span>: {item.trend} - <span className="text-green-500">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">Top Performing Crops</h2>
          <ul>
            {topPerformingCrops.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.crop}</span>: <span className="text-green-500">{item.performance}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">Price Fluctuations</h2>
          <ul>
            {priceFluctuations.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.crop}</span>: {item.fluctuation} - <span className="text-green-500">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">Recent News</h2>
          <ul>
            {recentNews.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.headline}</span> - <span className="text-gray-500">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Settings;
