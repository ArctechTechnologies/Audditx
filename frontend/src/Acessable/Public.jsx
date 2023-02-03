import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Landingpage from './LandingPage'
import SignupPage from './Signup'

const Public = () => {
  return (
        <>
        <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
        </>
  )
}

export default Public