import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <div className="flex-shrink-0 w-48 relative group">
      <div className="relative overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
        <div className="absolute bottom-4 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-center">
          <p className="text-lg font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
