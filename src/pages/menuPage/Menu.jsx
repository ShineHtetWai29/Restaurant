
import React from 'react'

import './Menu.css'
import {Link} from 'react-router-dom'
import breakfast from '../../img/breakfast.png'
import lunch from '../../img/lunch.png'
import dinner from '../../img/dinner.png'
import noodlePop from '../../img/noodlePop.png'
import burger from '../../img/burger.png'
import sausage from '../../img/sausage.png'
import slad from '../../img/slad.png'
import icon from '../../img/icon.png'

import noodle from '../../img/noodle.png'
import beefSteak from '../../img//beefSteak.png'
import friedFish from '../../img/friedFish.png'
import salmon from '../../img/salmon.png'




const menuList = [
  {
    id: 1,
    src: burger,
    name: "Australia Beef Burger with Tiwan Lettuce",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 2,
    src: sausage,
    name: "Delecious Street Sausage",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 3,
    src: noodlePop,
    name: "Japanese Style Noodle Pop",
    detail:"Lorem ipsum dolor sit amet adipisicing.",
  
  },
  {
    id: 4,
    src: slad,
    name: "Indian Style Curry with fruits and pock",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 5,
    src: sausage,
    name: "Delecious Street Sausage",
    detail:"Lorem ipsum dolor sit amet adipisicing."

  },
  {
    id: 6,
    src: burger,
    name: "Australia Beef Burger with Tiwan Lettuce",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 7,
    src: slad,
    name: "Indian Style Curry with fruits and pock",
    detail:"Lorem ipsum dolor sit amet adipisicing."
  },
  {
    id: 8,
    src: noodlePop,
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
const Menu = () => {
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
              <div className="menucard" key={item.id}>
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
          {/* <div className="card">
              <div className="card-img">
                <img src={noodle} alt={noodle} />

                <Link to={`/spaghetti`} className='card-icon'>
                  <img src={icon} alt={icon.alt} />
                </Link>

              </div>

              <div className="card-txt">
                <h4>Spaghetti</h4>
                <p>with vegetables</p>
                <p>$ 30</p>
              </div>
          </div>
          <div className="card">
              <div className="card-img">
                <img src={beefSteak} alt={beefSteak} />

                <Link to={`/beefSteak`} className='card-icon'>
                  <img src={icon} alt={icon.alt} />
                </Link>

              </div>

              <div className="card-txt">
                <h4>Beef Steak</h4>
                <p>with Lettcue</p>
                <p>$ 45</p>
              </div>
          </div>
          <div className="card">
              <div className="card-img">
                <img src={friedFish} alt={friedFish} />

                <Link to={`/friedFish`} className='card-icon'>
                  <img src={icon} alt={icon.alt} />
                </Link>

              </div>

              <div className="card-txt">
                <h4>Fried Salmon</h4>
                <p>with vegetables</p>
                <p>$ 50</p>
              </div>
          </div>
          <div className="card">
              <div className="card-img">
                <img src={salmon} alt={salmon} />

                <Link to={`/salmon`} className='card-icon'>
                  <img src={icon} alt={icon.alt} />
                </Link>

              </div>

              <div className="card-txt">
                <h4>Japanese Style Salmon & Tuna</h4>
                <p>with Raw Sea Food</p>
                <p>$ 65</p>
              </div>
          </div> */}

        </div>
      </div>

    </>
  )
}

export default Menu
