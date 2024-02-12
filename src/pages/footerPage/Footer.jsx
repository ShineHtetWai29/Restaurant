import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import './Footer.css';
import Button from '../../button/Button';



const Footer = () => {
  return (
    <>
            <div className='Footer'>
        <div className='firstsection'>
            <h2>Contact</h2>
            <span><MdOutlineLocationOn style={{color: "#ebff00", padding: "10px"}} />
                    23 Street,New Yourk,USA
            </span>
            <span>
            <IoIosPhonePortrait style={{color: "#ebff00", padding: "10px"}}/>
                092445455545
            </span>
            <span>
            <MdEmail style={{color: "#ebff00", padding: "10px"}}/>
                restaurant@gmail.com
            </span>
            <div className="contacticon">
                <RiFacebookCircleLine style={{width: "40px", height: "40px"}} />
                <FaInstagram style={{width: "40px", height: "40px"}}/>
                <FiTwitter style={{width: "40px", height: "40px"}}/>
                <TfiYoutube style={{width: "40px", height: "40px"}}/>
            </div>
        </div>
        <div className='secondsection'>
            <h2>Opening</h2>
            <span>Monday-Saturday</span>
            <span>9 Am- 9 Pm</span>
            <span>Sunday</span>
            <span>10 Am- 7 Pm</span>
        </div>
        <div className='thirdsection'>
            <h2>Newsletter</h2>
            <p>Lorem ipsum dolor sit, amet consectetur <br/>
            adipisicing elit. Aliquid, odit?</p>
            <input type="text" placeholder='Your Email '></input>
        </div>
    </div>
    <hr style={{border: "2px solid #fe6630"}}/>
    <p className="copyright">@copyright 2023</p>
    </>

  )
}

export default Footer
