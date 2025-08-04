import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  tmdbId: Number,
  title: String,
  poster: String,
  overview: String,
  releaseDate: String,
  rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
