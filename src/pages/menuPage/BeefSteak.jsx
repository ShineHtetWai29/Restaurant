import React from 'react'
import beefSteak from '../../img/beefSteak2.png'
import './BeefSteak.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const BeefSteak = () => {
  return (
    <>
      <div className="spagti">
        <div className="spagti-img">
            <img src={beefSteak} alt="beefStk" />
        </div>
        <div className="spagti-txt">
            <h3>Beef Steak</h3>
            <span className='price'>45$</span>
            <div className="box">
                <span>Choose something</span>
                <span>Total</span> <br />
                <div className="input-box">

                  <input type="radio" id='1pcs' name='pcs'/>
                  <label for="1pcs">1 PCS</label>
                  <label for="1pcs">$ 45</label> <br />
                
                  <input type="radio" id='2pcs' name='pcs'/>
                  <label for="2pcs">2 PCS</label>
                  <label for="2pcs">$ 80</label> <br />
                
                  <input type="radio" id='3pcs' name='pcs'/>
                  <label for="3pcs">3 PCS</label>
                  <label for="3pcs">$ 120</label> <br />

                  <input type="radio" id='4pcs' name='pcs'/>
                  <label for="4pcs">4 PCS</label>
                  <label for="4pcs">$ 155</label>
                  <p className='total'>Amount</p>
     
              </div>
            </div>

            <button type='button' className='buybtn'>Buy</button>

        </div>

      </div>
      
    </>
  )
}

export default BeefSteak

