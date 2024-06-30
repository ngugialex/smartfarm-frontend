import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-500 text-white">
      <ul className="p-4">
        <li className="mb-4"><Link to="/">Dashboard</Link></li>
        <li className="mb-4"><Link to="/crop-recommendations">Crop Recommendations</Link></li>
        <li className="mb-4"><Link to="/profile">Profile</Link></li>
        <li className="mb-4"><Link to="/settings">Market Trends</Link></li>
        <li className="mb-4"><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
