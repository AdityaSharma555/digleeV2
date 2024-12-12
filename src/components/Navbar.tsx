import React from 'react';
import { Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Gift className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-serif font-bold text-gray-800">GiftLuxe</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-rose-600 transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}