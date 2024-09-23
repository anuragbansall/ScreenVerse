import React, { useEffect, useState } from 'react'
import MediaCardSection from '../MediaCards/MediaCardSection'
import axiosInstance from '../../utils/axios';

function TVShowsPage() {

    const [tvShowsData, setTvShowsData] = useState([])
    const [page, setPage] = useState(1)

    const fetchTvShowsCardsData = async () => {
        try{
            const response = await axiosInstance.get(`/discover/tv?page=${page}`)
            setTvShowsData((prevData) => [...prevData, ...response.data.results])
            setPage(prevPage => prevPage + 1)
            (response.data.results)
        }catch(err){
            (err);
        }
    }

    useEffect(() => {
        fetchTvShowsCardsData()
    }, [])

  return (
    <MediaCardSection
        title={"TV"}
        cardsData={tvShowsData}
        fetchData={fetchTvShowsCardsData}
    />
  )
}

export default TVShowsPage