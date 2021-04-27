import { useQuery } from 'react-query'
import { REST_API_ROOT_ENDPOINT } from 'hooks/rest'


export const fetchAllMovies = () => {
  const endpoint = `${REST_API_ROOT_ENDPOINT}/movies`;

  return fetch(endpoint).then(res => res.json())    
}

export const useFetchAllMovies = (queryConfig) => {
  const queryKey = 'fetchAllMovies'
  
  return useQuery(queryKey, fetchAllMovies, 
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

};