import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
import axiosInstance from '../../utils/axios'
import CardsScrollContainer from '../Common/CardsScrollContainer'
import Card from '../Common/Card'
import TrendingSection from './TrendingSection'

function Home() {

    const [trendingMovieData, settrendingMovieData] = useState(null)

    const fetchTrendingMovies = async () => {
      try{
          const response = await axiosInstance.get(`/trending/all/day`)
          const data = response.data.results
          settrendingMovieData(data);
      }catch(err){
          (err);
      }
  }

    useEffect(() => {
        fetchTrendingMovies()
        document.title = "ScreenVerse | Home"

        return () => {
          document.title = "ScreenVerse"
        }
    }, [])

  return (
    <div className='w-full h-full flex overflow-x-hidde'>
        <Sidebar />
        <div className='min-w-0 flex-grow h-full flex flex-col'>
          <Navbar />
          <div className="pb-10 h-full w-full overflow-y-auto text-white 2xl:container mx-auto">
            <HeroSection
              trendingMovieData={trendingMovieData}
            />
            <TrendingSection 
              trendingMovieData={trendingMovieData}
            />
          </div>
        </div>
    </div>
  )
}

export default Home