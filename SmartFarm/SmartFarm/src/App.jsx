import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import CropRecommendations from './Pages/CropRecommendations';
import Profile from './components/Profile';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
    <ToastContainer />
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/crop-recommendations" element={<CropRecommendations />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
     
    </Router>
    //  < ToastContainer >
  );
}

export default App;
