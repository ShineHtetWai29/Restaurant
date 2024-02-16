import React from 'react'

import './Menu.css'
import {Link} from 'react-router-dom'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img7 from '../../img/img7.png'
import img8 from '../../img/img8.png'

import breakfast from '../../img/breakfast.png'
import lunch from '../../img/lunch.png'
import dinner from '../../img/dinner.png'
import icon from '../../img/icon.png'

import noodle from '../../img/noodle.png'
import beefSteak from '../../img//beefSteak.png'
import friedFish from '../../img/friedFish.png'
import salmon from '../../img/salmon.png'

import Mainvisual from '../mainvisualPage/Mainvisual'
const menuList = [
  {
    id: 1,
    src: img1,
    name: "Australia Beef Burger with Tiwan Lettuce",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 2,
    src: img2,
    name: "Delecious Street Sausage",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 3,
    src: img3,
    name: "Japanese Style Noodle Pop",
    detail:"Lorem ipsum dolor sit amet adipisicing.",
  
  },
  {
    id: 4,
    src: img4,
    name: "Indian Style Curry with fruits and pock",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 5,
    src: img5,
    name: "Delecious Street Sausage",
    detail:"Lorem ipsum dolor sit amet adipisicing."

  },
  {
    id: 6,
    src: img6,
    name: "Australia Beef Burger with Tiwan Lettuce",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 7,
    src: img7,
    name: "Indian Style Curry with fruits and pock",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 8,
    src: img8,
    name: "Japanese Style Noodle Pop",
    detail:"Lorem ipsum dolor sit amet adipisicing.",
  },
]
const specialMenu = [
  {
    id: 1,
    src1: noodle,
    src: icon,
    name: "Spaghetti",
    detail:"with vegetables",
    price: "$30",
    Link : "/spaghetti",
  },
  {
    id: 2,
    src1: beefSteak,
    src: icon,
    name: "Beef Steak",
    detail:"with Lettuce",
    price: "$45",
    Link : "/beefSteak",
  },
  {
    id: 3,
    src1: friedFish,
    src: icon,
    name: "Special Fried Sea Bass",
    detail:"with Vegetables",
    price: "$50",
    Link : "/friedFish",
  },
  {
    id: 4,
    src1: salmon,
    src: icon,
    name: "Japanese Style Salmon && Tuna",
    detail:"with Raw Fish",
    price: "$65",
    Link : "/salmon",
  },

]

const MenuLunch = () => {
  return (
    <>
    
      <div className='menu-title'>
        <h3>Food Menu</h3>
        <h2>Most Popular Items</h2>

        <div className="menuSet">
            <Link to="/menu" className='link1'>
            <img src={breakfast} alt="bf" />
            </Link>
            

            <Link to="/menuLunch" className='link2'>
            <img src={lunch} alt="bf" />
            </Link>


            <Link to="/menuDinner" className='link3'>
            <img src={dinner} alt="bf" />
            </Link>

        </div>
        <div className="menus">
          {
            menuList.map((item) =>(
              <div className="item" key={item.id}>
                <div className='item-img'>
                  <img key={item.id} src={item.src} alt="item.alt" />
                </div>
        
                <div className='item-txt'>
                  <h4>Menu Name: {item.name}</h4>
                  <h4>Menu Detail: {item.detail}</h4>
                </div>
              </div>
            ))
          }
        </div>

        <div className='menu-title'>
          <h3>Today Special</h3>
          <h2>Today Special Menu</h2>
        </div>
        <div className="menu-card">
          
        {
            specialMenu.map((item) =>(
              <div className="card" key={item.id}>
              <div className="card-img">
                <img key={item.id} src={item.src1} alt={item.alt} />

                <Link to={`${item.Link}`} className='card-icon'>
                  <img src={item.src} alt={item.alt} />
                </Link>

              </div>

              <div className="card-txt">
                <h4>{item.name}</h4>
                <p>{item.detail}</p>
                <p>{item.price}</p>
              </div>
          </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default MenuLunch
