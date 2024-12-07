import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8" />
            <span className="text-xl font-bold">HIV Connect</span>
          </div>
          <div className="flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `hover:text-gray-200 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) =>
                `hover:text-gray-200 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              Resources
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;