import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";

const FaceSheet = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [adminDate, setADminData] = useState("");
  const [facilityAdress, setFacilityAdress] = useState("");
  const [facilityPhone, setFacilityPhone] = useState("");
  const [bop, setDop] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeigth] = useState("");
  const [hairColor, setHairColor] = useState();
  const [indentityMark, setIndentityMark] = useState("");
  const [Language, setLanguage] = useState("");
  const [courtOrder, setCourtOrder] = useState("");
  //Family/Guardian Emergency Name and Contact:
  const [familyName, setFamilyName] = useState("");
  const [familyContect, setFamilyContect] = useState("");
  const [Allergies, setAllergies] = useState("");
  const [otherAllergies, setOtherAllergies] = useState("");
  //Primary Care Provider
  const [primaryName, setPrimaryName] = useState("");
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [primaryAdress, setPrimaryAdress] = useState("");
  const [otherSpecification, setOtherSpecification] = useState("");
  //Psychiatric Provider
  const [psyName, setPsyName] = useState("");
  const [psyNumber, setPsyNumber] = useState("");
  const [psyAdress, setPsyAdress] = useState("");
  const [psyOtherSpecification, setPsyOtherSpecification] = useState("");
  const [preHospitalPhone, setPreHospitalPhone] = useState("");
  const [preHospitalAdress, setPreHospitalName] = useState("");
  const [healthPlan, setHealthPlane] = useState("");
  const [id, setId] = useState("");
  const [Manager, setManage] = useState("");
  const [mail, setMail] = useState("");
  const [socialSecurity, setSocialSecurity] = useState("");
  const [mentalHealth, setMentailHealth] = useState("");
  const [postSurgeries, setPostSurgeries] = useState("");

  return (
    <>
      <div className="backbutton">
        <IoArrowBackCircle
          style={{
            color: "#1A9FB2",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/intake")}
        />
      </div>
      <div className="form-container">
        <div className="formheading1">
          <div className="formsheading2">
            <h1>FACE SHEET</h1>
          </div>
        </div>
        <form action="">
          <div className="form-section">
            <div className="form-field">
              <label htmlFor="residentFullName">Resident Name:</label>
              <input
                type="text"
                id="residentFullName"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Admit Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Phone Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Place of Birth:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Eye Color:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Height:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Weight:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Hair Color:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Identifiable Marks:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Primary Language:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="yeschechbox2">
              <label htmlFor="AHCCCS">Court Ordered Treatment?</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Family/Guardian Emergency Name and Contact:
              </label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Emergency Contact:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Emergency Contact:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">MEDICATION Allergies:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Other Allergies (animal, food, environment)
              </label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="formsheading">
              <h6>Primary Care Provider</h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Mobile Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="formsheading">
              <h6>Psychiatric Provider</h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Mobile Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Preferred Hospital Phone:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Preferred Hospital Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Health Plan:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">ID #:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Case Manager:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Phone Number/E-Mail:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Social Security Representative Payee:
              </label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Phone Number/E-Mail:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Mental Health Diagnoses:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Past Surgeries:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div class="file-upload-box">
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <div class="upload-icon">
                <img
                  src={formupload}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div style={{ display: "block" }}>
                <button className="upload-button1" onclick="uploadFile()">
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" onclick="uploadFile()">
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="initalsubmit">
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FaceSheet;
