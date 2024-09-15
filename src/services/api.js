import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchTrendingMovies = () => api.get(`/trending/movie/week?api_key=${API_KEY}`);
export const fetchMovieDetails = (id) => api.get(`/movie/${id}?api_key=${API_KEY}`);
export const fetchActorDetails = (id) => api.get(`/person/${id}?api_key=${API_KEY}`);

export default api;
