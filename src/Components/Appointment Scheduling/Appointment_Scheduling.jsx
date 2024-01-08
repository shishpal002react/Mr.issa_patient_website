import React from 'react'
import './Appointment_Scheduling.css'
import AppointmentsCard from '../Cards/AppointmentsCard'
import scheduling1 from '../../img/sheduling1 (1).png'
import scheduling2 from '../../img/sheduling1 (2).png'
import scheduling3 from '../../img/sheduling1 (3).png'
import cards from '../../img/card1.png'
import { Link } from 'react-router-dom'

const Appointment_Scheduling = () => {
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
    ];
    return (
        <div className='Appointment_Schedulingcontainer'>
            <div className='appointmentcontent'>
                <p>Appointment Scheduling</p>
            </div>
            <div className='Schedulingcards'>
                <div className="Scheduling-card">
                    <img src={scheduling1} alt="Icon" className="card-icon" />
                    <Link to={'/booknewappointment'}>
                    <p>Book New Appointment</p>
                    </Link>
                </div>
                <div className="Scheduling-card">
                    <img src={scheduling2} alt="Icon" className="card-icon" />
                    <Link to={'/appointmenthistory'}>
                    <p>Appointment History</p>
                    </Link>
                </div>
                <div className="Scheduling-card">
                    <img src={scheduling3} alt="Icon" className="card-icon" />
                    <Link to={'/manageappointment'}>
                    <p>Manage Appointments</p>
                    </Link>
                </div>
            </div>
            <div className='appointmentcontent'>
                <p>Upcoming Appointments</p>
            </div>
            <div className='SchedulingCard'>
            <div className='todayappointments'>
                <p>TODAY</p>
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
            <div className='tomorrowappointments'>
                <p>TOMORROW</p>
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
            </div>
        </div>
    )
}

export default Appointment_Scheduling