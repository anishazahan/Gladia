import React from 'react'
import hero1 from '../../img/Group 71.png'
import Button from '../Button'


const HeroSection2 = () => {
  return (
    <div className='hero-section-2'>
    <div className="max-w-7xl px-5 md:px-10 lg:px-20 mx-auto flex flex-col lg:flex-row justify-between items-center py-20 ">
        <div className="content-section  lg:w-[50%] ">
            <h2 className='text-primary font-bold text-[24px] uppercase'>fair play</h2>
            <p className='font-medium text-slate-100 mt-4 mb-8'>We recognize fair play, strategy, spells and weapons,outsmart your opponent.</p>
          <div className="">
          <Button props={'Play'}></Button>
          </div>
        </div>

        <div className="img-section lg:w-[50%] relative ">
           <div className="">
           <img  src={hero1} alt="" />
           </div>
        </div>
    </div>
</div>
  )
}

export default HeroSection2