import { useState, useEffect } from 'react'

const filterAscendingByProperty = (property, movies) => {
  const isDateSort = property === 'releaseDate'
  if (isDateSort) {
    return movies.sort((a, b) => {
      return new Date(b[property]) - new Date(a[property])
    })
  }
  return movies.sort((a, b) => {
    return b[property] - a[property]
  })


}

export const useMoviesFilter = (initialFilter, initalMovies) => {
  const [filter, setFilter] = useState(initialFilter)
  const [filteredMovies, setFilteredMovies] = useState([])
  
  useEffect(() => {
    
    const newFilteredMovies = filterAscendingByProperty(filter, [...initalMovies])
    setFilteredMovies(() => newFilteredMovies)
    
  }, [filter, JSON.stringify(initalMovies)])

  console.log({initalMovies, filter, initialFilter, filteredMovies})

  return { filter, setFilter, filteredMovies }

}