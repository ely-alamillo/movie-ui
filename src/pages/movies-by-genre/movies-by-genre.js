import { MoviePoster } from 'components/movie-poster'
import { useFetchMoviesByGenre } from "hooks/rest"
import { useHistory, useParams } from "react-router"
import { Error } from 'components/error'
import { Loader } from 'components/loader'
import { Layout } from 'components'
import { getMovieDetailsRoute } from 'utils/routing'
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
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col w-full mb-5">
                <h1 className="text-2xl title-font mb-4 text-gray-900">
                  <span className="text-gray-400 text-2xl">Movies</span>
                </h1>
                <h1 className="text-4xl font-bold">{capitalize(id)}</h1>
              </div>
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