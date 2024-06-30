import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-700 p-4 ">
      <div className="">
        <Link to="/" className="text-white text-2xl font-bold text-center justify-center">SmartFarm</Link>
      </div>
    </nav>
  );
};

export default Navbar;
