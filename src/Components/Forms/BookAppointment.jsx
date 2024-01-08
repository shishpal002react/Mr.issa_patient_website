import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import formupload from '../../img/formupload.png'


const BookAppointment = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='booking-container'>
      <div className='backbutton'>
                <IoArrowBackCircle style={{ color: '#1A9FB2', width: '40px', height: '40px', cursor: 'pointer' }} onClick={() => navigate('/appointment_scheduling')} />
            </div>
      <div className="form-container">
      <div className="formheading1">
        <div className='formsheading2'>
          <h1>BOOK NEW APPOINTMENT</h1>
        </div>
      </div>
        <form action="">
          <div className="booking-section">
            <h2>Booking Details</h2>
            <div className="form-field">
              <label htmlFor="AHCCCS">Name</label>
              <input
                type="text"
                id="AHCCCS"
                value=''
                placeholder='Type Here.....'
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Contact Number</label>
              <input
                type="text"
                id="AHCCCS"
                value=''
                placeholder='Type Here.....'
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Reason For Visit</label>
              <textarea
                id="programlocation&address"
                value=''
                rows={5}
                cols={130}
                placeholder='Type Here......'
                required
              />
            </div>
            <h2>Choose your Slot</h2>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Appointment Date</label>
              <input
                style={{ color: '#1A9FB2' }}
                type="date"
                id="dateOfBirth"
                value=''
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Time Slot</label>
              <select
                style={{ color: '#1A9FB2' }}
                id="gender"
                value=''
                required
              >
                <option value="" >9:30 AM ( Morning )</option>
                <option value="" >9:30 AM ( Morning )</option>
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className='initalsubmit'>SUBMIT DETAILS</button>
          </div>
        </form>
      </div>
    </div>
    </>

  )
}

export default BookAppointment