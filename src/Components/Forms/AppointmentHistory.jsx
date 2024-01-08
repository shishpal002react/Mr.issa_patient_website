import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import HistoryCard from '../Cards/HistoryCards'
import cards from '../../img/card1.png'

const AppointmentHistory = () => {
  const data = [
    {
      imageUrl: cards,
      from: "6 JUNE - 12 JUNE",
      visit: "MEDICATION",
      referenceId: "CEN1TB9054",
    },
    {
      imageUrl: cards,
      from: "6 JUNE - 12 JUNE",
      visit: "MEDICATION",
      referenceId: "CEN1TB9054",
    },
    {
      imageUrl: cards,
      from: "6 JUNE - 12 JUNE",
      visit: "MEDICATION",
      referenceId: "CEN1TB9054",
    },
    {
      imageUrl: cards,
      from: "6 JUNE - 12 JUNE",
      visit: "MEDICATION",
      referenceId: "CEN1TB9054",
    },


  ];
  const navigate = useNavigate()
  return (

    <div className='booking-container'>
      <div className='backbutton'>
        <IoArrowBackCircle style={{ color: '#1A9FB2', width: '40px', height: '40px', cursor: 'pointer' }} onClick={() => navigate('/appointment_scheduling')} />
      </div>
      <div className='form-container'>
        <div className="formheading1">
          <div className='formsheading2'>
            <h1>MY APPOINTMENTS</h1>
          </div>
        </div>
        <div className='SchedulingCard'>
          <div className='todayappointments'>
            <p>UPCOMING</p>
            {data.map((history, index) => (
              <HistoryCard
                key={index}
                imageUrl={history.imageUrl}
                from={history.from}
                visit={history.visit}
                referenceId={history.referenceId}
              />
            ))}
          </div>
          <div className='tomorrowappointments'>
            <p>PAST</p>
            {data.map((history, index) => (
              <HistoryCard
                key={index}
                imageUrl={history.imageUrl}
                from={history.from}
                visit={history.visit}
                referenceId={history.referenceId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default AppointmentHistory