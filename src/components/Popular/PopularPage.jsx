import React, { useEffect, useState } from 'react'
import MediaCardSection from '../MediaCards/MediaCardSection'
import axiosInstance from '../../utils/axios';

function PopularPage() {

    const [popularData, setPopularData] = useState([])
    const [page, setPage] = useState(1)

    const fetchPopularCardsData = async () => {
        try{
            const response = await axiosInstance.get(`/movie/popular?page=${page}`)
            setPopularData((prevData) => [...prevData, ...response.data.results])
            setPage(prevPage => prevPage + 1)
            (response.data.results)
        }catch(err){
            (err);
        }
    }

    useEffect(() => {
        fetchPopularCardsData()
    }, [])

  return (
    <MediaCardSection
        title={"Popular"}
        cardsData={popularData}
        fetchData={fetchPopularCardsData}
    />
  )
}

export default PopularPage