import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from "../../button/Button";
import "./SubscriptionCard.css";

const SubscriptionCard = (props) => {
  const {
    title,
    times,
    promotion,
    subcardclass,
    subfooterclass,
    clickHandler,
  } = props;

  return (
    <div className={`subcard bg   ${subcardclass}`}>
      <div className="planfee">
        <h3>{title}</h3>
      </div>
      <div className="plandata">
        <div>
          <IoCheckmarkCircleOutline />
          <span>{times}</span>
        </div>
        <div>
          <IoCheckmarkCircleOutline />
          <span>{promotion}</span>
        </div>
      </div>
      <div className="planbtn">
        <Button btnText="Enroll Now" btnModify="enrollbtn" />
      </div>
      <div className={`planfooter ${subfooterclass}`}></div>
    </div>
  );
};

export default SubscriptionCard;
