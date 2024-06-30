import React, { useState, useEffect } from 'react';

const features = [
  { title: 'Weather Data Integration', description: 'Access real-time weather data including temperature, humidity, wind speed, and precipitation.' },
  { title: 'Agricultural Data Integration', description: 'Get soil condition insights and region-specific crop recommendations.' },
  { title: 'Geographic Information and Mapping', description: 'Set your location for personalized recommendations using our mapping feature.' },
  { title: 'Crop Recommendations', description: 'Receive tailored crop suggestions based on your local weather and soil conditions.' },
  { title: 'Interactive User Interface', description: 'Enjoy a dynamic and interactive user experience with our easy-to-navigate platform.' },
  { title: 'Watchlists and Favorites', description: 'Keep track of your favorite crops and create customized watchlists.' },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedFeatures, setDisplayedFeatures] = useState([
    features[0],
    features[1],
    features[2]
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayedFeatures([
      features[currentIndex],
      features[(currentIndex + 1) % features.length],
      features[(currentIndex + 2) % features.length]
    ]);
  }, [currentIndex]);

  return (
    <div className="mt-12 flex flex-col items-center pb-12 mb-12">
      <p className="font-bold text-[24px] text-green-700 mb-8">Features</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedFeatures.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
            <p className="font-bold">{feature.title}</p>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
