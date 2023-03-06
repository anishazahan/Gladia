import React from 'react'
import Footer from '../../Components/Footer/Footer'
import AvailableGame from '../../Components/Home/AvailableGame'
import HeroSection1 from '../../Components/Home/HeroSection1'
import HeroSection2 from '../../Components/Home/HeroSection2'
import TopBanner from '../../Components/Home/TopBanner'
import '../../Components/Home/topBanner.css'

const Home = () => {
  return (
    <div className='my-0'>
      <TopBanner></TopBanner>
    <AvailableGame></AvailableGame>
    <HeroSection1></HeroSection1>
    <HeroSection2></HeroSection2>
    <Footer></Footer>
   
     

    </div>
  )
}

export default Home