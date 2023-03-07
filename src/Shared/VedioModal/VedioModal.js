import React, { Children } from 'react'

const VedioModal = ({isvisible,onClose,Children}) => {
    if(!isvisible) return null;
    const handleClose=(e)=>{
        if(e.target.id === "login-wrapper") onclose();
    }

  return (
    <div className='fixed inset-0 items-center bg-black bg-opacity-20 backdrop-blur-sm flex justify-center mx-auto'>

    <div className="border">
    <div onClick={handleClose} className="w-[500px] bg-[#5C38EF] m-3 p-3" id='login-wrapper'>
        <div className="flex justify-end">
         <button onClick={()=>onClose()}>X</button>
        </div>
        <div className="">
    <h1>Vedio</h1>
    <input type="text" />
        </div>
    </div>
    </div>

    </div>
  )
}

export default VedioModal