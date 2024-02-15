import React from 'react'
import spagti from '../../img/Salmon2.png'
import './Salmon.css'
const Salmon = () => {
  return (
    <>
      <div className="spagti">
        <div className="spagti-img">
            <img src={spagti} alt="spagti" />
        </div>
        <div className="spagti-txt">
            <h3>Japanese Style Tuna& Salmon</h3>
            <span className='price'>65$</span>
            <div className="box">
                <span>Choose something</span>
                <span>Total</span> <br />
                <div className="input-box"> 

                  <input type="radio" id='1pcs' name='pcs'/>
                  <label for="1pcs">1 PCS</label>
                  <label for="1pcs">$ 65</label> <br />
                
                  <input type="radio" id='2pcs' name='pcs'/>
                  <label for="2pcs">2 PCS</label>
                  <label for="2pcs">$ 120</label> <br />
                
                  <input type="radio" id='3pcs' name='pcs'/>
                  <label for="3pcs">3 PCS</label>
                  <label for="3pcs">$ 180</label> <br />

                  <input type="radio" id='4pcs' name='pcs'/>
                  <label for="4pcs">4 PCS</label>
                  <label for="4pcs">$ 230</label>
                  <p className='amount'>Amount</p>
     
              </div>
            </div>

            <button type='button' className='buybtn'>Buy</button>

        </div>

      </div>
    </>
  )
}

export default Salmon