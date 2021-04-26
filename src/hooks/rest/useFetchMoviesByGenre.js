import { useQuery } from "react-query"
import { fetchAllMovies } from "./useFetchAllMovies"

export const fetchMoviesByGenre = async ({ queryKey }) => {
  try {
    const [, { genre }] = queryKey

    const allMovies = await fetchAllMovies()
    const filteredMovies = allMovies.filter((movie) => {
      const normalizedGenres = movie.genres.map((genre) => genre.toLowerCase())
      
      return normalizedGenres.includes(genre)
    })    

    return filteredMovies
  } catch (error) {
    throw new Error('Failed to fetch movies')
  }
}

export const useFetchMoviesByGenre = (genre, queryConfig) => {
  const queryKey = ['fetchMoviesByGenre', { genre }]

  return useQuery(queryKey, fetchMoviesByGenre, {...queryConfig})
}