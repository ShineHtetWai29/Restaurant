// import { useState } from 'react'
import './App.css'
import Mainvisual from './pages/mainvisualPage/Mainvisual'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import SeeMore from './pages/menuPage/SeeMore'
import MenuLunch from './pages/menuPage/MenuLunch'
import MenuDinner from './pages/menuPage/MenuDinner'
import Spaghetti from './pages/menuPage/Spaghetti'
import BeefSteak from './pages/menuPage/BeefSteak'
import FriedFish from './pages/menuPage/FriedFish'
import Salmon from './pages/menuPage/Salmon'

function App() { 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/seeMore' element={<SeeMore/>} />
        <Route path='/menuLunch' element={<MenuLunch/>} />
        <Route path='/menuDinner' element={<MenuDinner/>} />
        <Route path='/spaghetti' element={<Spaghetti/>} />
        <Route path='/beefSteak' element={<BeefSteak/>} />
        <Route path='/friedFish' element={<FriedFish/>} />
        <Route path='/salmon' element={<Salmon/>} />
      </Routes>
    </BrowserRouter>
    {/* <Home/> */}
      {/* <Mainvisual/>  */}
    </>
  )
}

export default App 
