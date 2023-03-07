import React, { useState } from 'react'
import VedioModal from '../Shared/VedioModal/VedioModal'
import './Home/topBanner.css'

const Button = ({props}) => {
  const [showVedioModal,setShowVedioModal] = useState(false)
  return (
        <>

      <div className='btn-style'>
        <button onClick={()=>setShowVedioModal(true)} className='text-[#FFAC03] text-[18px] font-bold px-10 md:px-0 md:w-[300px] py-3 border border-gray '>{props}</button>
      
      </div>

      <VedioModal  isvisible={showVedioModal} onClose={()=>{setShowVedioModal(false)}}></VedioModal>
        
        </>
   
  )
}

export default Button