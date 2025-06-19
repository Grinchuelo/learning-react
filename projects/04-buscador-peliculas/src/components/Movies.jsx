function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <span>{movie.year}</span>
          <img src={movie.poster} alt={"Poster of " + movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>No se encontraron resultados</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies /> 
  )
}