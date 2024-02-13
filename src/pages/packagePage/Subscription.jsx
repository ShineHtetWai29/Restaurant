import React, { useState } from 'react'
import './Subscription.css'
import SubscriptionCard from './SubscriptionCard'
import Subslidebtn from '../../button/Subslidebtn'
import DeliveryCard from './DeliveryCard'
import ReactCardFlip from 'react-card-flip'


const Subscription = () => {
    const subscriptions = [
        {
            id: 1,
            title: "50$",
            times: "30 Times",
            promotion: "10% Discount",
        },
        {
            id: 2,
            title: "70$",
            times: "45 Times",
            promotion: "15% Discount",
            transform: "active",
            footer: "chgcolor",
        },
        {
            id:3,
            title: "100$",
            times: "60 Times",
            promotion: "20% Discount",
        }
    ]
    const deliveries= [
        {
            id: 1,
            title: "50$",
            times: "15 Days",
            promotion: "10% Discount",
        },
        {
            id: 2,
            title: "70$",
            times: "1 Month",
            promotion: "15% Discount",
            transform: "active",
            footer: "chgcolor",
        },
        {
            id:3,
            title: "100$",
            times: "2 Months",
            promotion: "20% Discount",
        }
    ]
    // const [activeCard,setActiveCard] = useState(false)

    // const handleFlip = () =>{
    //     setActiveCard(!activeCard)
    // }
    const [isFlipped, setIsFlipped] = useState(false)
    function flipCard(){
        setIsFlipped(!isFlipped)
    }
    
  return (
    <div>
        <div className="subscriptiontitle">
            <h2>Subscription Plan</h2>
        </div>
        <div className="subscriptionslidebtn">
            <button onClick={flipCard} style={{border: "none", padding: 0}}>
                <Subslidebtn btnModify="btn-diein" btnText="Dine in" />
                <Subslidebtn btnModify="btn-delivery" btnText="Delivery" />
            </button>
        </div>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            
                <div className="innerwidth innerwidth--subplan">
                    {
                    subscriptions.map((item) => 
                        <SubscriptionCard title={item.title} times={item.times} promotion={item.promotion} subcardclass={item.transform} subfooterclass={item.footer} />
                    )
                    }
                </div>
                <div className="innerwidth innerwidth--subplan" >
                    {
                    deliveries.map((data) => 
                        <DeliveryCard title={data.title} times={data.times} promotion={data.promotion} subcardclass={data.transform} subfooterclass={data.footer} />
                    )
                    }
                </div>
        </ReactCardFlip>
        
        {/* <Subslidebtn btnModify="btn-delivery"btnText="Click" onclick={flipCard}/> */}

        
    </div>
  )
}

export default Subscription