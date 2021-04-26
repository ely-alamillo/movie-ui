export const getTopFiveMovies = (movies) => {
  const orderedMovies = movies.sort((a, b) => b.voteAverage - a.voteAverage)

  return orderedMovies.slice(0, 5)
}