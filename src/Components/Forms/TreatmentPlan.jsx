import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import { user_detail } from "../../Api_Collection/Api";

const TreatmentPlan = () => {
  const [userDetails, setUserDetails] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  //chosse option
  const [intial, setInitial] = useState("");
  const [update, setUpdate] = useState("");
  //restdent detail
  const [dob, setDof] = useState("");
  const [date, setDate] = useState("");
  const [admitDate, setAdminDate] = useState("");
  const [care, setCare] = useState("");
  // care services
  const [physicalService, setPhysicalService] = useState("");
  const [behavior, setBehavior] = useState("");
  const [presentingPrice, setPresentingPrice] = useState("");
  // Mental Status
  const [mendelHealth, setMentelHealth] = useState("");
  const [mentelText, setMentelText] = useState("");
  //Mood Level:
  const [mind, setMind] = useState("");
  const [mindText, setMindText] = useState("");
  //ADLS
  const [adls, setAdls] = useState("");
  const [adlsText, setAldsText] = useState("");
  //Behavioral Health Services:
  const [BHealth, setBHealth] = useState("");
  const [Btext, setBtext] = useState("");
  //Primary Care Provider:
  const [primaryCare, setPrimaryCare] = useState("");
  //Resident Goals
  const [allergies, setAllergies] = useState("");
  const [Triggers, setTriggers] = useState("");
  const [goalAllergies, setGoalAllergies] = useState("");
  const [strengths, setStrengths] = useState("");
  const [limitation, setLimitation] = useState("");
  const [Barriers, setBarriers] = useState("");
  // Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations
  const [behaviorSymptoms, setBehaviorSymptoms] = useState("");
  const [physicalSymptoms, setPhysicalSymptoms] = useState("");
  const [consnotiveSymptoms, setConsnotiveSymptoms] = useState("");
  const [psychosocialSymptoms, setPsychosocialSymptoms] = useState("");
  const [interventionsImplemented, setInterventionsImplemented] = useState("");
  //Goals for Changes in the Resident Phychorial Interaction or Behaviour
  const [maintainSobriety, setMaintainSobriety] = useState("");
  const [livingSkills, setLivingSkills] = useState("");
  const [employment, setEmployment] = useState("");
  const [adlsSelect, setAdlsSelect] = useState("");
  const [safity, setSafity] = useState("");
  const [managingMentailHealth, setManagingMentailHealth] = useState("");
  const [legal, setLegal] = useState("");
  //Resident overall participation in treatment:
  const [percentage, setPersentage] = useState("");
  const [residentAttitute, setResidentAttitute] = useState("");
  const [residentProgress, setResidentProgress] = useState("");
  const [supportSystem, setSupportSystem] = useState("");
  const [religiousPreference, setreligiousPreference] = useState("");
  const [dischargeValue, setDischargeValue] = useState("");
  const [programDischarge, setProgramDischarge] = useState("");
  //Clinical Summary/Recommendations/Intervention:
  const [recommendations, setRecommendations] = useState("");
  const [treatment, setTreatment] = useState("");

  //handle check box
  const handleCheckboxChangeMentalHealth = (value) => {
    setMentelHealth(value);
  };
  const handleCheckboxChangeMind = (value) => {
    setMind(value);
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
            <h1>TREATMENT PLAN</h1>
          </div>
        </div>
        <form action="">
          <div className="form-section">
            <div className="form-field">
              <label htmlFor="admissionDate">Name:</label>
              <input
                type="text"
                id="admissionDate"
                value={name}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter address"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Number</label>
              <input
                type="text"
                id="admissionDate"
                value=""
                placeholder="Enter number"
                required
              />
            </div>
            <h2>Choose your Option</h2>
            <div className="form-field">
              <div className="genderdiv">
                <div className="genderbox">
                  <input
                    type="radio"
                    id="maleRadio"
                    name="gender"
                    className="custom-radio"
                  />
                  <label htmlFor="maleRadio">Initial</label>
                </div>
                <div className="genderbox">
                  <input
                    type="radio"
                    id="femaleRadio"
                    name="gender"
                    className="custom-radio"
                  />
                  <label htmlFor="femaleRadio">Update</label>
                </div>
              </div>
            </div>
            <h2>Resident Details</h2>
            <div className="form-field">
              <label htmlFor="AHCCCS">Resident Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter age"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date:</label>
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
              <label htmlFor="dateOfBirth">DOB:</label>
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
              <label htmlFor="dateOfBirth">Admit Date:</label>
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
              <label htmlFor="AHCCCS">Care:</label>
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
              />
            </div>
            <div className="form-field">
              <div className="genderdiv">
                <div className="genderbox">
                  <input
                    type="radio"
                    id="maleRadio"
                    name="gender"
                    className="custom-radio"
                  />
                  <label htmlFor="maleRadio">Physical Services</label>
                </div>
                <div className="genderbox">
                  <input
                    type="radio"
                    id="femaleRadio"
                    name="gender"
                    className="custom-radio"
                  />
                  <label htmlFor="femaleRadio">Behavioral Services</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="gender">Presenting Problems</label>
              <select
                style={{ color: "#1A9FB2" }}
                id="gender"
                value=""
                required
              >
                <option value="">Select</option>
                <option value="Male">Depression</option>
                <option value="Female">Mood Changes</option>
                <option value="Male">Trouble Falling / staying Asleep</option>
                <option value="Female">Mood Swings</option>
                <option value="Male">Social Withdrawals</option>
                <option value="Female">Changes in Eating habits</option>
                <option value="Female">Feeling of anger</option>
              </select>
            </div>
            <div className="formsheading">
              <h6>Diagonsis</h6>
            </div>
            <label htmlFor="">Mental Status:</label>
            <div className="yeschechbox2">
              <div>
                <input
                  type="checkbox"
                  id="oriented"
                  checked={mendelHealth === "oriented"}
                  onChange={() => handleCheckboxChangeMentalHealth("oriented")}
                />
                <label htmlFor="oriented">☒ Oriented</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="disoriented"
                  checked={mendelHealth === "disoriented"}
                  onChange={() =>
                    handleCheckboxChangeMentalHealth("disoriented")
                  }
                />
                <label htmlFor="disoriented">Disoriented</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="unstable"
                  checked={mendelHealth === "unstable"}
                  onChange={() => handleCheckboxChangeMentalHealth("unstable")}
                />
                <label htmlFor="unstable">Unstable</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="other"
                  checked={mendelHealth === "other"}
                  onChange={() => handleCheckboxChangeMentalHealth("other")}
                />
                <label htmlFor="other">Other (Specify)</label>
              </div>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
              />
            </div>
            <label htmlFor="">Mood Level:</label>
            <div className="yeschechbox2">
              <div>
                <input
                  type="checkbox"
                  id="normal"
                  checked={mind === "normal"}
                  onChange={() => handleCheckboxChangeMind("normal")}
                />
                <label htmlFor="normal">Normal</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="elevated"
                  checked={mind === "elevated"}
                  onChange={() => handleCheckboxChangeMind("elevated")}
                />
                <label htmlFor="elevated">Elevated</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="depressed"
                  checked={mind === "depressed"}
                  onChange={() => handleCheckboxChangeMind("depressed")}
                />
                <label htmlFor="depressed">Depressed</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="anxious"
                  checked={mind === "anxious"}
                  onChange={() => handleCheckboxChangeMind("anxious")}
                />
                <label htmlFor="anxious">Anxious</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="other"
                  checked={mind === "other"}
                  onChange={() => handleCheckboxChangeMind("other")}
                />
                <label htmlFor="other">Other (Specify):</label>
              </div>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
              />
            </div>
            <label htmlFor="">ADLS:</label>
            <div className="yeschechbox2">
              <div>
                {/* <input type="checkbox" name="" id="" /> */}
                <span>☒ Is independent with all ADLS</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Personal care level – See Attached personal care treatment
                  plan
                </span>
              </div>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
              />
            </div>
            <label htmlFor="">Behavioral Health Services:</label>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Receives behavioral health services</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Is prescribed psychotropic medication</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Resident agrees to follow house rules.</span>
              </div>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Primary Care Provider:</label>
              <input type="text" id="admissionDate" value="" required />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Psychiatric Provider:</label>
              <p>
                Resident to receive treatment services from above provider(s)
                every 1 to 2 months or earlier as needed. Specialty providers
                are to be managed and referred per primary care medical
                provider.
              </p>
            </div>
            <div className="formsheading">
              <h6>Resident Goals</h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Allergies</label>
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Triggers</label>
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Allergies:</label>
              <input type="text" id="AHCCCS" value="" required />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Allergies:</label>
              <input type="text" id="AHCCCS" value="" required />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Strengths</label>
              <select
                style={{ color: "#1A9FB2" }}
                id="gender"
                value=""
                required
              >
                <option value="">Selecte</option>
                <option value="Male">Self Motivated</option>
                <option value="Female">Loving</option>
                <option value="Female">Honest</option>
                <option value="Female">Helping Others</option>
                <option value="Female">Communication</option>
                <option value="Female">Creative</option>
                <option value="Female">Patient</option>
                <option value="Female">Dedication</option>
                <option value="Female">Coloring</option>
                <option value="Female">Decision Making</option>
                <option value="Female">Team Work</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">Limitation</label>
              <textarea
                id="programlocation&address"
                value=""
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Barriers:</label>
              <select
                style={{ color: "#1A9FB2" }}
                id="gender"
                value=""
                required
              >
                <option value="">Selecte</option>
                <option value="Male">Cognitive</option>
                <option value="Female">Lack of Insight</option>
                <option value="Male">Financial</option>
                <option value="Male">Refusal of Treatment</option>
                <option value="Male">Social Stigma</option>
                <option value="Male">Racial</option>
                <option value="Male">
                  Limited availibility to Mental Health awareness & Education
                </option>
                <option value="Male">
                  Lack of Mental Health professionals & Services
                </option>
              </select>
            </div>
            <div className="formsheading">
              <h6>
                Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations
              </h6>
            </div>
            <div className="yeschechbox2">
              {/* <input type="checkbox" name="" id="" /> */}
              <label htmlFor="">Behavioral Symptoms:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span> Self-injuring</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span> reckless behavior</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>impulsive behaviors</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>social isolation</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>no longer enjoying previous activities</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>talking, or writing about death</span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <input type="checkbox" name="" id="" /> */}
              <label htmlFor="">Physical Symptoms: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Insomnia</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Hypersomnia</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>changes in appetite</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>weight gain/loss</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>panic attacks</span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <input type="checkbox" name="" id="" /> */}
              <label htmlFor="">Cognitive Symptoms:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Lacking the ability to concentrate</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>memory impairment, ruminating</span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <input type="checkbox" name="" id="" /> */}
              <div>
                <input type="checkbox" name="" id="" />
                <span>pervasive thoughts about death and dying</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>inability to focus on specific tasks </span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <input type="checkbox" name="" id="" /> */}
              <label htmlFor="">Psychosocial Symptoms: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Feeling of helplessness</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>worthlessness</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>depression</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>anxiety</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>mood swings</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>irritability</span>
              </div>
            </div>
            <label htmlFor="">Interventions that are being implemented:</label>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Psychiatric services</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Communication Skills</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Verbal Prompt</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Interactive Feedback</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Encouragement</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Role-Play</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Sponsors, and support programs & people</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Review of Treatment Plan</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span> Relaxation techniques,</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Reframing,</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Conflict resolution,</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Rehearsal, Spiritual exploration</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span> Values clarification, Psycho-education,</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Exploring feelings</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Distraction,</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Redirection,</span>
              </div>
            </div>
            <div className="formsheading">
              <h6>Counseling Frequency</h6>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>Total of Minimum</span>
              </div>
              <div>
                <span>Hours per Week</span>
              </div>
            </div>

            <div className="yeschechbox2">
              <label htmlFor="">Individual: </label>
              <div>
                <span>Minimum 1 hour session per week</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Individual: </label>
              <div>
                <span>As needed</span>
              </div>
            </div>
            <div className="formsheading">
              <h6>
                Goals for Changes in the Resident Phychorial Interaction or
                Behaviour{" "}
              </h6>
              <p>
                Fill the following information for the respective ‘Current
                Treatment Goals’
              </p>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                1. Maintain Sobriety
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                2. Independent Living Skills
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                3. Employment
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                4. ADLS
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                5. Safety
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                6. Medication Education
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                7. Managing Mental Health
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                8. Legal
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">
                Resident overall participation in treatment:{" "}
              </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>100%</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>75%</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>50%</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>25%</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>≤5%</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Resident Attitude:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Attentive</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Supportive</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Sharing</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Intrusive</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Resistant</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Resident progress:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Deterioration</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No Progress</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Small progress</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Good Progress</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Goal achieved</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Support System:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Family</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Friends</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>BHRF Staff</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Clinical Team</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Guardian</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Other</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Religious Preference:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Christian</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Catholic</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Buddhist</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Other</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">
                Discharge planning & Re-evaluation of initial symptoms,
                behaviours & Goals
              </label>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Follow-up Medical appointments upon discharge</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Submit application for higher or lower level of care.
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Continue with Psychiatric Provider</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Continue with Primary Care Provider (PCP)</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Continue with case manager for additional support and
                  resources
                </span>
              </div>
            </div>
            <div className="form-field">
              <label
                htmlFor="AHCCCS"
                style={{ color: "#00000080", fontWeight: "600" }}
              >
                Specify ( If Others )
              </label>
              <textarea
                type="text"
                id="AHCCCS"
                value=""
                rows={5}
                cols={130}
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">
                Recommendations for further programs upon discharge:
              </label>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>PHP</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>IOP</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Sober living</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Home</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Flex Care 23.9</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Flex Care 16 </span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Flex Care 8</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">
                After care and Transition planning / Community Resources:
              </label>
            </div>
            <div className="yeschechbox2">
              {/* <label htmlFor="">Cardiovascular:</label> */}
              <div>
                {/* <input type="checkbox" name="" id="" /> */}
                <span>National suicide hotline 988 or 1-800-273-8255</span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <label htmlFor="">Cardiovascular:</label> */}
              <div>
                {/* <input type="checkbox" name="" id="" /> */}
                <span>Emergency care 911</span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <label htmlFor="">Cardiovascular:</label> */}
              <div>
                {/* <input type="checkbox" name="" id="" /> */}
                <span>24-Hour crisis in Maricopa County 602-222-9444</span>
              </div>
            </div>
            <div className="yeschechbox2">
              {/* <label htmlFor="">Cardiovascular:</label> */}
              <div>
                {/* <input type="checkbox" name="" id="" /> */}
                <span>
                  This treatment plan has been developed before the resident
                  receives physical health services or behavioral health
                  services or within 48hours after the initial assessment is
                  completed. It will be review and updated on an on-going basis
                  according to the review date (Every 30days) specified in the
                  treatment plan, when a treatment goal is accomplished or
                  changed, when additional information that affects the
                  resident’s behavioral health assessment is identified and when
                  the resident has a significant change in condition or
                  experiences an event that affects treatment.
                </span>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="gender">
                Clinical Summary/Recommendations/Intervention:
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div>
            <div className="formsheading">
              <p>
                The mirrors in the facility are SHATTERPROOF, and if they were
                standard mirrors it would not present as a current safety risk
                to this resident.
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Treatment plan review date</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
                required
              />
            </div>
            <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "20px",
                marginBottom: "20px",
                color: "#00000099",
              }}
            >
              Note: Earlier review may be performed if resident has a
              significant change in condition or event that affects treatment.
            </p>
            <div className="form-field">
              <label htmlFor="AHCCCS">Discharge Plan Date:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
                required
              />
            </div>
            <div className="formsheading">
              <h6>Individual Participating in Developing the Service Plan</h6>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Resident / Representative</label>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Yes</label>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>
                  I am in the agreement with the services included in this
                  treatment Plan
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">No</label>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>
                  I am in the agreement with the services included in this
                  treatment Plan
                </span>
              </div>
            </div>
            <div className="formsheading">
              <h6>
                Signature indicates participation and informed consent for
                treatment services.
              </h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">First and Last Name</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Resident or Resident’s representative
              </label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
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
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date:</label>
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
              <label htmlFor="AHCCCS">Behavioral Health Professional</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter text"
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
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
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

export default TreatmentPlan;
