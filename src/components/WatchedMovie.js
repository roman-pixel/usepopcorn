export function WatchedMovie({
  movie,
  onDeleteMovie,
  onSelectMovie,
  onSetShowCondition,
}) {
  return (
    <li
      onClick={() => {
        onSelectMovie(movie.imdbID);
        onSetShowCondition(false);
      }}
    >
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating ? movie.userRating : 0}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteMovie(movie.imdbID)}
          title="Delete"
        >
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
