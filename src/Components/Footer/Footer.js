import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import logoText from '../../img/Path 17.png'
import '../Home/topBanner.css'

const Footer = () => {
  return (
    <>
    <div className="footer-bg py-3">
            <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row px-5 md:px-10 lg:px-16">
            <div className='flex space-x-1 items-center'>
                <img className='w-[60px] h-[50px]' src={logo} alt="" />
                <img className='w-[50px] h-[20px] ' src={logoText} alt="" />
           </div>
                <div className="flex items-center space-x-4">
                    <Link className='text-slate-200 font-medium text-[17px]' to='/'> Blog</Link>
                    <Link className='text-slate-200 font-medium text-[17px]' to='/'> Protection of personal data</Link>
                    <Link className='text-slate-200 font-medium text-[17px]' to='/'> Rules</Link>
                </div>
            </div>
    </div>
    
    </>
  )
}

export default Footer