const apiKey = import.meta.env.VITE_API_KEY;

export const searchMovies = async ({ query }) => {
  if (query == "") return null;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
    const json = await response.json();

    const movies = json.Search || [];

    return movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

  } catch (error) {
    throw new Error("Error searching the movie");
  }
};
