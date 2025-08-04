import tmdbApi from '../utils/tmdb.js';
import Movie from '../models/Movie.js';

export const searchMovies = async (req, res) => {
  const { query } = req.query;
  const response = await tmdbApi.get('/search/movie', { params: { query } });
  res.json(response.data.results);
};

export const getPopular = async (req, res) => {
  const response = await tmdbApi.get('/movie/popular');
  res.json(response.data.results);
};
