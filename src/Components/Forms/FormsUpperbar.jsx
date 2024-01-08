// Navbar.js
import React from 'react';
import './FormsUpperbar.css'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const FormUpper = () => {;
    const navigate = useNavigate()

  return (
    <>
    <div className="formheading1">
        <div className='formsheading2'>
      <h1>ANNUAL / INITIAL ASSESSMENT</h1>
      </div>
      
    </div>
    </>
  );
};

export default FormUpper;
