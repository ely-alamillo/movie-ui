import { useFetchSingleMovie } from 'hooks'
import { useParams } from 'react-router'
import { Error } from 'components/error'
import { Loader } from 'components/loader'
import { Cast } from './cast'
import { Layout } from 'components'


export const MovieDetail = ({ movies }) => {
  const { id } = useParams();

  const {
    data,
    isError,
    isLoading
  } = useFetchSingleMovie(id, { staleTime: Infinity })


  const renderError = () => {
    return isError ? <Error errorMessage={'We encountered an error loading this page.'} /> : null
  }

  return (
    <Layout>
      {
        isLoading ? <Loader loaderMessage="Loading movie details..."/> :

          <section className="text-gray-600 body-font">
            {renderError()}
            <div className="container mx-auto flex px-5 pb-24 pt-10 md:flex-row flex-col items-center">
              <div
                className="p-4 lg:w-1/5 md:w-1/2 shadow-2x rounded-md"
              >
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="movie poster"
                    className="flex-shrink-0 rounded-lg"
                    src={data.posterPath}
                    height={450}
                    width={300}
                  />
                </div>
              </div>
              <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start text-left items-center pl-4">
                <p className='text-sm mb-3 text-gray-400'>
                  <span className="text-blue-700 font-bold text-xl">{data.voteAverage}</span>/10
                </p>
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {data.originalTitle}
                  <span className="text-gray-400 pl-2">({data.releaseDate.split('-')[0]})</span>
                </h1>
                <p className="mb-8 leading-relaxed">{data.genres.join(', ')}</p>
                <div className="flex justify-center flex-col">
                  <p className="mb-2 leading-relaxed block font-medium text-gray-900">Director: {data.director.name}</p>
                  <p className="leading-relaxed block">{data.overview}</p>
                </div>
              </div>
            </div>
            <div>
              <Cast castMembers={data.cast} />
            </div>
          </section>

      }
    </Layout>
  )
}