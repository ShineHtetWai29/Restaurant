import React, { useState } from 'react'
import './Subslidebtn.css'
import ReactCardFlip from 'react-card-flip'
import Subscription from '../pages/packagePage/Subscription'

const Subslidebtn = ({btnModify,btnText}) => {
  
  return (
    <>
        <button className={`btn ${btnModify}`} >{btnText}</button>
    </>
    
  )
}

export default Subslidebtn