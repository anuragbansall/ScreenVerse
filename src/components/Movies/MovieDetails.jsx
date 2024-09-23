import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../store/actions/movieAction'
import { useParams } from 'react-router-dom'
import DetailsPage from '../Common/DetailsPage'
import { clearMovies } from '../../store/reducers/movieSlice'

function MovieDetails() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.movieSlice)
  console.log(data);
  

  useEffect(() => {
    dispatch(fetchMovie(id))

    return () => {
      dispatch(clearMovies())
    }
  }, [id])

  if(!data) return <h2>Loading...</h2>

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