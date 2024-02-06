// Modal.js
import React, { useEffect, useState } from "react";
import "./SingInModel.css"; // Import your modal styles if needed
import { IoMdClose } from "react-icons/io";

const SingInUpdateModel = ({ onClose, singin, setSingIn }) => {
  const [date,setDate]=useState("")
  const [time,setTime]=useState("")

  useEffect(()=>{
    // setDateAndTime(new Date())
    var currentDate = new Date();

// Extract date components
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();

// Extract time components
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Display the extracted information
setDate(`0${day}/0${month}/${year}`);
setTime('Time: ' + hours + ':' + minutes + ':' + seconds);
  },[])

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
      
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 

 
  return (
    <div className="modal-overlay-sing" onClick={onClose}>
      <div className="modal-content-sing" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn-sing" onClick={() => onClose(false)}>
          <IoMdClose style={{ width: "50px", height: "30px" }} />
        </span>
   
        <div className="input_singin_button">
          <p style={{ color: "white" }}>Digitally Sign by Employee Name</p>
          <p style={{ color: "white" }}>Date: {date} Time: {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()} </p>
          {/* <p style={{ color: "white" }}>{time}</p> */}
          
          <input
            type="text"
            placeholder="Enter Sing in Signature"
            value={singin}
            required
            onChange={(e) => setSingIn(e.target.value)}
          />
        </div>

        <div className="sing_in_submit_button">
          <button type="button" onClick={onClose}>
            Submit
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default SingInUpdateModel;
