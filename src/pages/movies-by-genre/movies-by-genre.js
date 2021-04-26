import { MoviePoster } from 'components/movie-poster'
import { useFetchMoviesByGenre } from "hooks/rest"
import { useHistory, useParams } from "react-router"
import { Error } from 'components/error'
import { Loader } from 'components/loader'
import { Layout } from 'components/layout'
import { BackArrow } from 'components/icons'
import { getMovieDetailsRoute, getHomeRoute } from 'utils/routing'
import { capitalize } from 'utils/text/text'

export const MoviesByGenre = () => {
  const { id } = useParams()
  const history = useHistory()

  const {
    data,
    isError,
    isLoading
  } = useFetchMoviesByGenre(id, { staleTime: Infinity })

  const renderError = () => {
    return isError ? <Error errorMessage={'We encountered an error loading this page.'} /> : null
  }

  return (
    <Layout>
      {
        isLoading ? <Loader loaderMessage='Loading movies...' /> :
          <>
            {renderError()}
            <section className="body-font">
              <div className="container mx-auto flex px-5 pt-12">
                <button
                  className="flex items-center"
                  onClick={() => history.push(getHomeRoute())}
                >
                  <BackArrow className='mr-1' />
                  <span className="text-2xl font-bold text-gray-400">
                    Movies:
                    <span className="pl-1 text-gray-900">{capitalize(id)}</span>
                </span>
                </button>
              </div>
              <div className="container px-5 pb-24 pt-6 mx-auto">                
                <div className="flex flex-wrap -m-4">
                  {
                    data.map((movie) => {
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
          </>
      }
    </Layout>
  )
}