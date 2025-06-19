import withoutMovies from "../mocks/no-results.json"
import { useState } from "react"
const apiKey = import.meta.env.VITE_API_KEY

export function useMovies({ query }) {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = () => {
    if (query.length > 0) {
      //setResponseMovies(withMovies)
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutMovies)
    }
  }
  const movies = responseMovies.Search || []
  
  const mappedMovies = movies.map(movie => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  ))

  return { movies: mappedMovies, getMovies }
}
