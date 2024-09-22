import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, MoviesPage, PeoplePage, PopularPage, TrendingPage, TVShowsPage } from '../components'

function Routing() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Home />} />
                <Route path='/trending' element={<TrendingPage />} />
                <Route path='/popular' element={<PopularPage />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/tv-shows' element={<TVShowsPage />} />
                <Route path='/people' element={<PeoplePage />} />
            </>
        )
    )

  return (
    <RouterProvider router={router} />
  )
}

export default Routing