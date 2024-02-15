import React from 'react'
import './Card.css'
const Card = (props) => {
    const {id, src, name, detail} = props;
  return (
 
            <div className="item">
                <div className='item-img'>
                    <img key={id} src={src} alt="item.alt" />
                </div>

                <div className='item-txt'>
                    <h4>Menu Name: {name}</h4>
                    <h4>Menu Detail: {detail}</h4>
                </div> 
            </div>
        
  )
}

export default Card
