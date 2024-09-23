import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../store/actions/movieAction'
import { useParams } from 'react-router-dom'
import DetailsPage from '../Common/DetailsPage'
import { clearMovies } from '../../store/reducers/movieSlice'
import Loading from '../Common/Loading'

function MovieDetails() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.movieSlice)

  useEffect(() => {
    dispatch(fetchMovie(id))

    return () => {
      dispatch(clearMovies())
    }
  }, [id])

  if(!data) return <Loading />

  return (
    <div>
      <DetailsPage
        detail = {data.detail}
        externalids = {data.externalids}
        recommendations = {data.recommendations}
        watchproviders = {data.watchproviders}
        similar = {data.similar}
        videos = {data.videos}
      />
    </div>
  )
}

export default MovieDetails