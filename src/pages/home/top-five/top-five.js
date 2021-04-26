import { useHistory } from 'react-router';
import { MoviePoster } from 'components/movie-poster'
import { getMovieDetailsRoute } from 'utils';
import { Star } from 'components';

export const Movie = ({ movie }) => {
  const history = useHistory();

  return (
    <MoviePoster
      link={movie.posterPath}
      classNames='group'
      onClick={() => {
        history.push(getMovieDetailsRoute(movie.id))
      }}
    >
      <div className="w-full pt-2">
        <div className="text-left flex justify-between">
          <h2 className="title-font font-medium text-lg text-gray-900 ">{movie.originalTitle}</h2>
          <div className='flex text-blue-700'>
            <Star />
            <h3 className="mb-3 ">{movie.voteAverage}</h3>
          </div>
        </div>
        <p className="mb-4 text-left">{movie.genres.join(', ')}</p>
        <div className=''>
          <button
            className="text-white w-full p-2 bg-blue-700 border-0 focus:outline-none rounded-md text-lg opacity-0 group-hover:opacity-100 transition-all"
          >
            View details
          </button>
        </div>
      </div>
    </MoviePoster>
  )
}

export const TopFive = ({ movies }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 pt-10 mx-auto">
        <div className="flex flex-col w-full mb-5">
          <h1 className="text-2xl mb-4 text-gray-900">
            <span className="text-gray-400 text-2xl">Movies</span>
          </h1>
          <h1 className="text-4xl font-bold">Top 5</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            movies.map((movie, idx) => {
              return (
                <Movie key={idx} movie={movie} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}