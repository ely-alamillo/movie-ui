import { Home } from "pages"

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
  }
]
