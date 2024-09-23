import React, { useEffect, useState } from 'react'
import MediaCardSection from '../MediaCards/MediaCardSection'
import axiosInstance from '../../utils/axios';

function MoviesPage() {

    const [moviesData, setMoviesData] = useState([])
    const [page, setPage] = useState(1)

    const fetchMoviesCardsData = async () => {
        try{
            const response = await axiosInstance.get(`/discover/movie?page=${page}`)
            setMoviesData((prevData) => [...prevData, ...response.data.results])
            setPage(prevPage => prevPage + 1)
            (response.data.results)
        }catch(err){
            (err);
        }
    }

    useEffect(() => {
        fetchMoviesCardsData()
    }, [])

  return (
    <MediaCardSection
        title={"Movie"}
        cardsData={moviesData}
        fetchData={fetchMoviesCardsData}
    />
  )
}

export default MoviesPage