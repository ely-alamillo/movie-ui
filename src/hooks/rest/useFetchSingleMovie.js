import { useQuery } from 'react-query'
import { REST_API_ROOT_ENDPOINT } from 'hooks/rest'

const FetchSingleMovie = ({ queryKey }) => {
  const [, { id }] = queryKey
  const endpoint = `${REST_API_ROOT_ENDPOINT}/movies/${id}`;

  return fetch(endpoint).then(res => res.json())
}

export const useFetchSingleMovie = (id, queryConfig) => {
  const queryKey = ['fetchSingleMovie', { id }]

  return useQuery(queryKey, FetchSingleMovie,
    {
      onSuccess: () => {
        // add logging 
      },
      onError: (error) => {
        // add error
      },
      ...queryConfig
    }
  )
}