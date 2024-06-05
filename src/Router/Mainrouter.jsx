import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/Userhome'
import Reset from '../pages/resetpassword'
import Otp from '../pages/otp'
import Newpassword from '../pages/passwordchang'
import Success from '../pages/Succespage'
const Mainrouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/newpassword' element={<Newpassword />} />
            <Route path='/succes' element={<Success />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Mainrouter