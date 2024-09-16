import React from 'react';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ title, posterUrl, vote_average, release_date, genres }) => {
  return (
    <div className="flex-shrink-0 w-48 border rounded-lg px-6 py-4 shadow-md md:w-64 relative group">
  
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-auto object-cover rounded-lg"
      />
      
  
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">Release Date: {release_date}</p>
        <p className="text-sm text-gray-300">Genres: {genres}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-sm font-bold">{vote_average}</span>
          <span className="ml-2 text-xs text-gray-300">(IMDb)</span>
        </div>
      </div>
      

      <div className="mt-2 md:hidden  p-4 rounded-b-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-900 mt-1">Release Date: {release_date}</p>
        <p className="text-sm text-gray-900">Genres: {genres}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-sm font-bold text-gray-900">{vote_average}</span>
          <span className="ml-2 text-xs text-gray-900">(IMDb)</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
