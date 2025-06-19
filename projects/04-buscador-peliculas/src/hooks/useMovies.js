import { useState, useRef, useMemo, useEffect, useCallback } from "react"
import { searchMovies } from "../services/movies"

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState({})
  const previousSearch = useRef(query)
  
  const getMovies = useCallback(
    async (query) => {
      if (query == previousSearch.current ) return 
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    }, []) 

  useEffect(() => {
    console.log("efectivamente se ejecuto getMovies")
  }, [movies])

  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])


  return { movies: sortedMovies, getMovies }
}
