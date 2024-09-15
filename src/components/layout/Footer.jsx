import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              MovieApp is your go-to source for movie and TV show recommendations. Stay updated with the latest trends, popular titles, and more!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul>
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/films" className="hover:text-blue-400">Films</Link></li>
              <li><Link to="/actors" className="hover:text-blue-400">Actors</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: <a href="info@movieapp.com" className="hover:text-blue-400">info@movieapp.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+255779764577" className="hover:text-blue-400">+255-779-74577</a></p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.68 3.64 8.53 8.33 8.93v-6.31H8.66V12h1.67v-1.32c0-1.64.98-2.55 2.43-2.55.69 0 1.39.12 1.39.12v1.55h-.78c-.77 0-.95.48-.95.95v1.08h1.79l-.28 1.87h-1.51V21.9C17.09 21.49 21 17.69 21 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.97c.014.21.014.42.014.63 0 6.48-4.95 13.95-13.95 13.95-2.77 0-5.33-.8-7.48-2.16.39.04.78.06 1.17.06 2.3 0 4.42-.79 6.08-2.1-2.14-.04-3.95-1.45-4.58-3.39.3.05.62.08.94.08.46 0 .91-.06 1.34-.17-2.24-.45-3.94-2.42-3.94-4.79v-.06c.66.37 1.42.59 2.23.62-1.32-.88-2.2-2.38-2.2-4.07 0-.9.24-1.74.66-2.46 2.42 2.97 6.06 4.93 10.17 5.14-.09-.36-.14-.74-.14-1.13 0-2.73 2.2-4.95 4.95-4.95 1.42 0 2.71.56 3.7 1.48 1.15-.23 2.24-.65 3.21-1.23-.38 1.18-1.19 2.15-2.24 2.81 1.03-.12 2.02-.4 2.93-.8-.68 1.03-1.53 1.92-2.53 2.64z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.33 0 3.73.01 5.05.07 1.4.06 2.58.3 3.48.78.88.48 1.58 1.18 2.05 2.05.48.9.72 2.08.78 3.48.06 1.32.07 1.72.07 5.05s-.01 3.73-.07 5.05c-.06 1.4-.3 2.58-.78 3.48-.48.88-1.18 1.58-2.05 2.05-.9.48-2.08.72-3.48.78-1.32.06-1.72.07-5.05.07s-3.73-.01-5.05-.07c-1.4-.06-2.58-.3-3.48-.78-.88-.48-1.58-1.18-2.05-2.05-.48-.9-.72-2.08-.78-3.48-.06-1.32-.07-1.72-.07-5.05s.01-3.73.07-5.05c.06-1.4.3-2.58.78-3.48.48-.88 1.18-1.58 2.05-2.05.9-.48 2.08-.72 3.48-.78 1.32-.06 1.72-.07 5.05-.07zm0-2.2c-3.37 0-3.77.01-5.1.07-1.5.06-2.86.22-4.06.59-1.2.36-2.25.89-3.15 1.58-.91.68-1.6 1.54-2.16 2.56-.56 1.02-.82 2.23-.82 3.59s.26 2.57.82 3.59c.56 1.02 1.25 1.88 2.16 2.56.91.68 1.95 1.22 3.15 1.58 1.2.36 2.56.53 4.06.59 1.33.06 1.73.07 5.1.07 3.37 0 3.77-.01 5.1-.07 1.5-.06 2.86-.22 4.06-.59 1.2-.36 2.25-.89 3.15-1.58.91-.68 1.6-1.54 2.16-2.56.56-1.02.82-2.23.82-3.59s-.26-2.57-.82-3.59c-.56-1.02-1.25-1.88-2.16-2.56-.91-.68-1.95-1.22-3.15-1.58-1.2-.36-2.56-.53-4.06-.59-1.33-.06-1.73-.07-5.1-.07zm0 4.6c-2.11 0-3.85 1.74-3.85 3.85 0 2.11 1.74 3.85 3.85 3.85 2.11 0 3.85-1.74 3.85-3.85 0-2.11-1.74-3.85-3.85-3.85zm0 6.1c-1.2 0-2.15-.95-2.15-2.15 0-1.2.95-2.15 2.15-2.15 1.2 0 2.15.95 2.15 2.15 0 1.2-.95 2.15-2.15 2.15zm4.42-7.05c-.44 0-.85-.18-1.17-.49-.31-.31-.49-.72-.49-1.17s.18-.85.49-1.17c.31-.31.72-.49 1.17-.49.44 0 .85.18 1.17.49.31.31.49.72.49 1.17s-.18.85-.49 1.17c-.31.31-.72.49-1.17.49z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
