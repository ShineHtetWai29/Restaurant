import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './Nav.css'
import Button from '../../button/Button';
import logo from "../../img/Logo.png"
import Package from '../packagePage/Package';
import Menu from '../menuPage/Menu';
import Signup from '../signupPage/Signup';


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
                <Link to="/menu">About</Link>
                <Link to="/pricing">Pricing</Link>
                <div className="btnnav">
                    <Button  btnModify="btn-login" btnText="Login" linkText="/login" />
                    <Button btnModify="btn-signup" btnText="Signup" linkText='/signup'/>
                </div>
            </div>
        </nav>     

            
            <Routes>
                <Route path="/"/>
                {/* <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Menu/>}/> */}
                <Route path="/pricing" element={<Package/>}/>
                {/* <Route path="/login" element={<Login/>}/> */}
                <Route path="/signup" element={<Signup/>}/>

            </Routes>
        
    </BrowserRouter>
  )
}

export default Nav

