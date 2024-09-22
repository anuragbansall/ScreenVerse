import React, { useEffect, useState } from 'react'
import MediaCardSection from '../MediaCards/MediaCardSection'
import axiosInstance from '../../utils/axios';

function PeoplePage() {

    const [peopleData, setPeopleData] = useState([])
    const [page, setPage] = useState(1)

    const fetchPeopleCardsData = async () => {
        try{
            const response = await axiosInstance.get(`/trending/person/day?page=${page}`)
            setPeopleData((prevData) => [...prevData, ...response.data.results.filter(data => data.profile_path)])
            setPage(prevPage => prevPage + 1)
            console.log(response.data.results)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPeopleCardsData()
    }, [])

  return (
    <MediaCardSection
        title={"People"}
        cardsData={peopleData}
        fetchData={fetchPeopleCardsData}
    />
  )
}

export default PeoplePage