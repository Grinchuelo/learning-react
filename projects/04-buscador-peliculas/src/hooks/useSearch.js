import { useEffect, useState, useRef, useCallback } from "react"
import debounce from "just-debounce-it"

export function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const ref = useRef(true)
  let isFirstInput = ref.current

  const debouncedGetMovies = useCallback(
    debounce(async (getMovies, newQuery, disabledSort, setDisabledSort) => {
        await getMovies(newQuery)
        setDisabledSort(!disabledSort)
    }, 400), []
  )

  const updateQuery = (e, getMovies, disabledSort, setDisabledSort) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    
    setQuery(newQuery)

    debouncedGetMovies(getMovies, newQuery, disabledSort, setDisabledSort)
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