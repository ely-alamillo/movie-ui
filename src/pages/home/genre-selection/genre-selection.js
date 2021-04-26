import { useHistory } from "react-router"
import { getMovieByGenreRoute } from 'utils/routing'

const GenreCard = ({ genre, onClick }) => {
  return (
    <div
      className="p-4 rounded-md h-48 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 shadow-md cursor-pointer"
      onClick={onClick}
    >
      <div className="text-white text-4xl font-bold">
        {genre}
      </div>
    </div>
  )
}

export const GenreSelection = ({ genres }) => {
  const history = useHistory()

  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-5">
          <h1 className="text-2xl mb-4 text-gray-900">
            <span className="text-gray-400 text-2xl">Browse</span>
          </h1>
          <h1 className="text-4xl font-bold">by Genre</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {
            genres.map((genre, idx) => {
              return <GenreCard
                key={idx}
                genre={genre}
                onClick={() => history.push(getMovieByGenreRoute(genre.toLowerCase()))}
              />
            })
          }
        </div>
      </div>
    </section>
  )
}