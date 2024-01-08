// Appointments.js
import React from 'react';
import AppointmentsCard from '../Cards/AppointmentsCard'
import MedicationsCard from '../MedicationsCard/MedicationsCard';
import './Appointments.css';
import cards from '../../img/card1.png'
import Medications from '../../img/Medications.png'
import upload from '../../img/upload.png'

const Appointments = () => {
  const data = [
    {
      imageUrl: cards,
      date: "DD/MM/YYYY",
      slot: "HH:MM AM ",
      location: "CENTRE 1",
    },
    {
      imageUrl: cards,
      date: "DD/MM/YYYY",
      slot: "HH:MM AM ",
      location: "CENTRE 1",
    },
    {
      imageUrl: cards,
      date: "DD/MM/YYYY",
      slot: "HH:MM AM ",
      location: "CENTRE 1",
    },
  ];
  const data1 = [
    {
      imageUrl: Medications,
      dose: "500 mg",
      startfrom: "DD/MM/YYYY",
      duration: " 6 MONTHS",
    },
    {
      imageUrl: Medications,
      dose: "500 mg",
      startfrom: "DD/MM/YYYY",
      duration: " 6 MONTHS",
    },
    {
      imageUrl: Medications,
      dose: "500 mg",
      startfrom: "DD/MM/YYYY",
      duration: " 6 MONTHS",
    },
  ];

  return (
    <div className='appointmentcontainer'>
      <div className='appointmentcontent'>
        <p>Upcoming Appointments</p>
        <p>VIEW ALL</p>
      </div>
      <div  className='appointmentCard'>
        {data.map((appointment, index) => (
          <AppointmentsCard
            key={index}
            imageUrl={appointment.imageUrl}
            date={appointment.date}
            slot={appointment.slot}
            location={appointment.location}
          />
        ))}
      </div>
      <div className='appointmentcontent'>
        <p>Ongoing Medications</p>
        <p>VIEW ALL</p>
      </div>
      <div  className='appointmentCard'>
        {data1.map((appointment, index) => (
          <MedicationsCard
            key={index}
            imageUrl={appointment.imageUrl}
            dose={appointment.dose}
            startfrom={appointment.startfrom}
            duration={appointment.duration}
          />
        ))}
      </div>
      <div className='appointmentcontent'>
        <p>Upload Medication Script</p>
      </div>
      <div style={{width:'249px', height:'128px',}}>
        <img src={upload} alt=""  />
      </div>
    </div>
  );
};

export default Appointments;
