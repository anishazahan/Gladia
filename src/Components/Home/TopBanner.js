import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import './TopBanner'
import bannerImg from '../../img/heading.png'
import img1 from '../../img/Group 4 (1).png'
import img2 from '../../img/Group 4 (2).png'
import img3 from '../../img/Group 33.png'
import img4 from '../../img/Group 5.png'
import img5 from '../../img/Group 5 (1).png'
import Button from '../Button'

const TopBanner = () => {
  return (
    <>
   <div className="banner relative ">
    <Navbar></Navbar>

    {/* .........content section......... */}

   <div className="max-w-7xl mx-auto px-16">

   <div className="flex flex-col  text-center mx-auto relative mt-[3rem] ">
        <h2 className='text-[#E7AC1F] font-bold'>JOIN THE WORD OF</h2>
        <img className='w-[650px] mx-auto' src={bannerImg} alt="" />
        <p className='font-medium text-xl text-slate-200 tracking-tighter mt-3 '>Be part of puzzle games, duels and olympiads with<br/> more than 20,000 players.</p>
    .   <div className="inline mx-auto">
      <Button props={"Play"}></Button>
    </div>
    </div>

   <div className="flex justify-between absolute bottom-0 gap-6 mx-auto">

   <div className="flex gap-4 relative">
   <img className=' mb-[-2rem]' src={img1} alt="" />
   <img className=' mb-[-5rem] ' src={img2} alt="" />
   </div>
   
   <div className="">
   <img className='' src={img3} alt="" />
   </div>

   <div className="flex gap-4">
   <img className=' mb-[-5rem]' src={img4} alt="" />
   <img className='  mb-[-2rem]' src={img5} alt="" />
   </div>
   </div>

   </div>

   </div>
       
       
    </>
  )
}

export default TopBanner