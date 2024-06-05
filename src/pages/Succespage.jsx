import React from 'react'
import Image from '../assets/photo.png'
import Form from '../components/Loginmain'
import { useNavigate } from 'react-router-dom';

const Succespage = () => {
    const navigate = useNavigate();

    const login = () => {
      navigate('/login');
    }
  return (
    <div className="w-full h-screen flex bg-[#E4FBFB]">
    <div className="flex w-[50%] h-full items-center justify-center">
      <Form
        center={
          <div className="bg-white rounded-xl w-10/12 h-[300px]  justify-evenly items-center">
            <div className='bg-[#9EFFB4] rounded-xl w-full h-[80px] flex flex-col'>
                <h1 className='text-blue-500'>Password reset successful !</h1>
                <h3 className='text-sm text-blue-500'>Password reset link has been sent to your registered email address</h3>
            </div>
            <div className='w-full h-[100px] flex items-center'>
            <button onClick={login} className='bg-[#1F6CAB] w-[100px] h-[40px]  rounded-lg'>LOGIN NOW</button>
            </div>
          </div>
        }
        last={<h1 className="text-blue-500 text-xl">(+91) 9288008801</h1>}
      />
    
    </div>
    <div className="w-[50%] h-full flex">
      <div
        className="w-full h-full rounded-tl-lg rounded-bl-lg overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
    </div>
  </div>
  )
}

export default Succespage