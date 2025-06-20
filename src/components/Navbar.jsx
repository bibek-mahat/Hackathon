import React, { useState } from 'react';
import { Button } from './ui/Button'; // Ensure this is your reusable Button component
import Logo from "../components/svg/Logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={Logo}
          className="h-16 w-24 mr-2 " alt="Logo" />
          
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Items (including search and login) */}
        <div className="mr-5">
        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 font-medium mt-4 md:mt-0 mr-4">
            {/* Navigation Links */}
            <li><a href="#" className="block py-2 px-3 text-black hover:text-blue-700">Governmental Services</a></li>
            <li><a href="#" className="block py-2 px-3 text-black hover:text-blue-700">Complain</a></li>
            <li><a href="#" className="block py-2 px-3 text-black hover:text-blue-700">Health Services</a></li>

            {/* Search Bar */}
            <li className="mt-2 md:mt-0 md:ml-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full md:w-48 p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50"
                />
                <div className="absolute left-3 top-2.5 text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </li>

            {/* Login Button */}
            <li className="mt-2 md:mt-0">
              <Button label="Login" />
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
