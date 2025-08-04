import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies/popular').then(res => setMovies(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
