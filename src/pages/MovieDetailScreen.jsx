import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error from '../components/common/Error';
import Loading from '../components/common/Loading';
import { FaPlay, FaBookmark } from "react-icons/fa";
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/motionConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetailScreen = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
        );
        setMovie(response.data);

        const trailer = response.data.videos.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailerKey(trailer ? trailer.key : null);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!movie) return <p>No movie details found.</p>;

  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    genres,
    runtime,
    vote_average,
    credits,
  } = movie;

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  const handleActorClick = (actorId) => {
    navigate(`/actor/${actorId}`);
  };

  const handleStreamingClick = () => {
    toast.info("This is coming soon.");
  };

  const handleWatchlistClick = () => {
    toast.success("Added to watchlist.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="relative"
    >
      <div
        className="absolute inset-0 -z-10 w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black via-black to-transparent"></div>
      </div>

      <div className="container mx-auto py-6 px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          <div className="flex-1 mb-6 md:mb-0 mt-16">
            <h1 className="text-2xl font-extrabold mb-4 text-white">{title}</h1>
            <p className="text-lg mb-4 text-gray-300">{release_date}</p>
            <p className="mb-4 text-gray-300 leading-relaxed">{overview}</p>

            <div className="mb-4 text-gray-300">
              <p className="text-lg font-semibold">Genres:</p>
              <p>{genres.map((genre) => genre.name).join(', ')}</p>
            </div>
            <div className="mb-4 text-gray-300">
              <p className="text-lg font-semibold">Runtime:</p>
              <p>{runtime} minutes</p>
            </div>
            <div className="mb-6 text-gray-300">
              <p className="text-lg font-semibold">Rating:</p>
              <p className="text-yellow-400 text-xl">{vote_average}/10</p>
            </div>

            <div className='flex mt-4 md:mt-0 gap-2 md:gap-4'>
              <div
                className='flex items-center gap-2 md:gap-4 bg-green-800 py-1 md:py-2 px-4 rounded-lg cursor-pointer'
                onClick={handleStreamingClick}
              >
                <FaPlay color='white' />
                <h2 className='text-white'>Streaming</h2>
              </div>
              <div
                className='flex items-center gap-2 md:gap-4 border-2 md:border-gray-50 rounded-lg px-4 py-1 md:py-2 cursor-pointer'
                onClick={handleWatchlistClick}
              >
                <FaBookmark color='green' />
                <h2 className='text-blue-400 md:text-white'>Add to watchlist</h2>
              </div>
            </div>

            <div className="mt-6 md:mt-52">
              <h2 className="text-xl font-semibold mb-4 text-black">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {credits.cast.slice(0, 8).map((actor) => (
                  <div
                    key={actor.cast_id}
                    className="text-center cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => handleActorClick(actor.id)}
                  >
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : 'https://via.placeholder.com/185x278.png?text=No+Image'
                      }
                      alt={actor.name}
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <p className="text-sm font-semibold text-black">{actor.name}</p>
                    <p className="text-xs text-black">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 md:w-[300px] mt-16">
            {trailerKey && (
              <div className="relative mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">Watch Trailer</h2>
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <img
              src={posterUrl}
              alt={title}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <ToastContainer /> 
    </motion.div>
  );
};

export default MovieDetailScreen;
