import React,{useEffect, useState} from 'react'
import './Vital.css'
import clock from '../../Components/VitalNew/Vitals/clock.png'
import hand from '../../Components/VitalNew/Vitals/hand.png'
import heart from '../../Components/VitalNew/Vitals/heart.png'
import hieght from '../../Components/VitalNew/Vitals/hieght.png'
import last from '../../Components/VitalNew/Vitals/last.png'
import lungs from '../../Components/VitalNew/Vitals/lungs.png'
import o2 from '../../Components/VitalNew/Vitals/o2.png'
import thermameter from '../../Components/VitalNew/Vitals/thermameter.png'
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom'
import {user_detail, vital_data } from "../../Api_Collection/Api"



const Vital = () => {
    const [vitalData,setVitalData]=useState("");
    const [patientId,setPatientId]=useState("");

    useEffect(()=>{
        vital_data(patientId?._id,setVitalData);
        console.log(vitalData,"vital sata");
    },[patientId])

    useEffect(()=>{
        user_detail(setPatientId);
    },[])

    return (
        <>
            <div className='intakecontainer'>
                <div className='intakecontent121'>
                    <h6>Vitals</h6>
                </div>
                <div className='intakecardsVital'>
                <div className="small-card2121">
                    <img src={thermameter} alt="Icon" className="card-icon" />
                    <p>Body Temp</p>
                  <h4>22 °C</h4>
                </div>
                <div className="small-card2121">
                    <img src={heart} alt="Icon" className="card-icon" />
                    <p>Pulse Rate</p>
                    <h4>74 BPM</h4>
                </div>
                <div className="small-card2121">
                    <img src={lungs} alt="Icon" className="card-icon" />
                    <p>Respiration Rate</p>
                    <h4>74 BPM</h4>
                </div>
                <div className="small-card2121">
                    <img src={hand} alt="Icon" className="card-icon" />
                    <p>Blood Pressure</p>
                    <h4>80 BP</h4>
                </div>
                <div className="small-card2121">
                    <img src={o2} alt="Icon" className="card-icon" />
                    <p>Blood Oxygen</p>
                    <h4>22 O2</h4>
                </div>
                <div className="small-card2121">
                    <img src={clock} alt="Icon" className="card-icon" />
                    <p>Weight</p>
                    <h4>56 IBS</h4>
                </div>
                <div className="small-card2121">
                    <img src={hieght} alt="Icon" className="card-icon" />
                    <p>Height</p>
                    <h4>162 Ft/Inche</h4>
                </div>
                <div className="small-card2121">
                    <img src={last} alt="Icon" className="card-icon" />
                    <p>Blood Glucose Level</p>
                    <h4>37 C</h4>
                </div>
              
                </div>
            </div>
        </>
    )
}

export default Vital