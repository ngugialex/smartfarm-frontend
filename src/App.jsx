// src/App.jsx
import React from 'react';
import CropsList from './components/CropsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SmartFarm</h1>
      </header>
      <main>
        <CropsList />
      </main>
    </div>
  );
}

export default App;