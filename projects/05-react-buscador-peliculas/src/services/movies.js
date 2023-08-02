const API_KEY = '9b91c4aa'
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`
// const API_URL = 'http://img.omdbapi.com/?apikey=9b91c4aa'

export const searchMovies = async (search) => {
  try{
    const response = await fetch(`${API_URL}&s=${search}`)
    const movies = await response.json()

    return movies.Search?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch (error) {
    throw new Error('No se pudo obtener la lista de películas', error)
  }
}