import { useEffect, useState, useRef, useCallback } from "react"

export function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const ref = useRef(true)
  let isFirstInput = ref.current
  let timeOutID

  const debouncedGetMovies = useCallback(
    (getMovies, newQuery) => {
      clearTimeout(timeOutID)
      timeOutID = setTimeout(() => {
        getMovies(newQuery)
      }, 600)
    }, [])

  const updateQuery = (e, getMovies) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    
    setQuery(newQuery)

    debouncedGetMovies(getMovies, newQuery)
  }

  const handleSubmit = (e, getMovies) => {
    e.preventDefault()
    getMovies(query)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current = query == ''
      isFirstInput = ref.current
      return
    }

    if (query == '') {
      setError('El input no puede estar vacío')
      return
    } 

    if (query.match(/^\d+$/)) {
      setError('El titulo no puede contener sólo numeros')
      return
    }

    if (query.length < 2) {
      setError('La búsqueda debe tener al menos 2 caracteres')
      return
    }

    setError(null)
  }, [query])

  return {query, error, handleSubmit, updateQuery, isFirstInput}
}