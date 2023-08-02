
import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {

  const { search, updateSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({search, sort})

  const debouncedGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input name='query' value={search} onChange={handleChange} type="text" placeholder='Avengers, Star Wars, Matrix, ...' />
          <input name='sort' value={sort} onChange={handleSort} type="checkbox" />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {loading ? <p>loading...</p> :<Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
