import { useFetchAllMovies } from 'hooks/rest';
import { MoviePoster } from 'components/movie-poster'
import { TopFive } from './top-five'
import { GenreSelection } from './genre-selection'

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
  const { data, loading } = useFetchAllMovies();
  console.log({ movie: data[0] })

  return (
    <div className="">
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <>
          <TopFive movies={[1,2,3,4,5]}/>
          <GenreSelection genres={["Comedy", "Action", "Drama", "True Crime"]}/>          
        </>
      )}
    </div>
  );
};
