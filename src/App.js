import { useCallback, useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

const KEY = "477d9ec";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showCondition, setShowCondition] = useState(false);

  const handleCloseMovie = useCallback(
    () => setSelectedId(null),
    [setSelectedId]
  );

  const { movies, isLoading, error } = useMovies(query, KEY, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function handlSetShowInFirstBox(showConditionValue) {
    setShowCondition(showConditionValue);
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading &&
            !error &&
            (!showCondition && selectedId ? (
              <MovieDetails
                apiKey={KEY}
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : (
              <MovieList
                movies={movies}
                onSelectMovie={handleSelectMovie}
                onSetShowCondition={handlSetShowInFirstBox}
              />
            ))}
          {error && <ErrorMessage errorMessage={error} />}
        </Box>
        <Box>
          {showCondition && selectedId ? (
            <MovieDetails
              apiKey={KEY}
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onSelectMovie={handleSelectMovie}
                onDeleteMovie={handleDeleteMovie}
                onSetShowCondition={handlSetShowInFirstBox}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
