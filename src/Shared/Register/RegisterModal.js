import React, { Children } from 'react'
import img from '../../img/Group 8 (1).png'
import {AiFillEyeInvisible,AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom';

const RegisterModal = ({isvisible,onClose,Children}) => {
    if(!isvisible) return null;
    const handleClose=(e)=>{
        if(e.target.id === "login-wrapper") onclose();
    }

  return (
    <div className='fixed inset-0 py-20 items-center bg-black bg-opacity-40 flex justify-center mx-auto'>

<div className="border relative min-h-screen ">
    <div onClick={handleClose} className="w-[450px] bg-[#5C38EF] m-3 p-3" id='login-wrapper'>

        {/* ........close btn............ */}
        <div className="flex justify-end pt-6 px-4">
         <button className='text-white font-bold text-2xl ' onClick={()=>onClose()}><AiOutlineClose></AiOutlineClose></button>
        </div>
        <div className="px-6">
     <h1 className='text-center text-xl text-gray-100 font-bold mt-10 mb-4 uppercase'>Register</h1>

   <form >
       {/* ..............input field for name........... */}

       <div className=" border-b-[1px] border-gray-600 py-3 px-1 mb-5">
     <input type="text" placeholder='Your Name' className='bg-transparent border-none focus:outline-none placeholder-gray-400 text-[15px] text-white font-bold' />
     </div>
      {/* ..............input field for email........... */}

      <div className=" border-b-[1px] border-gray-600 py-3 px-1 mb-5">
     <input type="email" placeholder='Email Address' className='bg-transparent border-none focus:outline-none placeholder-gray-400 text-[15px] focus:bg-transparent text-white font-bold' />
     </div>
     {/* ..............input field for password........... */}

     <div className=" border-b-[1px] border-gray-600 pb-3 px-1 mb-5 flex justify-between">
     <input type="password" placeholder='Set Password' className='bg-transparent border-none focus:outline-none placeholder-gray-400 text-[15px] text-white font-bold' />
     <button className='text-gray-300'><AiFillEyeInvisible></AiFillEyeInvisible></button>
     </div>
     {/* ..............input field for set password........... */}

     <div className=" border-b-[1px] border-gray-600 pb-3 px-1 mb-5 flex justify-between">
     <input type="password" placeholder='Confirm Password' className='bg-transparent border-none focus:outline-none placeholder-gray-400 text-[15px] text-white font-bold' />
     <button className='text-gray-300'><AiFillEyeInvisible></AiFillEyeInvisible></button>
     </div>

      {/* ..............input field for radio........... */}
      <div className="mb-2">
  <div className='flex items-center space-x-2'>
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative text-gray-100 float-left mt-0.5 mr-1 -ml-[1.5rem] h-4 w-4 "
        type="radio"/>
      <label
        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-gray-100 font-bold">
        Male
      </label>
    </div>
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-4 w-4"
        type="radio"
        checked />
      <label
        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-gray-100 font-bold"
       >
        Female
      </label>
    </div>

</div>
     </div>

     {/* ..............input field for checkbox........... */}
     <div className="">
        <div className="flex space-x-3 items-start">
           <div className="w-4 h-4 bg-[#5C38EF] z-10 mt-1 relative">
           <input className='z-0 text-3xl  text-[#5C38EF] absolute w-full h-full' type="checkbox" name="" id="" />
           </div>
            <h2 className='text-gray-50 font-medium'>I agree with the conditions on the protection of personal data</h2>
        </div>
     </div>

     {/* ..............input field for submit........... */}

        <div className="mt-6 mb-5">
            <input type="submit" value="Enter" placeholder='Enter' className='py-[10px] border border-gray-300 bg-[#261375] cursor-pointer hover:bg-transparent duration-200 focus:outline-none w-full text-[#FFAC03] font-semibold  text-[18px]' />
        </div>

   </form>
        <h2 className='font-semibold text-gray-100 mb-8'>Already Have an Account? <Link className='underline' to='/'>Login</Link> </h2>
   
        </div>
    </div>
    <div className="absolute top-[-3rem] flex justify-center w-full ">
        <img src={img} alt="" />
    </div>
    </div>

    </div>
  )
}

export default RegisterModal