import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './Nav.css'
import Button from '../../button/Button';
import logo from "../../img/Logo.png"
import Package from '../packagePage/Package';
import Menu from '../menuPage/Menu';
import Signup from '../signupPage/Signup';
import Login from '../loginPage/Login';
import About from '../aboutPage/About';
// import Mainvisual from './pages/mainvisualPage/Mainvisual'
// import Home from './pages/home/Home'
import SeeMore from '../menuPage/SeeMore'
import MenuLunch from '../menuPage/MenuLunch'
import MenuDinner from '../menuPage/MenuDinner'
import Spaghetti from '../menuPage/Spaghetti'
import BeefSteak from '../menuPage/BeefSteak'
import FriedFish from '../menuPage/FriedFish'
import Salmon from '../menuPage/Salmon'
import Home from '../home/Home';


const Nav = () => {
    
  return (
    <BrowserRouter>
        <nav className="navbar">
            <div className="navleft">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navright">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/pricing">Pricing</Link>
                <div className="btnnav">
                    <Button  btnModify="btn-login" btnText="Login" linkText="/login" />
                    <Button btnModify="btn-signup" btnText="Signup" linkText='/signup'/>
                </div>
            </div>
        </nav>     

            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/pricing" element={<Package/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                
            
        <Route path='/seeMore' element={<SeeMore/>} />
        <Route path='/menuLunch' element={<MenuLunch/>} />
        <Route path='/menuDinner' element={<MenuDinner/>} />
        <Route path='/spaghetti' element={<Spaghetti/>} />
        <Route path='/beefSteak' element={<BeefSteak/>} />
        <Route path='/friedFish' element={<FriedFish/>} />
        <Route path='/salmon' element={<Salmon/>} />
    </Routes>
        
    </BrowserRouter>
  )
}

export default Nav

