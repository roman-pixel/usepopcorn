import Movie from "./Movie";

function MovieList({ movies, onSelectMovie, onSetShowCondition }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
          onSetShowCondition={onSetShowCondition}
        />
      ))}
    </ul>
  );
}

export default MovieList;
