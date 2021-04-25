import { useHistory } from 'react-router';
import { MoviePoster } from 'components/movie-poster'

export const Movie = () => {
  const history = useHistory();

  return (
    <MoviePoster
      link='https://image.tmdb.org/t/p/w300_and_h450_bestv2//e6SK2CAbO3ENy52UTzP3lv32peC.jpg'
      classNames='group'
      onClick={() => console.log('click')}
    >
      <div className="w-full">
        <div className="text-left flex justify-between">

          <h2 className="title-font font-medium text-lg text-gray-900 ">Wonder Woman</h2>
          <h3 className="text-gray-500 mb-3 ">9.9</h3>
        </div>
        <p className="mb-4 text-left">Action, Drama</p>
        <div className=''>
          <button className="text-white w-full p-2 bg-blue-700 border-0 focus:outline-none rounded-md text-lg opacity-0 group-hover:opacity-100 transition-all">
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
      <div className="container px-5 py-24 mx-auto">
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
                <Movie key={idx}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}