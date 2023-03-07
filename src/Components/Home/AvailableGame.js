import React from 'react'
import {availableGameData} from './availableGameData'
import availableGames from "../../img/Available Games 1.png"

// console.log(availableGameData);

const AvailableGame = () => {
  return (
    <div className='available-game-banner py-32'>

        <div className="text-center mx-auto py-14  ">
            <img className='lg:w-[400px] mx-auto' src={availableGames} alt="" />
                <p className='text-slate-200 font-medium'>Duis aute irure dolor in reprehenderit in voluptate velit <br/> esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

    <div className=" max-w-7xl mx-auto flex  items-center h-full w-full justify-center">
        {
            availableGameData?.map(item=>{
                return(
                   <div className="">
                    <div className="relative">
                    <img className={` ${item.id === 3 ? "w-[273px] h-[345px]" : "w-[215px]"}`} src={item.img} alt="" />
                    <img className={`absolute ${item.id == "3" ?" mx-auto px-16 my-5":"hidden"}`} src={item.descriptionImg} alt="" />
                    <h2 className={` ${item.id =="3"? "hidden":"text-xl font-bold text-primary text-center px-3 mb-2"}`}>{item.name}</h2>
                     <h2  className={` ${item.id =="3"? "hidden":"text-gray-200 font-medium absolute w-full px-3 text-center"}`}>{item.description}</h2>
                    </div>
                   </div>
                   
                )
            })
        }
    </div>

    {/* <div className="lg:hidden max-w-7xl mx-auto flex flex-col lg:flex-row items-center h-full w-full justify-center ">
        {
            availableGameData?.map(item=>{
                return(
                    <img className={` ${item.id === 3 ? "w-[273px] h-[345px]" : "w-[215px]"}`} src={item.img} alt="" />
                )
            }).slice(0,2)
        }
    </div> */}
    </div>
  )
}

export default AvailableGame