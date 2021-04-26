import { useFetchSingleMovie } from 'hooks'
import { useHistory, useParams } from 'react-router'
import { Error } from 'components/error'
import { Loader } from 'components/loader'
import { Cast } from './cast'
import { Layout } from 'components/layout'
import { BackArrow, Star } from 'components/icons'
import { getHomeRoute } from 'utils'


export const MovieDetail = ({ movies }) => {
  const { id } = useParams()
  const history = useHistory()

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
        isLoading ? <Loader loaderMessage="Loading movie details..." /> :

          <section className="text-gray-600 body-font">
            {renderError()}
            <div className="container mx-auto flex px-5 pt-12">
              <button
                className="flex items-center"
                onClick={() => history.push(getHomeRoute())}
              >
                <BackArrow className='mr-1' />
                <span className="text-2xl font-bold text-gray-900">
                  Movies
                </span>
              </button>
            </div>
            <div className="container mx-auto flex px-5 pb-24 pt-6 md:flex-row flex-col items-center">
              <div
                className="p-4 pt-0 pl-0 lg:w-1/5 md:w-1/2 shadow-2x rounded-md"
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
                <div className='text-sm flex text-blue-700 items-end'>
                  
                  <Star className="text-xl h-10 w-10"/>
                  
                  <div className="font-bold text-3xl">{data.voteAverage}</div>
                  <div className='text-xl '>/10</div>
                </div>
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {data.originalTitle}
                  <span className="text-gray-400 pl-2">({data.releaseDate.split('-')[0]})</span>
                </h1>
                <p className="mb-8 leading-relaxed text-xl">{data.genres.join(', ')}</p>
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