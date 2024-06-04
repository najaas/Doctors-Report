import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
const Userrouter = () => {
  return (
    <div>
        <Routes>
            <Route path='myr' element={<Login />} />
        </Routes>
    </div>
  )
}

export default Userrouter