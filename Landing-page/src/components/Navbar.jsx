import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <div className="flex">
      <div className="flex mt-2">
      <img src={logo} className='w-16 h-16 ml-2 -mt-2' alt='logo'/>
      <Link to="/"><p className='text-[24px] font-bold text-green-700'>SmartFarm</p></Link>
      </div>
      <div className="flex text-[18px] ml-64 gap-8 text-black mt-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="gap-8 flex mt-2 ml-28">
        <button className="gap-8 -mt-6">Login</button>
        <button className="bg-green-700 text-white rounded-full text-center w-20 h-8">SignIn</button>
      </div>
    </div>
  );
}

export default Navbar;
