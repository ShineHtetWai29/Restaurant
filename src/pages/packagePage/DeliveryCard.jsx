import React from 'react'
import './DeliveryCard.css'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from '../../button/Button';


const DeliveryCard = (props) => {
    const {title,times,promotion,subcardclass,subfooterclass} = props;
  return (
    <div className={`subcard bgdeli ${subcardclass}`} >
            
                <div className="planfee">
                    <h3>{title}</h3>
                </div>
                <div className="plandata">
                    <div><IoCheckmarkCircleOutline /><span>{times}</span></div>
                    <div><IoCheckmarkCircleOutline /><span>{promotion}</span></div>
                </div>
                <div className="planbtn">
                    <Button btnText="Enroll Now" btnModify="enrollbtn" />
                </div>
                <div className={`deliplanfooter ${subfooterclass}`}></div>
            
        </div>
  )
}

export default DeliveryCard