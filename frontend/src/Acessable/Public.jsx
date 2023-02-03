import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Landingpage from './LandingPage'
import Login from './Login'
import SignupPage from './Signup'

const Public = () => {
  return (
        <>
        <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/login'  element={<Login/>} />
        </Routes>
        </>
  )
}

export default Public