import { useFetchAllMovies } from 'hooks/rest';
import { TopFive } from './top-five'
import { GenreSelection } from './genre-selection'
import { MovieGallery } from './movie-gallery/movie-gallery';
import { Layout } from 'components/layout'
import { Error } from 'components/error'
import { Loader } from 'components/loader'

/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 **/

export const Home = () => {
  const {
    data,
    isError,
    isLoading
  } = useFetchAllMovies({ staleTime: Infinity });

  const renderError = () => {
    return isError ? <Error errorMessage={'We encountered an error loading this page.'} /> :  null
  }

  return (
    <Layout>
      {isLoading ? (
        <Loader loaderMessage="Loading page..."/>
      ) : (
        <>
          {renderError()}
          <TopFive movies={data} />
          <GenreSelection genres={["Comedy", "Action", "Drama", "True Crime"]} />
          <MovieGallery movies={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        </>
      )}
    </Layout>
  );
};
