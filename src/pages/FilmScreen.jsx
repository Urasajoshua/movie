import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import MovieCard from '../components/ui/MovieCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

const FilmScreen = () => {
  const { data: films, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

  if (loading) return <Loading />;
  if (error) return <Error message="Failed to load films." />;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ ease: "easeInOut", duration: 0.5 }} 
      className="relative overflow-hidden"
    >
      
      <section className="relative mb-12 md:mb-40">
        <div className="absolute inset-0">
          <img 
            src={`https://image.tmdb.org/t/p/original${films?.results[0]?.backdrop_path}`} 
            alt="Hero" 
            className="w-full h-56 md:h-96 object-cover object-center"
          />
          <div className="absolute inset-0 text-gray-900"></div>
        </div>
        <div className="relative container mx-auto py-6 px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold  mt-12">{films?.results[0]?.title}</h1>
          <p className="text-sm md:text-lg ">{films?.results[0]?.overview}</p>
        </div>
      </section>

      <section className="mb-12 px-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Genres & Categories</h2>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <div className="bg-blue-100 text-blue-800 p-3 md:p-4 rounded-lg shadow-md flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Action</h3>
            <p className="text-xs md:text-sm">Explore the latest action-packed films!</p>
          </div>
          <div className="bg-green-100 text-green-800 p-3 md:p-4 rounded-lg shadow-md flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Comedy</h3>
            <p className="text-xs md:text-sm">Laugh out loud with the best comedy films!</p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Browse Popular Films</h2>
        <div className="flex flex-col md:flex-row  overflow-x-auto gap-4 pb-2 scrollbar-hidden">
          {films?.results.map(film => (
            <Link to={`/movies/${film.id}`} key={film.id} className="flex-shrink-0 w-36 sm:w-48 md:w-64 lg:w-80">
              <MovieCard 
                id={film.id}
                title={film.title}
                posterUrl={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                vote_average={film.vote_average}
                release_date={film.release_date}
                genres={film.genre_ids.join(', ')}
              />
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default FilmScreen;
