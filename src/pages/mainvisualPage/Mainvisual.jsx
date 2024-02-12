import React from 'react'
import './Mainvisual.css' 
import { Link } from 'react-router-dom'
// import Menu from '../menuPage/Menu'
// import bg from '../../img/bg.png',
const Mainvisual = () => {
  return (
    <>
      <div className='mainvisual'>
        <div className="l-wrap-inner">
          <div className="mainvisual_txt">
            <h1>Lorem ipsum dolor, sit amet conse ctetur adipis icing.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est provident ea veritatis veniam praesentium recusandae, doloribus voluptate hic sapiente, neque nam eligendi quaerat natus repellat fugit rerum. Consequuntur, eligendi.
            </p>
            <Link className='link'>See More</Link>
          </div>

        </div>
    </div>

    </>
    
  )

}

export default Mainvisual