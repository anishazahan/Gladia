import React from 'react'
import { Link } from 'react-router-dom'
import LoginModal from '../Shared/Login/LoginModal'
import Logo from './Home/Logo'


const Navbar = ({showModal,setShowModal,showRegisterModal,setShowRegisterModal}) => {
  // console.log(showModal);
  return (
    <>
    <div className="flex justify-between px-10 lg:px-16 max-w-7xl mx-auto py-8  ">
        <div className="logo">
           <Logo></Logo>
        </div>
        <div className="menu flex space-x-4 items-center text-slate-100 font-semibold text-[15px]">
            <h2><button onClick={()=>setShowModal(true)}>Login</button> </h2>
            <div className="border-r-2 h-3 w-1 opacity-25 "></div>
            <h2><Link  onClick={()=>setShowRegisterModal(true)} to='/'>Register</Link> </h2>
        </div>
    </div>
    {/* <LoginModal></LoginModal> */}

    </>
  )
}

export default Navbar