import React from 'react'
import './Button.css'   
import { useNavigate } from 'react-router'
import Signup from '../pages/signupPage/Signup';


const Button = ({btnModify,btnText,linkText,clickHandler}) => {
    const navigate = useNavigate();

    

    const linkclick = () => {
      navigate(linkText)  
    }
    
  return (
    <>
        <button className={`btn ${btnModify}`} onClick={linkclick}>{btnText}</button>
    </>
  )
}

export default Button