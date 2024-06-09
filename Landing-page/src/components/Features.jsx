import React, { useState, useEffect } from 'react';

const Features = () => {
  const features = [
    { title: 'Weather Data Integration', description: 'Access real-time weather data including temperature, humidity, wind speed, and precipitation.' },
    { title: 'Agricultural Data Integration', description: 'Get soil condition insights and region-specific crop recommendations.' },
    { title: 'Geographic Information and Mapping', description: 'Set your location for personalized recommendations using our mapping feature.' },
    { title: 'Crop Recommendations', description: 'Receive tailored crop suggestions based on your local weather and soil conditions.' },
    { title: 'Interactive User Interface', description: 'Enjoy a dynamic and interactive user experience with our easy-to-navigate platform.' },
    { title: 'Watchlists and Favorites', description: 'Keep track of your favorite crops and create customized watchlists.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedFeatures, setDisplayedFeatures] = useState([
    features[currentIndex],
    features[(currentIndex + 1) % features.length],
    features[(currentIndex + 2) % features.length]
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [features.length]);

  // Update displayedFeatures whenever currentIndex changes
  useEffect(() => {
    setDisplayedFeatures([
      features[currentIndex],
      features[(currentIndex + 1) % features.length],
      features[(currentIndex + 2) % features.length]
    ]);
  }, [currentIndex, features]);

  return (
    <div className="mt-12 flex justify-center pb-12 mb-48">
      <p className='font-bold text-[24px] text-green-700'>Features</p>
      <div className="mt-16">
        {displayedFeatures.map((feature, index) => (
          <div
            key={index}
            className="absolute transition-transform duration-1000 ease-in-out transform"
            style={{ left: `${index * 33.33}%` }} 
          >
            <div className="flex gap-16 ml-6 ">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
                <p className="font-bold">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
