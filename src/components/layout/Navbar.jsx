import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-950' : 'bg-gray-950 bg-opacity-5'} text-white`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            <img src="/ip.png" alt="logo" className='w-14 object-contain'/>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/films" className="hover:text-gray-300 transition duration-300">Films</Link>
          {/* Search Bar on larger screens */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-1 focus:outline-none"
            />
            <FaSearch className="absolute left-3 text-gray-400" />
          </div>
          {/* Notifications Icon */}
          <button className="relative flex items-center">
            <FaBell className="text-white text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          {/* Avatar */}
          <button className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
              <FaUser />
            </div>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-950 absolute top-16 left-0 w-full shadow-lg"
        >
          <Link
            to="/"
            className="block px-4 py-3 text-white hover:bg-blue-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/films"
            className="block px-4 py-3 text-white hover:bg-blue-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Films
          </Link>
          
          <div className="px-4 py-3">
            {/* Search Bar on mobile */}
            <div className="relative flex items-center mb-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-1 focus:outline-none w-full"
              />
              <FaSearch className="absolute left-3 text-gray-400" />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
