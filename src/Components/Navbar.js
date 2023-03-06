import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Home/Logo'

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between px-10 lg:px-16 max-w-7xl mx-auto py-8  ">
        <div className="logo">
           <Logo></Logo>
        </div>
        <div className="menu flex space-x-4 items-center text-slate-100 font-semibold text-[15px]">
            <h2><Link to='/'>Login</Link> </h2>
            <div className="border-r-2 h-3 w-1 opacity-25 "></div>
            <h2><Link to='/'>Register</Link> </h2>
        </div>
    </div>

    </>
  )
}

export default Navbar