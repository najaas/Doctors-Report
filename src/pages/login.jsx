import React from 'react'
import Login from '../components/Loginmain'
import Image from '../assets/login.jpg'
const login = () => {
  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>

        <div className= ' bg-cover w-full h-screen flex justify-center items-center' style={{backgroundImage: `url(${Image})`}}>
        <Login report={
          <h1 className='text-blue-500 text-xl  h-[50px]'>Report Downlad Portal</h1>
        }
        center={
          <div className='bg-blue-500 rounded-xl w-10/12 h-[250px] flex flex-col justify-evenly items-center'>
               <h1>Login</h1>
               <div className='flex flex-col w-10/12'>
                <label htmlFor="">Username</label>
               <input type="text" placeholder='Enter email id' />
               <label htmlFor="">Password</label>
               <input type="text" placeholder='Password' />
               </div>
              
               <button className=' text-white rounded-lg w-[100px] h-[30px] bg-blue-800 '>SUBMIT</button>
                <h1>Reset Password</h1>
            </div>
        }
        number={
          <h1 className='text-blue-500 text-xl'>(+91) 9288008801</h1>
        }
        last={
          <div className='w-full h-[40px] flex'>
          <h1 className='text-xs'>I hereby agree and accept the </h1>
         <h1 className='text-xs text-blue-500'>Terms of service </h1>
         <h1 className='text-xs'> and</h1>
         <h1 className='text-xs text-blue-500'>Privacy policy</h1>
          </div>

        }
         />
        </div>
        </div>
    </div>
  )
}

export default login