import { Cast } from './cast'


export const MovieDetail = ({ movies }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="p-4 lg:w-1/5 md:w-1/2 shadow-2x rounded-md"
        >
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg" src='https://image.tmdb.org/t/p/w300_and_h450_bestv2//e6SK2CAbO3ENy52UTzP3lv32peC.jpg' height={450} width={300} />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start text-left items-center pl-4">
          <p className='text-sm mb-3 text-gray-400'>
            <span className="text-blue-700 font-bold text-xl">9.4</span>/10
        </p>
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            The Four Falls Of Buffalo
            <span className="text-gray-400 pl-2">(2015)</span>
          </h1>
          <p className="mb-8 leading-relaxed">Action, Drama</p>
          <div className="flex justify-center flex-col">
            <p className="mb-2 leading-relaxed block font-medium text-gray-900">Director: Ely Alamillo</p>
            <p className="leading-relaxed block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet sit cum, culpa quis itaque praesentium quos veritatis ratione eaque saepe ducimus, labore a porro quisquam laudantium, natus veniam incidunt!</p>
          </div>
        </div>
      </div>
      <div>

        <Cast />
      </div>
    </section>
  )
}