import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/api/movies/search?query=${id}`).then(res => setMovie(res.data[0]));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2 className="text-2xl font-bold mt-2">{movie.title}</h2>
      <p className="mt-2">{movie.overview}</p>
    </div>
  );
}
