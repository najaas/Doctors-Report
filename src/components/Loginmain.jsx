import React from 'react'
import Logo from '../assets/logo.png'
import Plus from '../assets/plus.png'

const Login = ({center,number,last,report,logout}) => {
  return (
    <div>


        <div className= 'w-[400px] h-4/6 bg-white border-2 flex flex-col justify-evenly items-center rounded-3xl'>
<div className='w-[350px]'>
                <div className=' bg-cover w-[40px] h-[40px]'style={{backgroundImage: `url(${Plus})`}}></div>
                </div>
          <div className=' bg-cover w-[200px] h-[70px]' style={{backgroundImage: `url(${Logo})`}}></div>
              <div className='w-full flex justify-end'>
                <div className=' bg-cover w-[60px] h-[60px]'style={{backgroundImage: `url(${Plus})`}}></div>
                </div>
              {report}
              {center}
              {logout}
<div className='w-full flex  '>
<div className='w-[40px]'>

    <div className=' bg-cover w-[80px] h-[90px]' style={{backgroundImage: `url(${Plus})`}}></div>
</div>
<div className='flex items-center justify-center w-[320px]'>
      {number}
</div>

</div>
        <h1>{last}</h1>
        </div>
    </div>
  )
}

export default Login