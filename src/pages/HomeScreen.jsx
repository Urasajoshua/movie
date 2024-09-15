import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import MovieCard from '../components/ui/MovieCard';
import Parterns from '../components/ui/Parterns';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/motionConfig';


const API_KEY = import.meta.env.VITE_API_KEY;

const HomeScreen = () => {
  const { data: trendingMovies, loading: loadingTrending, error: errorTrending } = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  const { data: popularMovies, loading: loadingPopular, error: errorPopular } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const { data: series, loading: loadingSeries, error: errorSeries } = useFetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`);
  const { data: awardMovies, loading: loadingAward, error: errorAward } = useFetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto py-8 mt-10 px-4"
    >
      {/* Introduction Section */}
      <section className="mb-12 text-center mt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to MovieLand</h1>
        <p className="text-lg text-gray-600">Explore the latest trends, popular movies, series, and award contenders. Discover your next favorite film or show!</p>
      </section>

      {/* Trending Movies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2">Trending Movies</h2>
        {loadingTrending ? (
          <Loading />
        ) : errorTrending ? (
          <Error message="Failed to load trending movies." />
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hidden">
            {trendingMovies?.results.map(movie => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </section>

      <Parterns />

      {/* Popular Movies of the Week */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2">Popular Movies of the Week</h2>
        {loadingPopular ? (
          <Loading />
        ) : errorPopular ? (
          <Error message="Failed to load popular movies." />
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hidden">
            {popularMovies?.results.map(movie => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Carousel */}
      {/* <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2">Featured</h2>
        <Carousel />
      </section> */}

      {/* Series */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2">Series</h2>
        {loadingSeries ? (
          <Loading />
        ) : errorSeries ? (
          <Error message="Failed to load series." />
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hidden">
            {series?.results.map(tvShow => (
              <Link to={`/movies/${tvShow.id}`} key={tvShow.id}>
                <MovieCard movie={tvShow} />
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Movies on Awards */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2">Movies on Awards</h2>
        {loadingAward ? (
          <Loading />
        ) : errorAward ? (
          <Error message="Failed to load award movies." />
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hidden">
            {awardMovies?.results.map(movie => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default HomeScreen;
