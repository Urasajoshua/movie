import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import MovieCard from '../components/ui/MovieCard';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/motionConfig';

const API_KEY = import.meta.env.VITE_API_KEY;

const FilmScreen = () => {
  
  const { data: films, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

  if (loading) return <Loading />;
  if (error) return <Error message="Failed to load films." />;

  return (
    <motion.div initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ ease: "easeInOut", duration: 0.5 }} className="relative overflow-hidden mt-16">
      {/* Hero Section */}
      <section className="relative md:mb-40">
        <div className="absolute inset-0">
          <img 
            src={`https://image.tmdb.org/t/p/original${films?.results[0]?.backdrop_path}`} 
            alt="Hero" 
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-10"></div>
        </div>
        <div className="relative container mx-auto py-6 px-4 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">{films?.results[0]?.title}</h1>
          <p className="text-lg mb-6">{films?.results[0]?.overview}</p>
          <a 
            href=''
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12 px-4 mt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-6  pb-2">Genres & Categories</h2>
        <div className="flex flex-wrap gap-6">
          {/* categories */}
          <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold mb-2">Action</h3>
            <p className="text-sm">Explore the latest action-packed films!</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md flex-1">
            <h3 className="text-xl font-semibold mb-2">Comedy</h3>
            <p className="text-sm">Laugh out loud with the best comedy films!</p>
          </div>
      
        </div>
      </section>

      {/* Film Grid */}
      <section className="px-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-6  pb-2">Browse Popular Films</h2>
        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hidden">
          {films?.results.map(film => (
            <MovieCard key={film.id} movie={film} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default FilmScreen;
