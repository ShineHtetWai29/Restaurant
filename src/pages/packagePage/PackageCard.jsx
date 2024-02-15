import React from 'react'
import  './PackageCard.css'
import dish from "../../img/Serving dish.png"
import juice from "../../img/Orange juice.png"
import cake from "../../img/Gelato.png"

const PackageCard = (props) => {
    const {title,image,maindish,drink,dessert,sidedish,food,colddrink,des,sidefood} = props;
  return (
    <div className='card'>  
            <div className={`card-title ${image}`}>
                <h3>{title}</h3>
            </div>
            <div className="card-body">
              <div>
              <div className='card-body__data'><img src={food} alt={maindish} /><span>{maindish}</span></div><br />
                <div className='card-body__data'><img src={colddrink} alt={drink} /><span>{drink}</span></div><br />
                <div className='card-body__data'><img src={des} alt={dessert} /><span>{dessert}</span></div><br />
                <div className='card-body__data'><img src={sidefood} alt={sidedish} /><span>{sidedish}</span></div><br />
              </div>

                <div className="card-body__para">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita odio quas, impedit nam excepturi doloribus aperiam totam ad molestias</p>
                </div>
                    
                
                
            </div>
    </div>
  )
}

export default PackageCard