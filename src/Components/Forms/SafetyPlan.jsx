import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import { CiCirclePlus } from "react-icons/ci";
import { user_detail, safety_form } from "../../Api_Collection/Api";
import SingInModel from "../Modal/SingInModel";

const SafetyPlan = () => {
  //singIn model state
  const [showSingIn, setShowSingIn] = useState(false);
  const [userDetail, setUserDetail] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [warning, setWarning] = useState("");
  const [internalCopy, setInernalCopy] = useState("");
  //People & Social settings that provide Distraction
  const [socialName, setSocialName] = useState("");
  const [socialPhone, setSocialPhone] = useState("");
  const [socialRelationship, setSocialRelationship] = useState("");
  const [socialArray, setSocialArray] = useState([]);
  //address and place
  const [address, setAdress] = useState("");
  const [place, setPlace] = useState("");
  //People whom I can ask for Help
  const [helpName, setHelpName] = useState("");
  const [helpPhone, setHelpPhone] = useState("");
  const [helpRelationship, setHelpRelationship] = useState("");
  const [helpArray, setHelpArray] = useState([]);
  //Professionals or agencies I can contact during Crisis
  const [crisisName, setCrisisName] = useState("");
  const [crisisPhone, setCrisisPhone] = useState("");
  const [crisisRelationship, setCrisisRelationship] = useState("");
  const [crisisArray, setCrisisArray] = useState([]);
  //environmentSafetyMedications
  const [enviromentAdress, setEnviromentAdress] = useState("");
  //singin
  const [singin, setSingIn] = useState("");

  useEffect(() => {
    setUserId(userDetail?._id);
    setUser(userDetail?.fullName);
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

  const initial_value = () => {
    setUserDetail("");
    setUser("");
    setUserId("");
    setDate("");
    setWarning("");
    setInernalCopy("");
    setSocialName("");
    setSocialPhone("");
    setSocialPhone("");
    setSocialRelationship("");
    setSocialArray([]);
    setAdress("");
    setPlace("");
    setHelpName("");
    setHelpPhone("");
    setHelpRelationship("");
    setHelpArray([]);
    setCrisisName("");
    setCrisisPhone("");
    setCrisisRelationship("");
    setCrisisArray([]);
    setEnviromentAdress("");
    setSingIn("");
  };

  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      patientId: userId,
      date: date,
      warningSigns: warning,
      internalCopingStrategies: internalCopy,
      internalCopyinternalCopy: socialArray,
      distractionsPlace: address,
      distractionsPlane: place,
      helpContactsPeople: helpArray,
      professionals: crisisArray,
      environmentSafetyMedications: enviromentAdress,
      signature: singin,
    };
    safety_form(data);
    initial_value();
    navigate("/intake");
  };

  const handleSocialArray = (e) => {
    e.preventDefault();
    const newContact = {
      name: socialName,
      phone: socialPhone,
      relationship: socialRelationship,
    };
    setSocialArray((prev) => [...prev, newContact]);
    setSocialName("");
    setSocialPhone("");
    setSocialRelationship("");
  };
  const handleHelpArray = (e) => {
    e.preventDefault();
    setHelpArray((prev) => ({
      ...prev,
      name: helpName,
      phone: helpPhone,
      relationship: helpRelationship,
    }));
    console.log("add help");
    setHelpName("");
    setHelpPhone("");
    setHelpRelationship("");
  };

  const handleCrisisArray = (e) => {
    e.preventDefault();
    setCrisisArray((prev) => ({
      ...prev,
      clinicianName: crisisName,
      phone: crisisPhone,
      relationship: crisisRelationship,
    }));

    setCrisisName("");
    setCrisisPhone("");
    setCrisisRelationship("");
  };

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
            <h1>Resident Safety Plan</h1>
          </div>
        </div>
        <form onSubmit={handlePost}>
          <div className="form-section">
            <div className="form-field">
              <label htmlFor="residentFullName">Resident Full Name</label>
              <input
                type="text"
                id="residentFullName"
                value={user}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Resident’s Date of Birth</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={date}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDate(e?.target?.value)}
              />
            </div>
            <h5
              style={{ fontWeight: "700", fontSize: "20px", color: "#000000" }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 1 :</span> Warning SIgns{" "}
              <span style={{ color: "#000000B2" }}>
                ( thoughts, images, mood, situation, behavior )
              </span>{" "}
              that a crisis may be developing{" "}
            </h5>

            <div className="form-field">
              <textarea
                id="programlocation&address"
                value={warning}
                rows={5}
                cols={130}
                placeholder="Type Here......"
                required
                onChange={(e) => setWarning(e?.target?.value)}
              />
            </div>
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 2 :</span> Internal Coping
              Strategies
            </h5>
            <p>
              Things I can do to take my mind off my problems without contacting
              other
            </p>
            <div className="form-field">
              <textarea
                id="programlocation&address"
                value={internalCopy}
                rows={5}
                cols={130}
                placeholder="Type Here......"
                required
                onChange={(e) => setInernalCopy(e.target.value)}
              />
            </div>
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 3 :</span> People & Social
              settings that provide Distraction
            </h5>
            <div className="safetyplandiv">
              <div className="form-field">
                <label htmlFor="AHCCCS">Name</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={socialName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setSocialName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Phone Number</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={socialPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setSocialPhone(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Relationship</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={socialRelationship}
                  placeholder="Enter text"
                  
                  onChange={(e) => setSocialRelationship(e.target.value)}
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleSocialArray}
                >
                  SAVE
                </button>
              </div>
            </div>
            {/* <div className="form-actions">
              <button type="button" className="safetybutton1">
                <CiCirclePlus style={{ width: "30px", height: "30px" }} /> ADD
                MORE PEOPLE
              </button>
            </div> */}
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Destination place :
              </label>
              <textarea
                id="programlocation&address"
                value={address}
                rows={3}
                cols={130}
                placeholder="Enter Full Address"
                required
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Destination Plane :
              </label>
              <textarea
                id="programlocation&address"
                value={place}
                rows={3}
                cols={130}
                placeholder="Enter Full Address"
                required
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>

            {/* enter data */}
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 3 :</span> People whom I
              can ask for Help
            </h5>
            <div className="safetyplandiv">
              <div className="form-field">
                <label htmlFor="AHCCCS">Name</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={helpName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setHelpName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Phone Number</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={helpPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setHelpPhone(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Relationship</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={helpRelationship}
                  placeholder="Enter text"
                  
                  onChange={(e) => setHelpRelationship(e.target.value)}
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleHelpArray}
                >
                  SAVE
                </button>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="safetybutton1">
                <CiCirclePlus style={{ width: "30px", height: "30px" }} /> ADD
                MORE PEOPLE
              </button>
            </div>
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
              }}
            >
              {" "}
              Professionals or agencies I can contact during Crisis
            </h5>
            <div className="safetyplandiv">
              <div className="form-field">
                <label htmlFor="AHCCCS">Clinic / Facility Name</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={crisisName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setCrisisName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Phone Number</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={crisisPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setCrisisPhone(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Relationship</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={crisisRelationship}
                  placeholder="Enter text"
                  
                  onChange={(e) => setCrisisRelationship(e.target.value)}
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleCrisisArray}
                >
                  SAVE
                </button>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="safetybutton1">
                <CiCirclePlus style={{ width: "30px", height: "30px" }} /> ADD
                MORE PEOPLE
              </button>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Making the Environment Safe :
              </label>
              <textarea
                id="programlocation&address"
                value={enviromentAdress}
                rows={5}
                cols={130}
                placeholder="Enter Full Address"
                required
                onChange={(e) => setEnviromentAdress(e?.target?.value)}
              />
            </div>
            <div class="file-upload-box">
              <div class="upload-icon" onClick={() => setShowSingIn(true)}>
                <img
                  src={formupload}
                  alt=""
                  style={{ width: "100px", height: "100px", cursor: "pointer" }}
                />
              </div>
              <div style={{ display: "block" }}>
                <button className="upload-button1" onclick="">
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" onclick="">
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit"  className="initalsubmit">
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>
      {showSingIn && (
        <SingInModel onClose={() => setShowSingIn(false)}>
          <div className="input_singin_button">
            <p style={{ color: "white" }}>Digitally Sign by employee name</p>
            <input
              type="text"
              placeholder="Enter Sing in Signature"
              value={singin}
              onChange={(e) => setSingIn(e.target.value)}
            />
          </div>

          <div className="sing_in_submit_button">
            <button type="button" onClick={() => setShowSingIn(false)}>
              Submit
            </button>
          </div>
        </SingInModel>
      )}
    </>
  );
};

export default SafetyPlan;
