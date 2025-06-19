import { useSearch } from "./hooks/useSearch.js"
import { useMovies } from "./hooks/useMovies.js"
import { Movies } from "./components/Movies.jsx"

export function App() {
  const {query, error, handleSubmit, updateQuery, isFirstInput} = useSearch()
  const input_classes = error && !isFirstInput
  ? 'input_error'
  : ''
  const {movies, getMovies} = useMovies({ query })

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form action="" onSubmit={(e) => {handleSubmit(e, getMovies)}}>
          <input onChange={updateQuery} value={query} id="idMovieName" className={input_classes} name="query" type="text" placeholder="Star Wars, Harry Potter, Minions..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {error && !isFirstInput && <p style={{color:'red'}}>{error}</p>}
        <Movies movies={movies}/>
      </main>
    </>
  )
}
