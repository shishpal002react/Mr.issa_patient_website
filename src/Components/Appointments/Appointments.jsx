// Appointments.js
import React, { useEffect, useState } from "react";
import AppointmentsCard from "../Cards/AppointmentsCard";
import MedicationsCard from "../MedicationsCard/MedicationsCard";
import "./Appointments.css";
import cards from "../../img/card1.png";
import Medications from "../../img/Medications.png";
import upload from "../../img/upload.png";
import {
  appointment_Upcoming,
  appointment_Past,
} from "../../Api_Collection/Api";

const Appointments = () => {
  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
  const [appoinmentPast, setAppoinmentPast] = useState("");

  useEffect(() => {
    appointment_Upcoming(setAppoinmentUpcoming);
    appointment_Past(setAppoinmentPast);
  }, []);

  return (
    <div className="appointmentcontainer">
      <div className="appointmentcontent">
        <p>Upcoming Appointments</p>
        <p>VIEW ALL</p>
      </div>
      <div className="appointmentCard">
        {appoinmentUpcoming?.data?.map((appointment, index) => (
          <AppointmentsCard
            key={index}
            imageUrl={appointment?.imageUrl}
            date={new Date(appointment?.date).toLocaleDateString()}
            slot={appointment?.slot}
            location={appointment?.location}
          />
        ))}
      </div>
      <div className="appointmentcontent">
        <p>Ongoing Medications</p>
        <p>VIEW ALL</p>
      </div>
      <div className="appointmentCard">
        {appoinmentPast?.data?.map((appointment, index) => (
          <MedicationsCard
            key={index}
            imageUrl={appointment?.imageUrl}
            dose={appointment?.dose}
            startfrom={appointment?.startfrom}
            duration={appointment?.duration}
          />
        ))}
      </div>
      <div className="appointmentcontent">
        <p>Upload Medication Script</p>
      </div>
      <div style={{ width: "249px", height: "128px" }}>
        <img src={upload} alt="" />
      </div>
    </div>
  );
};

export default Appointments;
