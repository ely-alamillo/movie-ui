import { Home, MovieDetail, MoviesByGenre } from "pages"

export const ROUTE_MAP = {
  home: '/',
  movieDetails: '/details/:id',
  movieGenre: '/genre/:id'
}

export const routes = [
  {
    path: ROUTE_MAP.home,    
    component: Home,
    breadcrums: {
      items: []
    }
  },
  {
    path: ROUTE_MAP.movieDetails,    
    component: MovieDetail,
    breadcrums: {
      items: []
    }
  },
  {
    path: ROUTE_MAP.movieGenre,    
    component: MoviesByGenre,
    breadcrums: {
      items: []
    }
  },
]

export const interpolateParams = (route, params) => {
  let interpolatedRoute = route;

  Object.keys(params).forEach((key) => {
    interpolatedRoute = interpolatedRoute.replace(`:${key}`, params[key])
  })

  return interpolatedRoute
}

export const getHomeRoute = () => {
  return ROUTE_MAP.home
}

export const getMovieDetailsRoute = (id) => {
  return `${interpolateParams(ROUTE_MAP.movieDetails, { id })}`
}

export const getMovieByGenreRoute = (id) => {
  return `${interpolateParams(ROUTE_MAP.movieGenre, { id })}`
}