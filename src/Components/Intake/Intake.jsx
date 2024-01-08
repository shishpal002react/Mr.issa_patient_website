import React from 'react'
import './Intake.css'
import intake1 from '../../img/intake1.png'
import intake2 from '../../img/intake2.png'
import intake3 from '../../img/inatke3.png'
import intake4 from '../../img/inatke4.png'
import intake5 from '../../img/inatke5.png'
import intake6 from '../../img/intake6.png'
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom'




const Intake = () => {
    return (
        <>
            <div className='intakecontainer'>
                <div className='intakecontent'>
                    <h6> <span>2 OUT OF 6 INTAKES </span> HAVE BEEN UPLOADED!</h6>
                </div>
                <div className='intakecards'>
                <div className="small-card">
                    <img src={intake1} alt="Icon" className="card-icon" />
                    <p>Initial Assessment</p>
                    <Link to={'/initial-Assessment'}>
                    <span><MdOutlineFileUpload /> upload</span>
                    </Link>
                </div>
                <div className="small-card">
                    <img src={intake2} alt="Icon" className="card-icon" />
                    <p>Nursing Assessment</p>
                    <Link to={'/nursing-assessment'}>
                    <span><MdOutlineFileUpload /> upload</span>
                    </Link>
                </div>
                <div className="small-card">
                    <img src={intake3} alt="Icon" className="card-icon" />
                    <p>Treatment Plan</p>
                    <Link to={'/treatmentplan'}>
                    <span><MdOutlineFileUpload /> upload</span>
                    </Link>
                </div>
                <div className="small-card">
                    <img src={intake4} alt="Icon" className="card-icon" />
                    <p>Face Sheet</p>
                    <Link to={'/facesheet'}>
                    <span><MdOutlineFileUpload /> upload</span>
                    </Link>
                </div>
                <div className="small-card">
                    <img src={intake5} alt="Icon" className="card-icon" />
                    <p>Safety Plan</p>
                    <Link to={'/safetyplan'}>
                    <span><MdOutlineFileUpload /> upload</span>
                    </Link>
                </div>
                <div className="small-card">
                    <img src={intake6} alt="Icon" className="card-icon" />
                    <p>Resident Intakes</p>
                    <Link to={'/Residentintakes'}>
                    <span><MdOutlineFileUpload /> upload</span>
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default Intake