import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({search, sort}) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({search}) => {
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
      previousSearch.current = search
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  },[])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return {movies: sortedMovies, getMovies, error, loading}
}