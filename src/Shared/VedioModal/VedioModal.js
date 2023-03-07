import React, { Children } from 'react'

const VedioModal = ({isvisible,onClose,Children}) => {
    if(!isvisible) return null;
    const handleClose=(e)=>{
        if(e.target.id === "login-wrapper") onclose();
    }

  return (
    <div className='fixed inset-0 items-center bg-black bg-opacity-30 flex justify-center mx-auto'>

    <div className="border">
    <div onClick={handleClose} className=" w-full md:w-[320px] bg-transparent m-3 p-3" id='login-wrapper'>
        <div className="flex justify-end">
         <button className='text-white' onClick={()=>onClose()}>X</button>
        </div>
        <div className="w-full mx-auto">
    <h1 className='font-bold text-white'>Vedio</h1>
    <iframe width="full" height="315" src="https://www.youtube.com/embed/G9iV2fFkE7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </div>

    </div>
  )
}

export default VedioModal