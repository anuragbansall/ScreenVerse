import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, MoviesPage, PeoplePage, PopularPage, TrendingPage, TVShowsPage } from '../components'
import MovieDetails from '../components/Movies/MovieDetails'
import TvDetails from '../components/TVShows/TvDetails'
import PeopleDetail from '../components/People/PeopleDetail'

function Routing() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Home />} />
                <Route path='/trending' element={<TrendingPage />} />
                <Route path='/popular' element={<PopularPage />} />
                <Route path='/movie' element={<MoviesPage />} />
                <Route path='/movie/details/:id' element={<MovieDetails />} />
                <Route path='/tv' element={<TVShowsPage />} />
                <Route path='/tv/details/:id' element={<TvDetails />} />
                <Route path='/people' element={<PeoplePage />} />
                <Route path='/people/details/:id' element={<PeopleDetail/>} />
            </>
        )
    )

  return (
    <RouterProvider router={router} />
  )
}

export default Routing