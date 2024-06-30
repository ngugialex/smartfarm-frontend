import React from 'react';

const Recommendations = () => {
  const recommendations = [
    { id: 1, name: 'Corn', date: '2024-06-01' },
    { id: 2, name: 'Wheat', date: '2024-06-10' },
    { id: 3, name: 'Soybeans', date: '2024-06-15' },
    { id: 4, name: 'Rice', date: '2024-06-20' },
    { id: 5, name: 'Barley', date: '2024-06-25' },
    { id: 6, name: 'Oats', date: '2024-07-01' },
    { id: 7, name: 'Potatoes', date: '2024-07-05' },
    { id: 8, name: 'Tomatoes', date: '2024-07-10' },
    { id: 9, name: 'Carrots', date: '2024-07-15' },
    { id: 10, name: 'Lettuce', date: '2024-07-20' },
    { id: 11, name: 'Cabbage', date: '2024-07-25' },
    { id: 12, name: 'Broccoli', date: '2024-08-01' },
    { id: 13, name: 'Spinach', date: '2024-08-05' },
    { id: 14, name: 'Pumpkins', date: '2024-08-10' },
    { id: 15, name: 'Watermelon', date: '2024-08-15' },
  ];

  return (
    <div className="ml-72">
      <h1 className="text-2xl font-bold mb-4">Crop Recommendations</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for past recommendations"
          className="border p-2 w-full mb-2"
        />
        
        {recommendations.length ? (
          <ul className="ml-5">
            {recommendations.map((crop) => (
              <li key={crop.id}>
                {crop.name} (Recommended on: {crop.date})
              </li>
            ))}
            <li><p>dwds</p></li>
          </ul>
        ) : (
          <p>No recommendations found.</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
