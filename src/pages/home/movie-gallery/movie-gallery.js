import { MoviePoster } from 'components/movie-poster'
import { useHistory } from 'react-router'
import { getMovieDetailsRoute } from 'utils';

export const MovieGallery = ({ movies }) => {
  const history = useHistory();

  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-5">
          <h1 className="text-2xl title-font mb-4 text-gray-900">
            <span className="text-gray-400 text-2xl">Movies</span>
          </h1>
          <h1 className="text-4xl font-bold"> Browse All</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            movies.map((movie) => {
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