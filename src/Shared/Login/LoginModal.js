import React, { Children } from 'react'
import img from '../../img/Group 8.png'
import {AiFillEyeInvisible,AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom';

const LoginModal = ({isvisible,onClose,Children}) => {
    if(!isvisible) return null;
    const handleClose=(e)=>{
        if(e.target.id === "login-wrapper") onclose();
    }

  return (
    <div className='fixed inset-0 items-center bg-black bg-opacity-20 backdrop-blur-sm flex justify-center mx-auto duration-500'>

    <div className="border relative">
    <div onClick={handleClose} className="w-[450px] bg-[#5C38EF] m-3 p-3" id='login-wrapper'>

        {/* ........close btn............ */}
        <div className="flex justify-end">
         <button className='text-white font-bold text-2xl pl-4' onClick={()=>onClose()}><AiOutlineClose></AiOutlineClose></button>
        </div>
        <div className="px-6">
     <h1 className='text-center text-xl text-gray-100 font-bold my-4'>LOGIN</h1>

   <form >
      {/* ..............input field for email........... */}

      <div className=" border-b-[1px] border-gray-600 py-3 px-1 mb-5">
     <input type="email" placeholder='Email Address' className='bg-transparent border-none focus:outline-none placeholder-gray-400 text-[15px] text-white font-bold' />
     </div>
     {/* ..............input field for password........... */}

     <div className=" border-b-[1px] border-gray-600 pb-3 px-1 mb-5 flex justify-between">
     <input type="password" placeholder='Password' className='bg-transparent border-none focus:outline-none placeholder-gray-400 text-[15px] text-white font-bold' />
     <button className='text-gray-300'><AiFillEyeInvisible></AiFillEyeInvisible></button>
     </div>

     {/* ..............input field for checkbox........... */}
     <div className="">
        <div className="flex space-x-3 items-center">
           <div className="w-4 h-4 bg-[#5C38EF] z-10  relative">
           <input className='z-0 text-3xl  text-[#5C38EF] absolute w-full h-full' type="checkbox" name="" id="" />
           </div>
            <h2 className='text-gray-50 font-bold'>Stay Logged in</h2>
        </div>
     </div>

     {/* ..............input field for submit........... */}

        <div className="mt-8 mb-5">
            <input type="submit" value="Enter" placeholder='Enter' className='py-[10px] border border-gray-300 bg-[#261375] cursor-pointer hover:bg-transparent duration-200 focus:outline-none w-full text-[#FFAC03] font-semibold  text-[18px]' />
        </div>

   </form>
        <h2 className='font-semibold text-gray-100 mb-16'>Don't Have an Account? <Link className='underline' to='/'>Register</Link> </h2>
   
        </div>
    </div>
    {/* <div className="absolute top-[2rem] mx-auto">
        <img src={img} alt="" />
    </div> */}
    </div>

    </div>
  )
}

export default LoginModal