import { MoviePoster } from 'components/movie-poster'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router'
import { getMovieDetailsRoute } from 'utils';

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

export const MovieGallery = ({ movies }) => {
  console.log({ movies , me: true})
  const [filter, setFilter] = useState('popularity')
  const [filteredMovies, setFilteredMovies] = useState([...movies])
  const history = useHistory();

  useEffect(() => {
    
    const newFilteredMovies = filterAscendingByProperty(filter, [...filteredMovies])
    setFilteredMovies(newFilteredMovies)

  }, [filter])

  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row justify-between items-end mb-5">
          <div>
            <h1 className="text-2xl title-font mb-4 text-gray-900">
              <span className="text-gray-400 text-2xl">Movies</span>
            </h1>
            <h1 className="text-4xl font-bold"> Browse All</h1>
          </div>
          <div>
          <div className="flex ml-6 items-center">
            <span className="mr-3 text-gray-400 ">Sort by</span>
            <div className="relative">
              <select 
                className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value='popularity'>Popularity</option>
                <option value='voteAverage'>Votes</option>                
                <option value={'budget'}>Budget</option>
                <option value={'runtime'}>Runtime</option>
                <option value={'releaseDate'}>Release Date</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            filteredMovies.map((movie) => {
              return (
                <MoviePoster
                  key={movie.id}
                  link={movie.posterPath}
                  onClick={() => history.push(getMovieDetailsRoute(movie.id))}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}