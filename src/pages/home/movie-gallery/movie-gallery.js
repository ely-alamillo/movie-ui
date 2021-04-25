import { MoviePoster } from 'components/movie-poster'

export const MovieGallery = ({ movies }) => {
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
            movies.map((movie, idx) => {
              return (
                <MoviePoster
                  key={idx}
                  link='https://image.tmdb.org/t/p/w300_and_h450_bestv2//e6SK2CAbO3ENy52UTzP3lv32peC.jpg'
                  onClick={() => console.log('click')}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}