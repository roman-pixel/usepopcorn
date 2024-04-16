import { WatchedMovie } from "./WatchedMovie";

export function WatchedMoviesList({
  watched,
  onDeleteMovie,
  onSelectMovie,
  onSetShowCondition,
}) {
  return (
    <ul className="list list-movies">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={onDeleteMovie}
          onSelectMovie={onSelectMovie}
          onSetShowCondition={onSetShowCondition}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
