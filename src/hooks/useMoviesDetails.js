import { useEffect, useState } from "react";

export function useMoviesDetails(apiKey, selectedId) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);

      setIsLoading(false);
    }
    getMovieDetails();
  }, [apiKey, selectedId]);

  return { movie, isLoading };
}
