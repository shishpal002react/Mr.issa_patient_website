// Modal.js
import React, { useEffect, useState } from "react";
import "./SingInModel.css"; // Import your modal styles if needed
import { IoMdClose } from "react-icons/io";

const SingInUpdateModel = ({ onClose, singin, setSingIn,setDateAndTime }) => {
  const [date,setDate]=useState("")
  const [time,setTime]=useState();
  //handle state data
  const [signatureData,setSignatureData]=useState();
  


  useEffect(()=>{
    //set state
    setSignatureData(singin);

    // setDateAndTime(new Date())
    var currentDate = new Date();

// Extract date components
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();



// Display the extracted information
{day>9?setDate(`${day}/0${month}/${year}`):setDate(`0${day}/0${month}/${year}`);}

  },[])

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
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
       {signatureData ? <p style={{ color: "white" }}>Digitally Sign by {signatureData}</p> : <p style={{ color: "white" }}>Digitally Sign by Employee Name</p> } 
          <p style={{ color: "white" }}>Date: {date} Time: {time} </p>
          {/* <p style={{ color: "white" }}>{time}</p> */}
          
          <input
            type="text"
            placeholder="Enter Sing in Signature"
            value={signatureData}
            required
            onChange={(e) => setSignatureData(e.target.value)}
          />
        </div>

        <div className="sing_in_submit_button">
          <button type="button" onClick={()=>{
            setSingIn(signatureData);
            setDateAndTime(`${date} ${time}`);
            onClose(false);
          }}>
            Submit
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default SingInUpdateModel;
