import React, { useState } from 'react'
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
import LoginModal from '../../Shared/Login/LoginModal'
import RegisterModal from '../../Shared/Register/RegisterModal'
import VedioModal from '../../Shared/VedioModal/VedioModal'

const TopBanner = ({}) => {
  const [showModal,setShowModal] = useState(false)
  const [showRegisterModal,setShowRegisterModal] = useState(false)
  const [showVedioModal,setShowVedioModal] = useState(false)
 
  return (
    <>
   <div className="banner relative ">
    <Navbar showModal={showModal} setShowModal={setShowModal} setShowRegisterModal={setShowRegisterModal} showRegisterModal={showRegisterModal} ></Navbar>

    {/* .........content section......... */}

   <div className="max-w-7xl mx-auto px-16 ">

   <div className="px-16 flex flex-col  text-center mx-auto relative mt-[3rem] ">
        <h2 className='text-[#E7AC1F] font-bold'>JOIN THE WORD OF</h2>
        <img className='w-[650px] mx-auto' src={bannerImg} alt="" />
        <p className='font-medium text-xl text-slate-200 tracking-tighter mt-3 '>Be part of puzzle games, duels and olympiads with<br/> more than 20,000 players.</p>
    .   <div className="inline mx-auto">
      <Button props={"Play"}></Button>
    </div>
    </div>

   <div className="flex justify-between bottom-0 w-full">

   <div className="flex gap-4 w-[40%]">
        <div className="w-full ">
        <img className='w-[90%] h-full' src={img1} alt="" />
        </div>
        <div className="w-full">
        <img className='w-[90%] h-full ' src={img2} alt="" />
        </div>
   </div>

   <div className="w-[20%]">
   <img onClick={()=>setShowVedioModal(true)} className='' src={img3} alt="" />
   </div>

   <div className="flex w-[40%] gap-4">
   <div className="w-full mx-auto">
        <img className='w-[90%] h-full' src={img1} alt="" />
        </div>
        <div className="w-full">
        <img className='w-[90%] h-full ' src={img2} alt="" />
        </div>
   </div>
   </div>

   </div>

   </div>
       
       <LoginModal isvisible={showModal} onClose={()=>{setShowModal(false)}}></LoginModal>
       <RegisterModal isvisible={showRegisterModal} onClose={()=>{setShowRegisterModal(false)}}></RegisterModal>
       <VedioModal  isvisible={showVedioModal} onClose={()=>{setShowVedioModal(false)}}></VedioModal>
     
       
    </>
  )
}

export default TopBanner