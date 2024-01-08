// Card.js
import React from 'react';
import './AppointmentsCard.css';
import { CiClock2, CiLocationOn, CiCalendar   } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { LiaIdCardSolid } from "react-icons/lia";



const HistoryCard = ({ imageUrl, from, visit,  referenceId }) => {
  return (
    <div className="card">
    <div className='cardscontent'>
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h6>CENTRE 1</h6>
        <p><CiCalendar  style={{color:'#1E1E1E99', fontSize:'20px'}}/>FROM: {from} <span style={{color:'#1A9FB2'}}>( 6 DAYS )</span></p>
        <p><SlLocationPin   style={{color:'#1E1E1E99', fontSize:'20px'}}/>VISIT: {visit}</p>
        <p><LiaIdCardSolid  style={{color:'#1E1E1E99', fontSize:'20px'}} />REFERENCE ID: {referenceId}</p>
      </div> 
      </div>
    </div>
  );
};

export default HistoryCard;
