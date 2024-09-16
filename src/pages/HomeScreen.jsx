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

  const getGenres = (genre_ids) => {
    
    const genresMap = {
      28: 'Action',
      12: 'Adventure',
      16: 'Animation',
      35: 'Comedy',
      80: 'Crime',
    };
    return genre_ids.map(id => genresMap[id] || 'Unknown').join(', ');
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto py-8 mt-10 px-4"
    >
      
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to MovieLand</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">Discover the latest movies, trending series, and award-winning films.</p>
        <a href="#explore" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Explore Now
        </a>
      </div>

    
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
                <MovieCard
                  title={movie.title}
                  posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  vote_average={movie.vote_average}
                  release_date={movie.release_date}
                  genres={getGenres(movie.genre_ids)}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      <Parterns />

      
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
                <MovieCard
                  title={movie.title}
                  posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  vote_average={movie.vote_average}
                  release_date={movie.release_date}
                  genres={getGenres(movie.genre_ids)}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      
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
                <MovieCard
                  title={tvShow.name}
                  posterUrl={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`}
                  vote_average={tvShow.vote_average}
                  release_date={tvShow.first_air_date}
                  genres={getGenres(tvShow.genre_ids)}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      
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
                <MovieCard
                  title={movie.title}
                  posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  vote_average={movie.vote_average}
                  release_date={movie.release_date}
                  genres={getGenres(movie.genre_ids)}
                />
              </Link>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default HomeScreen;
