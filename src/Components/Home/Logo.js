import React from 'react'
import logo from "../../img/logo.png"
import logoText from "../../img/Path 17.png"

const Logo = () => {
  return (
    <div className='flex space-x-2 items-center'>
        <img className='w-[70px] h-[70px]' src={logo} alt="" />
        <img className='w-[90px] h-[26px]' src={logoText} alt="" />
    </div>
  )
}

export default Logo