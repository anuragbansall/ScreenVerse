import React, { useEffect, useState } from 'react'
import MediaCardSection from '../MediaCards/MediaCardSection'
import axiosInstance from '../../utils/axios';

function TrendingPage() {

    const [trendingData, setTrendingData] = useState([])
    const [page, setPage] = useState(1)

    const fetchTrendingCardsData = async () => {
        try{
            const response = await axiosInstance.get(`/trending/all/day?page=${page}`)
            setTrendingData((prevData) => [...prevData,...response.data.results])
            setPage(prevPage => prevPage + 1)
            (response.data.results)
        }catch(err){
            (err);
        }
    }

    useEffect(() => {
        fetchTrendingCardsData()
    }, [])

  return (
    <MediaCardSection
        title={"Trending"}
        cardsData={trendingData}
        fetchData={fetchTrendingCardsData}
    />
  )
}

export default TrendingPage