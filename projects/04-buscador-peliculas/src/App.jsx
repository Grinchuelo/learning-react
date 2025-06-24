import { useSearch } from "./hooks/useSearch.js"
import { useMovies } from "./hooks/useMovies.js"
import { Movies } from "./components/Movies.jsx"
import { useEffect, useState } from "react"

export function App() {
  const [sort, setIsSorted] = useState(false)
  const [disabledSort, setDisabledSort] = useState(true)
  const {query, error, handleSubmit, updateQuery, isFirstInput} = useSearch()
  const input_classes = error && !isFirstInput
  ? 'input_error'
  : ''
  const {movies, getMovies} = useMovies({ query, sort })

  const handleSort = () => {
    setIsSorted(!sort)
  }

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form action="" onSubmit={(e) => {handleSubmit(e, getMovies)}}>
          <input onChange={(e) => {updateQuery(e, getMovies, disabledSort, setDisabledSort)}} value={query} id="idMovieName" className={input_classes} name="query" type="text" placeholder="Star Wars, Harry Potter, Minions..." autoComplete="off"/>
          <label htmlFor="sortByTitle">Ordenar por títulos
            <input type="checkbox" id="sortByTitle" onChange={handleSort} checked={sort} disabled={disabledSort} />
          </label>
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
