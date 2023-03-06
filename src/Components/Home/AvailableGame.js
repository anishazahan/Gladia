import React from 'react'
import {availableGameData} from './availableGameData'
import availableGames from "../../img/Available Games 1.png"
// console.log(availableGameData);

const AvailableGame = () => {
  return (
    <div className='available-game-banner pt-48 pb-12'>

        <div className="text-center mx-auto">
            <img className='lg:w-[400px] mx-auto' src={availableGames} alt="" />
                <p className='text-slate-200 font-medium'>Duis aute irure dolor in reprehenderit in voluptate velit <br/> esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

    <div className="max-w-7xl mx-auto flex items-center h-full w-full justify-center mt-[5%]">
        {
            availableGameData?.map(item=>{
                return(
                    <img className={` ${item.id === 3 ? "w-[273px] h-[345px]" : "w-[215px]"}`} src={item.img} alt="" />
                )
            })
        }
    </div>
    </div>
  )
}

export default AvailableGame