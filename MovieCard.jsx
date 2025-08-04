export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded shadow p-2">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded" />
      <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-600">{movie.release_date}</p>
    </div>
  );
}
