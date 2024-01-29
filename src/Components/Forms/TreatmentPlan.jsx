import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import { user_detail, patient_form } from "../../Api_Collection/Api";
import SingInModel from "../Modal/SingInModel";
import Select from "react-select";

const TreatmentPlan = () => {
  // model data
  const [signatureModel1, setSignatureModel1] = useState(false);
  const [signatureModel2, setSignatureModel2] = useState(false);
  const [signatureModel3, setSignatureModel3] = useState(false);
  //user Detail
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  //chosse option
  const [intial, setInitial] = useState("");
  const [update, setUpdate] = useState("");
  //restdent detail
  const [residentName, setResidentName] = useState("");
  const [dob, setDof] = useState("");
  const [date, setDate] = useState("");
  const [admitDate, setAdminDate] = useState("");
  const [care, setCare] = useState("");
  // care services
  const [physicalService, setPhysicalService] = useState(false);
  const [behavior, setBehavior] = useState(false);
  const [presentingPrice, setPresentingPrice] = useState([]);
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
  const [strengths, setStrengths] = useState([]);
  const [limitation, setLimitation] = useState("");
  const [Barriers, setBarriers] = useState([]);
  // Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations
  const [behavioralSymptoms, setBehavioralSymptoms] = useState([]);
  const [physicalSymptoms, setPhysicalSymptoms] = useState([]);
  const [consnotiveSymptoms, setConsnotiveSymptoms] = useState([]);
  const [psychosocialSymptoms, setPsychosocialSymptoms] = useState([]);
  const [interventionsImplemented, setInterventionsImplemented] = useState([]);
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
  const [discharge, setDischarge] = useState("");
  //Individual Participating in Developing the Service Plan
  const [residentPlan, setResidentPlan] = useState("");
  const [guardian, setGuardian] = useState("");
  const [staff, setStaff] = useState("");
  const [bpn, setBph] = useState("");
  //signaturesResident
  const [nameResident, setNameResident] = useState("");
  const [credentialsResident, setCredentialsResident] = useState("");
  const [signatureResident, setsignatureResident] = useState("");
  const [dateResident, setDateResident] = useState("");
  // "signaturesFacilityRep"
  const [nameFacilityRep, setNameFacilityRep] = useState("");
  const [credentialsFacilityRep, setCredentialsFacilityRep] = useState("");
  const [signatureFacilityRep, setsignatureFacilityRep] = useState("");
  const [dateFacilityRep, setDateFacilityRep] = useState("");
  //signaturesBhp"
  const [nameBhp, setNameBhp] = useState("");
  const [credentialsBhp, setCredentialsBhp] = useState("");
  const [signatureBhp, setsignatureBhp] = useState("");
  const [dateBhp, setDateBhp] = useState("");

  useEffect(() => {
    setUserId(user?._id);
    setName(user?.fullName);
  }, [user]);

  useEffect(() => {
    user_detail(setUser);
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      patientId: userId,
      residentName: address,
      dateOfBirth: dob,
      date: date,
      admitDate: admitDate,
      care: {
        physicalServices: physicalService,
        behavioralServices: behavior,
      },

      presentingProblems: presentingPrice,
      mentalStatus: mendelHealth,
      mentalStatusOther: mentelText,
      moodLevel: mind,
      moodLevelOther: mindText,
      adls: adls,
      behavioralHealthServices: BHealth,
      primaryCareProvider: primaryCare,

      allergies: allergies,
      triggers: Triggers,
      strengths: strengths,
      barriers: Barriers,
      riskAssessment: {
        behavioralSymptoms: behavioralSymptoms,
        physicalSymptoms: physicalSymptoms,
        cognitiveSymptoms: consnotiveSymptoms,
        psychosocialSymptoms: psychosocialSymptoms,
      },
      //miss some value

      signaturesResident: {
        name: nameResident,
        credentials: credentialsResident,
        signature: signatureResident,
        date: dateResident,
      },
      signaturesFacilityRep: {
        name: nameFacilityRep,
        credentials: credentialsFacilityRep,
        signature: signatureFacilityRep,
        date: dateFacilityRep,
      },
      signaturesBhp: {
        name: nameBhp,
        credentials: credentialsBhp,
        signature: signatureBhp,
        date: dateBhp,
      },
    };
    patient_form(data);
    navigate("/intake");
  };

  //handle check box
  const handleCheckboxChangeMentalHealth = (value) => {
    setMentelHealth(value);
  };

  const handleCheckboxChangeMind = (value) => {
    setMind(value);
  };

  //set the answer
  const handleCheckboxChangeBehavioral = (symptom) => {
    setBehavioralSymptoms((prevSelectedSymptoms) => {
      if (prevSelectedSymptoms.includes(symptom)) {
        return prevSelectedSymptoms.filter((selected) => selected !== symptom);
      } else {
        return [...prevSelectedSymptoms, symptom];
      }
    });
  };
  const handleCheckboxChangePhysical = (symptom) => {
    setPhysicalSymptoms((prevSelectedSymptoms) => {
      if (prevSelectedSymptoms.includes(symptom)) {
        return prevSelectedSymptoms.filter((selected) => selected !== symptom);
      } else {
        return [...prevSelectedSymptoms, symptom];
      }
    });
  };

  const handleCheckboxChangeCognitive = (symptom) => {
    setConsnotiveSymptoms((prevSelectedSymptoms) => {
      if (prevSelectedSymptoms.includes(symptom)) {
        return prevSelectedSymptoms.filter((selected) => selected !== symptom);
      } else {
        return [...prevSelectedSymptoms, symptom];
      }
    });
  };

  const handleCheckboxChangePsychosocial = (symptom) => {
    setPsychosocialSymptoms((prevSelectedSymptoms) => {
      if (prevSelectedSymptoms.includes(symptom)) {
        return prevSelectedSymptoms.filter((selected) => selected !== symptom);
      } else {
        return [...prevSelectedSymptoms, symptom];
      }
    });
  };

// Presenting Problems
  const presentingPriceOption = [
    { label: "Depression", value: "Depression" },
    { label: "Mood Changes", value: "Mood Changes" },
    { label: "Trouble Falling / staying Asleep", value: "Trouble Falling / staying Asleep" },
    { label: "Mood Swings", value: "Mood Swings" },
    { label: "Social Withdrawals", value: "Social Withdrawals" },
    { label: "Changes in Eating habits", value: "Changes in Eating habits" },
    { label: "Feeling of anger", value: "Feeling of anger" }
    
  ];

  const presentingPriceHandler = (optionValue) => {
    setPresentingPrice(optionValue);
  };

  //Strengths:
  const strengthsOption = [
    { label: "Self Motivated", value: "Self Motivated" },
    { label: "Loving", value: "Loving" },
    { label: "Honest", value: "Honest" },
    { label: "Helping Others", value: "Helping Others" },
    { label: "Communication", value: "Communication" },
    { label: "Creative", value: "Creative" },
    { label: "Patient", value: "Patient" },
    { label: "Dedication", value: "Dedication" },
    { label: "Coloring", value: "Coloring" },
    { label: "Decision Making", value: "Decision Making" },
    {label:"Team Work",value : "Team Work"}
  ]

  const strengthsHandler = (optionValue) => {
    setStrengths(optionValue);
  };

  //Barriers
  const BarriersOption=[
    {label: "Cognitive",value:"Cognitive"},
    {label: "Lack of Insight",value:"Lack of Insight"},
    {label: "Financial",value:"Financial"},
    {label: "Refusal of Treatment",value:"Refusal of Treatment"},
    {label: "Social Stigma",value:"Social Stigma"},
    {label: "Racial",value:"Racial"},
    {label: "Limited availibility to Mental Health awareness & Education",value:"Limited availibility to Mental Health awareness & Education"},
    {label: "Lack of Mental Health professionals & Services",value:"Lack of Mental Health professionals & Services"},
    {label: "Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations",value:"Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations"},
  ]

  const BarriersHandler=(optionValue)=>{
    setBarriers(optionValue)
  }


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
        <form onSubmit={handlePost}>
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Number</label>
              <input
                type="text"
                id="admissionDate"
                value={number}
                placeholder="Enter number"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {/* <h2>Choose your Option</h2>
            <div className="form-field">
              <div className="genderdiv" onChange={(e)=>}>
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
            </div> */}
            <h2 style={{marginTop:"1rem"}}>Resident Details</h2>
            <div className="form-field">
              <label htmlFor="AHCCCS">Resident Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value={residentName}
                placeholder="Enter age"
                required
                onChange={(e) => setResidentName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={dob}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDof(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">DOB:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={date}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Admit Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={admitDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setAdminDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Care:</label>
              <textarea
                type="text"
                id="AHCCCS"
                value={care}
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
                onChange={(e) => setCare(e.target.value)}
              />
            </div>
            <div className="form-field">
              <div className="genderdiv">
                <div className="genderbox">
                  <input
                    type="checkbox"
                    checked={physicalService}
                    onChange={() => setPhysicalService(!physicalService)}
                    id="behavioralCheckbox"
                  />
                  <label htmlFor="behavioralCheckbox">Physical Services</label>
                </div>
                <div className="genderbox">
                  <input
                    type="checkbox"
                    checked={behavior}
                    onChange={() => setBehavior(!behavior)}
                    id="behavioralCheckbox"
                  />
                  <label htmlFor="behavioralCheckbox">
                    Behavioral Services
                  </label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="gender">Presenting Problems</label>
            
              <Select
              isMulti
              onChange={presentingPriceHandler}
              value={presentingPrice}
              options={presentingPriceOption}
              />
            </div>
            <div className="formsheading">
              <h6>Diagonsis</h6>
            </div>
            <label htmlFor="" className="label-review" >Mental Status:</label>
            <div className="yeschechbox-review">
              <div>
                <input
                  type="checkbox"
                  id="oriented"
                  checked={mendelHealth === "oriented"}
                  onChange={() => handleCheckboxChangeMentalHealth("oriented")}
                />
                <label htmlFor="oriented" >Oriented</label>
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
            {mendelHealth === "other" && (
              <div className="form-field">
                <textarea
                  type="text"
                  id="AHCCCS"
                  value={mentelText}
                  rows={5}
                  cols={130}
                  placeholder="Enter text."
                  required
                  onChange={(e) => setMentelText(e.target.value)}
                />
              </div>
            )}
            <label htmlFor="" className="label-review">Mood Level:</label>
            <div className="yeschechbox-review">
              <div>
                <input
                  type="checkbox"
                  id="normal"
                  checked={mind === "Normal"}
                  onChange={() => handleCheckboxChangeMind("Normal")}
                />
                <label htmlFor="normal">Normal</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="elevated"
                  checked={mind === "Elevated"}
                  onChange={() => handleCheckboxChangeMind("Elevated")}
                />
                <label htmlFor="elevated">Elevated</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="depressed"
                  checked={mind === "Depressed"}
                  onChange={() => handleCheckboxChangeMind("Depressed")}
                />
                <label htmlFor="depressed">Depressed</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="anxious"
                  checked={mind === "Anxious"}
                  onChange={() => handleCheckboxChangeMind("Anxious")}
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
            {mind === "other" && (
              <div className="form-field">
                <textarea
                  type="text"
                  id="AHCCCS"
                  value={mindText}
                  rows={5}
                  cols={130}
                  placeholder="Enter text."
                  required
                  onChange={(e) => setMindText(e.target.value)}
                />
              </div>
            )}
            <label htmlFor="" className="label-review">ADLS:</label>
            <div className="yeschechbox-review">
              <div>
                <input
                  type="checkbox"
                  id="independent"
                  checked={adls === "independent"}
                  onChange={() => setAdls("independent")}
                />
                <label htmlFor="independent">Independent</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="personalCareLevel"
                  checked={adls === "personalCareLevel"}
                  onChange={() => setAdls("personalCareLevel")}
                />
                <label htmlFor="personalCareLevel">Personal Care Level</label>
              </div>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                id="AHCCCS"
                value={adlsText}
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
                onChange={(e) => setAldsText(e.target.value)}
              />
            </div>
            <label htmlFor="" className="label-review">Behavioral Health Services:</label>
            <div className="yeschechbox-review">
              <div>
                <input
                  type="checkbox"
                  id="receivesServices"
                  value="receivesServices"
                  checked={BHealth === "receivesServices"}
                  onChange={() => setBHealth("receivesServices")}
                />
                <label htmlFor="receivesServices">
                  Receives behavioral health services
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="prescribedMedication"
                  value="prescribedMedication"
                  checked={BHealth === "prescribedMedication"}
                 onChange={() => setBHealth("prescribedMedication")}
                />
                <label htmlFor="prescribedMedication">
                  Is prescribed psychotropic medication
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="followsHouseRules"
                  value="followsHouseRules"
                  checked={BHealth === "followsHouseRules"}
                  onChange={() => setBHealth("followsHouseRules")}
                />
                <label htmlFor="followsHouseRules">
                  Resident agrees to follow house rules.
                </label>
              </div>
            </div>
            <div className="form-field">
              <textarea
                type="text"
                id="AHCCCS"
                value={Btext}
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
                onChange={(e) => setBtext(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="label-review">Primary Care Provider:</label>
              <input
                type="text"
                
                value={primaryCare}
                required
                onChange={(e) => setPrimaryCare(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="label-review" >Psychiatric Provider:</label>
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
              <label className="label-review">Allergies</label>
              <textarea
                type="text"
              
                value={allergies}
                rows={3}
                cols={130}
                required
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="label-review">Triggers</label>
              <textarea
                type="text"
                
                value={Triggers}
                rows={3}
                cols={130}
                required
                onChange={(e) => setTriggers(e.target.value)}
              />
            </div>
      
            <div className="form-field">
              <label htmlFor="" className="label-review">Strengths</label>
              
              <Select
              isMulti
              options={strengthsOption}
              onChange={strengthsHandler}
              value={strengths}
              />
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Limitation</label>
              <textarea
                id="programlocation&address"
                value={limitation}
                rows={5}
                cols={82}
                required
                onChange={(e) => setLimitation(e.target.value)}
              />
            </div> */}
            <div className="form-field">
              <label className="label-review">Barriers:</label>
             
              <Select
              isMulti
              onChange={BarriersHandler}
              value={Barriers}
              options={BarriersOption}
              />
            </div>
            <div className="formsheading">
              <h6>
                Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations
              </h6>
            </div>
            <label htmlFor="" className="label-review">Behavioral Symptoms:</label>
            <div className="yeschechbox-review">
              <div>
                <input
                  type="checkbox"
                  id="selfInjuring"
                  checked={behavioralSymptoms.includes("selfInjuring")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("selfInjuring")
                  }
                />
                <span>Self-injuring</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="recklessBehavior"
                  checked={behavioralSymptoms.includes("recklessBehavior")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("recklessBehavior")
                  }
                />
                <span>Reckless behavior</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="impulsiveBehaviors"
                  checked={behavioralSymptoms.includes("impulsiveBehaviors")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("impulsiveBehaviors")
                  }
                />
                <span>Impulsive behaviors</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="socialIsolation"
                  checked={behavioralSymptoms.includes("socialIsolation")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("socialIsolation")
                  }
                />
                <span>Social isolation</span>
              </div>
             
              <div>
                <input
                  type="checkbox"
                  id="socialIsolation"
                  checked={behavioralSymptoms.includes("nolongerenjoyingpreviousactivities")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("Nolongerenjoyingpreviousactivities")
                  }
                />
                <span>No longer enjoying previous activities </span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="socialIsolation"
                  checked={behavioralSymptoms.includes("talkingorwriting")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("talkingorwriting")
                  }
                />
                <span>Talking, or writing</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="socialIsolation"
                  checked={behavioralSymptoms.includes("aboutdeath")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("aboutdeath")
                  }
                />
                <span>About death </span>
              </div>
            </div>
            <label htmlFor="" className="label-review">Physical Symptoms:</label>
            <div className="yeschechbox-review">
             
              <div>
                <input
                  type="checkbox"
                  id="insomnia"
                  checked={physicalSymptoms.includes("insomnia")}
                  onChange={() => handleCheckboxChangePhysical("insomnia")}
                />
                <span>Insomnia</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hypersomnia"
                  checked={physicalSymptoms.includes("hypersomnia")}
                  onChange={() => handleCheckboxChangePhysical("hypersomnia")}
                />
                <span>Hypersomnia</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="changesInAppetite"
                  checked={physicalSymptoms.includes("changesInAppetite")}
                  onChange={() =>
                    handleCheckboxChangePhysical("changesInAppetite")
                  }
                />
                <span>Changes in appetite</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="weightGainLoss"
                  checked={physicalSymptoms.includes("weightGainLoss")}
                  onChange={() =>
                    handleCheckboxChangePhysical("weightGainLoss")
                  }
                />
                <span>Weight gain/loss</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="panicAttacks"
                  checked={physicalSymptoms.includes("panicAttacks")}
                  onChange={() => handleCheckboxChangePhysical("panicAttacks")}
                />
                <span>Panic attacks</span>
              </div>
            </div>
            <label htmlFor="cognitiveSymptoms" className="label-review">Cognitive Symptoms:</label>
            <div className="yeschechbox-review">
              
              <div>
                <input
                  type="checkbox"
                  id="concentration"
                  checked={consnotiveSymptoms.includes("concentration")}
                  onChange={() =>
                    handleCheckboxChangeCognitive("concentration")
                  }
                />
                <label htmlFor="concentration">
                  Lacking the ability to concentrate
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="memoryImpairment"
                  checked={consnotiveSymptoms.includes("memoryImpairment")}
                  onChange={() =>
                    handleCheckboxChangeCognitive("memoryImpairment")
                  }
                />
                <label htmlFor="memoryImpairment">
                  Memory impairment, ruminating
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="thoughtsAboutDeath"
                  checked={consnotiveSymptoms.includes("thoughtsAboutDeath")}
                  onChange={() =>
                    handleCheckboxChangeCognitive("thoughtsAboutDeath")
                  }
                />
                <label htmlFor="thoughtsAboutDeath">
                  Pervasive thoughts about death and dying
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="inabilityToFocus"
                  checked={consnotiveSymptoms.includes("inabilityToFocus")}
                  onChange={() =>
                    handleCheckboxChangeCognitive("inabilityToFocus")
                  }y
                />
                <label htmlFor="inabilityToFocus">
                  Inability to focus on specific tasks
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="inabilityToFocus"
                  checked={consnotiveSymptoms.includes("specifictasks ")}
                  onChange={() =>
                    handleCheckboxChangeCognitive("inabilityToFocus")
                  }
                />
                <label htmlFor="inabilityToFocus">
                specific tasks 
                </label>
              </div>
            </div>
            <label htmlFor="" className="label-review">Psychosocial Symptoms: </label>
            <div className="yeschechbox-review">
              
              <div>
                <input
                  type="checkbox"
                  id="helplessness"
                  checked={psychosocialSymptoms.includes("helplessness")}
                  onChange={() =>
                    handleCheckboxChangePsychosocial("helplessness")
                  }
                />
                <label htmlFor="helplessness">Feeling of helplessness</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="worthlessness"
                  checked={psychosocialSymptoms.includes("worthlessness")}
                  onChange={() =>
                    handleCheckboxChangePsychosocial("worthlessness")
                  }
                />
                <label htmlFor="worthlessness">Worthlessness</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="depression"
                  checked={psychosocialSymptoms.includes("depression")}
                  onChange={() =>
                    handleCheckboxChangePsychosocial("depression")
                  }
                />
                <label htmlFor="depression">Depression</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="anxiety"
                  checked={psychosocialSymptoms.includes("anxiety")}
                  onChange={() => handleCheckboxChangePsychosocial("anxiety")}
                />
                <label htmlFor="anxiety">Anxiety</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="moodSwings"
                  checked={psychosocialSymptoms.includes("moodSwings")}
                  onChange={() =>
                    handleCheckboxChangePsychosocial("moodSwings")
                  }
                />
                <label htmlFor="moodSwings">Mood Swings</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="irritability"
                  checked={psychosocialSymptoms.includes("irritability")}
                  onChange={() =>
                    handleCheckboxChangePsychosocial("irritability")
                  }
                />
                <label htmlFor="irritability">Irritability</label>
              </div>
            </div>
            <label htmlFor="" className="label-review">Interventions that are being implemented:</label>
            <div className="yeschechbox-review">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Psychiatric services</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Communication Skills</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Verbal Prompt</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Interactive Feedback</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Encouragement</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Role-Play</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Sponsors, and support programs & people</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Review of Treatment Plan</span>
              </div>
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
              <div>
                <input type="checkbox" name="" id="" />
                <span> Values clarification, Psycho-education,</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Exploring feelings</span>
              </div>
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
            <div className="yeschechbox-review">
              <div>
                <span>Total of Minimum</span>
              </div>
              <div>
                <span>Hours per Week</span>
              </div>
            </div>
            <div className="yeschechbox-review">
              <label htmlFor="">Individual: </label>
              <div>
                <span>Minimum 1 hour session per week</span>
              </div>
            </div>
            <div className="yeschechbox-review">
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
            <label htmlFor="" className="label-review">
                Resident overall participation in treatment:{" "}
              </label>
            <div className="yeschechbox-review">
             
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

            <label htmlFor="" className="label-review">Resident Attitude:</label>
            <div className="yeschechbox-review">
             
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
            <label htmlFor="" className="label-review">Resident progress:</label>
            <div className="yeschechbox-review">
              
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
            <label htmlFor="" className="label-review">Support System:</label>
            <div className="yeschechbox-review">
              
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
            <label htmlFor="" className="label-review">Religious Preference:</label>
            <div className="yeschechbox-review">
              
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
            <label htmlFor="" className="label-review">
                Discharge planning & Re-evaluation of initial symptoms,
                behaviours & Goals
              </label>
            <div className="yeschechbox2-horizontal">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Follow-up Medical appointments upon discharge</span>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Submit application for higher or lower level of care.
                </span>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Continue with Psychiatric Provider</span>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Continue with Primary Care Provider (PCP)</span>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
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
                className="label-review"
                // style={{ color: "#00000080", fontWeight: "600" }}
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
                
              />
            </div>
            <label htmlFor="" className="label-review">
                Recommendations for further programs upon discharge:
              </label>
          
            <div className="yeschechbox-review">
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
            <label htmlFor="" className="label-review">
                After care and Transition planning / Community Resources:
              </label>
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
            {/* <div className="form-field">
              <label htmlFor="gender">
                Clinical Summary/Recommendations/Intervention:
              </label>
              <select id="gender" value="" required>
                <option value="">Select</option>
                <option value="Male">Select</option>
                <option value="Female">Select</option>
              </select>
            </div> */}
            <div className="formsheading">
              <p>
                The mirrors in the facility are SHATTERPROOF, and if they were
                standard mirrors it would not present as a current safety risk
                to this resident.
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS" className="label-review">Treatment plan review date</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
                
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
              <label htmlFor="AHCCCS" className="label-review">Discharge Plan Date:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
                
              />
            </div>
            <div className="formsheading">
              <h6>Individual Participating in Developing the Service Plan</h6>
            </div>
            <label htmlFor="" className="label-review">Resident / Representative</label>
            <div className="yeschechbox-review">
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
            <div className="yeschechbox-review">
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
            {/* /"signaturesResident */}

            <div className="formsheading">
              <h6>
                signatures Resident participation and informed consent for
                treatment services.
              </h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">First and Last Name</label>
              <input
                type="text"
                id="AHCCCS"
                value={nameResident}
                placeholder="Enter your Lorem Ipsum"
                required
                onChange={(e) => setNameResident(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Resident or Resident’s representative
              </label>
              <input
                type="text"
                id="AHCCCS"
                value={credentialsResident}
                placeholder="Enter your Lorem Ipsum"
                required
                onChange={(e) => setCredentialsResident(e.target.value)}
              />
            </div>
            <div class="file-upload-box">
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <div class="upload-icon" onClick={() => setSignatureModel1(true)}>
                {/* [signatureResident, setsignatureResident] = useState("") */}
                <img
                  src={formupload}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div style={{ display: "block" }}>
                <button className="upload-button1">SAVED AS DRAFT</button>
                <button className="upload-button">SAVED AND SIGNED</button>
              </div>
            </div>
            <div className="form-field">
              <label >Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
             
                value={dateResident}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDateResident(e.target.value)}
              />
            </div>
          </div>
          {/*   "signaturesFacilityRep": */}
          <div className="formsheading">
            <h6>
              signatures FacilityRep participation and informed consent for
              treatment services.
            </h6>
          </div>
          <div className="form-field">
            <label >First and Last Name</label>
            <input
              type="text"
              id="AHCCCS"
              value={nameFacilityRep}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setNameFacilityRep(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="AHCCCS">
              Resident or Resident’s representative
            </label>
            <input
              type="text"
              id="AHCCCS"
              value={credentialsFacilityRep}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setCredentialsFacilityRep(e.target.value)}
            />
          </div>
          <div class="file-upload-box">
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <div class="upload-icon" onClick={() => setSignatureModel2(true)}>
              {/* const [signatureFacilityRep, setsignatureFacilityRep] = useState(""); */}
              <img
                src={formupload}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div style={{ display: "block" }}>
              <button className="upload-button1">SAVED AS DRAFT</button>
              <button className="upload-button">SAVED AND SIGNED</button>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="dateOfBirth">Date:</label>
            <input
              style={{ color: "#1A9FB2" }}
              type="date"
              id="dateOfBirth"
              value={dateFacilityRep}
              placeholder="DD/MM/YYYY"
              required
              onChange={(e) => setDateFacilityRep(e.target.value)}
            />
          </div>
       
          <div className="formsheading">
            <h6>
              Signatures Bhp participation and informed consent for treatment
              services.
            </h6>
          </div>
          <div className="form-field">
            <label htmlFor="AHCCCS">First and Last Name</label>
            <input
              type="text"
              id="AHCCCS"
              value={nameBhp}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setNameBhp(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="AHCCCS">
              Resident or Resident’s representative
            </label>
            <input
              type="text"
              id="AHCCCS"
              value={credentialsBhp}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setCredentialsBhp(e.target.value)}
            />
          </div>
          <div class="file-upload-box">
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <div class="upload-icon" onClick={() => setSignatureModel3(true)}>
              <img
                src={formupload}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div style={{ display: "block" }}>
              <button className="upload-button1">SAVED AS DRAFT</button>
              <button className="upload-button">SAVED AND SIGNED</button>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="dateOfBirth">Date:</label>
            <input
              style={{ color: "#1A9FB2" }}
              type="date"
              id="dateOfBirth"
              value={dateBhp}
              placeholder="DD/MM/YYYY"
              required
              onChange={(e) => setDateBhp(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="initalsubmit">
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>
      {/* signature 1 */}
      {signatureModel1 && (
        <SingInModel onClick={() => setSignatureModel1(false)}>
          <div className="input_singin_button">
            <p style={{ color: "white" }}>Digitally Sign by employee name</p>
            <input
              type="text"
              placeholder="Enter Sing in Signature"
              value={signatureResident}
              onChange={(e) => setsignatureResident(e.target.value)}
            />
          </div>

          <div className="sing_in_submit_button">
            <button type="button" onClick={() => setSignatureModel1(false)}>
              Submit
            </button>
          </div>
        </SingInModel>
      )}
      {/* signature 2 */}
      {signatureModel2 && (
        <SingInModel onClick={() => setSignatureModel2(false)}>
          <div className="input_singin_button">
            <p style={{ color: "white" }}>Digitally Sign by employee name</p>
            <input
              type="text"
              placeholder="Enter Sing in Signature"
              value={signatureFacilityRep}
              onChange={(e) => setsignatureFacilityRep(e.target.value)}
            />
          </div>

          <div className="sing_in_submit_button">
            <button type="button" onClick={() => setSignatureModel2(false)}>
              Submit
            </button>
          </div>
        </SingInModel>
      )}
      {/* signature3 */}
      {signatureModel3 && (
        <SingInModel onClick={() => setSignatureModel3(false)}>
          <div className="input_singin_button">
            <p style={{ color: "white" }}>Digitally Sign by employee name</p>
            <input
              type="text"
              placeholder="Enter Sing in Signature"
              value={signatureBhp}
              onChange={(e) => setsignatureBhp(e.target.value)}
            />
          </div>

          <div className="sing_in_submit_button">
            <button type="button" onClick={() => setSignatureModel3(false)}>
              Submit
            </button>
          </div>
        </SingInModel>
      )}
    </>
  );
};

export default TreatmentPlan;
