import React from 'react'
import './Home/topBanner.css'

const Button = ({props}) => {
  return (
    <div className='btn-style'>
        <button className='text-[#FFAC03] text-[18px] font-bold px-10 md:px-0 md:w-[300px] py-3 border border-gray '>{props}</button>
      
    </div>
   
  )
}

export default Button