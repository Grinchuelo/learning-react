import { useEffect, useState, useRef } from "react"

export function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const ref = useRef(true)
  let isFirstInput = ref.current

  const updateQuery = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return

    setQuery(e.target.value)
  }

  const handleSubmit = (e, getMovies) => {
    e.preventDefault()
    getMovies()
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