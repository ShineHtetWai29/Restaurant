import { useState } from 'react'
import './App.css'
import Mainvisual from './pages/mainvisualPage/Mainvisual'
import Login from './pages/loginPage/Login'
import Signup from './pages/signupPage/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    
    
      {/* <Mainvisual/> */}
    </>
  )
}

export default App
