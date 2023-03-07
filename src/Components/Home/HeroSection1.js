import React from 'react'
import hero1 from '../../img/Group 50.png'
import Button from '../Button'


const HeroSection1 = () => {
  return (
    <div className='hero-section-1 my-0'>
        <div className="max-w-7xl px-5 md:px-10 lg:px-10 mx-auto flex flex-col lg:flex-row justify-between lg:gap-10 items-center py-20 ">
            <div className="img-section lg:w-[50%] relative ">
               <div className="">
               <img className='' src={hero1} alt="" />
              
               </div>
            </div>
            <div className="content-section  lg:w-[50%] ">
                <h2 className='text-primary font-bold text-[24px] uppercase'>Play against your opponentand <br/> and earn rewards</h2>
                <p className='font-medium text-slate-100 mt-4 mb-8'>Live real-time gameplay, reward for every game.</p>
              <div className="">
              <Button props={'Play'}></Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection1