import { MoviePoster } from 'components/movie-poster'
import { useHistory } from 'react-router'
import { getMovieDetailsRoute } from 'utils';
import { useMoviesFilter } from 'hooks/rest'
import { MovieFilter } from 'components/movie-filter'

const filterOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'voteAverage', label: 'Votes' },
  { value: 'budget', label: 'Budget' },
  { value: 'runtime', label: 'Runtime' },
  { value: 'releaseDate', label: 'Release Date' },
]

export const MovieGallery = ({ movies }) => {
  const history = useHistory();

  const { filter, setFilter, filteredMovies } = useMoviesFilter('popularity', movies)

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
            <MovieFilter
              options={filterOptions}
              setFilter={setFilter}
              filter={filter}
            />
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