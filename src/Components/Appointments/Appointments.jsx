// Appointments.js
import React, { useEffect, useState } from "react";
import AppointmentsCard from "../Cards/AppointmentsCard";
import MedicationsCard from "../MedicationsCard/MedicationsCard";
import "./Appointments.css";
import cards from "../../img/card1.png";
import Medications from "../../img/Medications.png";
import upload from "../../img/upload.png";
import nurse1 from "../../img/nurse (1).png";
import {
  appointment_Upcoming,
  appointment_get,medication_get,user_detail,getAllPatientMedication
} from "../../Api_Collection/Api";

const Appointments = () => {
  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
  const [appoinmentPast, setAppoinmentPast] = useState("");
  const [patientId,setPatientId]=useState("")
  const [medication,setMedication]=useState("")
  const [script,setScript]=useState("")

  // useEffect(()=>{
  //   medication_get(setMedication);
  // },[patientId])


  useEffect(() => {
    user_detail(setPatientId);
    appointment_Upcoming(setAppoinmentUpcoming);
    appointment_get(setAppoinmentPast);
    getAllPatientMedication(setScript);
    medication_get(setMedication);
  }, []);
  const downloadPdf = async (blobUrl) => {

      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = 'medication.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
  };

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
          imageUrl={appointment?.adminId?.profilePic?appointment?.adminId?.profilePic:nurse1}
          date={new Date(appointment?.date).toLocaleDateString()}
          slot={appointment?.time}
          location={appointment?.adminId?.address}
          />
        ))}
      </div>
      <div className="appointmentcontent">
        <p>Ongoing Medications</p>
        <p>VIEW ALL</p>
      </div>
      <div className="appointmentCard">
        {medication?.data?.map((appointment, index) => (
          <MedicationsCard
            key={index}
            name={appointment?.name}
            imageUrl={appointment?.adminId?.profilePic?appointment?.adminId?.profilePic:nurse1}
            dose={appointment?.timeStatus?.[0]?.time}
            startfrom={new Date(appointment?.date).toLocaleDateString()}
            duration={appointment?.duration}
          />
        ))}
      </div>
      <div className="appointmentcontent">
        <p>Download Medication Script</p>
      </div>
            
      {
        script?.data?.slice(1,5)?.map((item,i)=>(
          <div key={i} style={{ width: "249px", height: "128px" }}>
          <img src={upload} alt="" onClick={()=>downloadPdf(item?.document)} style={{cursor:"pointer"}} />
        </div>
        ))
      }
   
     
    </div>
  );
};

export default Appointments;
