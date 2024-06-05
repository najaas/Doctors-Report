import React from 'react'
import Form from '../components/Loginmain'
import { useNavigate } from 'react-router-dom'

const otp = () => {
    const navigate =useNavigate();

    const newpassword= ()=>{
        navigate('/newpassword')
    }
    const logout= ()=>{
        navigate('/login')
    }
  return (
    <div className='w-full h-screen flex bg-[#E4FBFB] '>
        <div className='flex w-[50%] h-full items-center justify-center  '>

        <Form 
                center={
                    <div className='bg-[#00D3EB] rounded-xl w-10/12 h-[250px] flex flex-col justify-evenly items-center'>
                    <div className=' w-[280px]'>
                    <h1 className='text-sm'>An OTP has been sent to your registered email address</h1>
                    </div>
                    <div className='flex flex-col w-10/12'>
                     <label htmlFor="">Enter OTP received on your email</label>
                    <input type="text" placeholder='Enter OTP' />
                    </div>
                   <h1>Resend OTP</h1>
                    <button onClick={newpassword} className=' text-white rounded-lg w-[100px] h-[30px] bg-blue-800 '>SUBMIT</button>
                 </div>
                }
                logout={
                    <h1 onClick={logout}>Back to Login</h1>
                    }
                    last={
                        <h1 className='text-blue-500 text-xl'>(+91) 9288008801</h1>
                    }
        />
        </div>
    </div>
  )
}

export default otp