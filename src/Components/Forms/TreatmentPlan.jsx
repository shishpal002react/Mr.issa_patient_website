import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

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
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const [option3, setOption3] = useState([]);
  const [option4, setOption4] = useState([]);
  const [option5, setOption5] = useState([]);
  const [option6, setOption6] = useState([]);
  const [option7, setOption7] = useState([]);
  const [option8, setOption8] = useState([]);

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
    {
      label: "Trouble Falling / staying Asleep",
      value: "Trouble Falling / staying Asleep",
    },
    { label: "Mood Swings", value: "Mood Swings" },
    { label: "Social Withdrawals", value: "Social Withdrawals" },
    { label: "Changes in Eating habits", value: "Changes in Eating habits" },
    { label: "Feeling of anger", value: "Feeling of anger" },
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
    { label: "Team Work", value: "Team Work" },
  ];

  const strengthsHandler = (optionValue) => {
    setStrengths(optionValue);
  };

  //Barriers
  const BarriersOption = [
    { label: "Cognitive", value: "Cognitive" },
    { label: "Lack of Insight", value: "Lack of Insight" },
    { label: "Financial", value: "Financial" },
    { label: "Refusal of Treatment", value: "Refusal of Treatment" },
    { label: "Social Stigma", value: "Social Stigma" },
    { label: "Racial", value: "Racial" },
    {
      label: "Limited availibility to Mental Health awareness & Education",
      value: "Limited availibility to Mental Health awareness & Education",
    },
    {
      label: "Lack of Mental Health professionals & Services",
      value: "Lack of Mental Health professionals & Services",
    },
    {
      label: "Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations",
      value: "Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations",
    },
  ];

  const BarriersHandler = (optionValue) => {
    setBarriers(optionValue);
  };

  // Maintain sobriety. Drop Down
  // option1
  const option1Option = [
    {
      label: "Resident to maintain sobriety for the next 90 days",
      value: "Resident to maintain sobriety for the next 90 days",
    },
    {
      label:
        "Resident to learn and implement coping skills to support sobriety",
      value:
        "Resident to learn and implement coping skills to support sobriety",
    },
    {
      label: "Resident to learn relapse prevention skills",
      value: "Resident to learn relapse prevention skills",
    },
    {
      label: "Resident will develop for sobriety",
      value: "Resident will develop for sobriety",
    },
    {
      label: "Resident will maintain abstinence for at least the next 90 days",
      value: "Resident will maintain abstinence for at least the next 90 days",
    },
    {
      label: "Resident will complete step",
      value: "Resident will complete step",
    },
    {
      label: "Resident will report craving to staff on shift",
      value: "Resident will report craving to staff on shift",
    },
    {
      label: "Resident will know at least 3 triggers to substance use",
      value: "Resident will know at least 3 triggers to substance use",
    },
    {
      label:
        "Resident will learn and know the consequences associated with substance use",
      value:
        "Resident will learn and know the consequences associated with substance use",
    },
    {
      label:
        "Resident will participate with the clinical team for after planning",
      value:
        "Resident will participate with the clinical team for after planning",
    },
    {
      label:
        "Resident will involve family as a support system to help maintain sobriety",
      value:
        "Resident will involve family as a support system to help maintain sobriety",
    },
    {
      label: "Resident will attend self-help group (AA,NA,COA,)",
      value: "Resident will attend self-help group (AA,NA,COA,)",
    },
    {
      label: "Identify 4 positive friend that will support sobriety",
      value: "Identify 4 positive friend that will support sobriety",
    },
    {
      label: "Resident will refrain from drug seeking behaviors",
      value: "Resident will refrain from drug seeking behaviors",
    },
  ];

  const option1Handler = (optionValue) => {
    setOption1(optionValue);
  };

  // option2
  const option2Option = [
    {
      label: "Resident to learn coping skills to manage anxiety, depression",
      value: "Resident to learn coping skills to manage anxiety, depression",
    },
    {
      label: "Resident to learn skills to manage time",
      value: "Resident to learn skills to manage time",
    },
    {
      label: "Resident to learn how to open a bank account",
      value: "Resident to learn how to open a bank account",
    },
    {
      label: "Resident to learn how communicate assertively",
      value: "Resident to learn how communicate assertively",
    },
    {
      label:
        "Resident will learn how to identify triggers and address them accordingly",
      value:
        "Resident will learn how to identify triggers and address them accordingly",
    },
    {
      label:
        "Resident will be able to schedule own transportation to and from medical/psychiatric appointments or activities",
      value:
        "Resident will be able to schedule own transportation to and from medical/psychiatric appointments or activities",
    },
    {
      label: "Be able to manage and budget finances",
      value: "Be able to manage and budget finances",
    },
    {
      label: "Resident to attend 100% of scheduled appointments",
      value: "Resident to attend 100% of scheduled appointments",
    },
    {
      label: "Resident will develop coping skills on how to manage stress",
      value: "Resident will develop coping skills on how to manage stress",
    },
    {
      label: "Resident will learn how to make bed",
      value: "Resident will learn how to make bed",
    },
    {
      label: "Resident will obtain drivers license ",
      value: "Resident will obtain drivers license ",
    },
    {
      label:
        "Resident to recognize the difference between healthy and unhealthy boundaries",
      value:
        "Resident to recognize the difference between healthy and unhealthy boundaries",
    },
  ];

  const option2Handler = (optionValue) => {
    setOption2(optionValue);
  };

  // option3
  const option3Option = [
    { label: "Resident to Create resume", value: "Resident to Create resume" },
    {
      label: "Resident will Call, email, or contact ",
      value: "Resident will Call, email, or contact ",
    },
    {
      label: "Resident to learn mock interview",
      value: "Resident to learn mock interview",
    },
  ];

  const option3Handler = (optionValue) => {
    setOption3(optionValue);
  };
  // option4
  const option4Option = [
    {
      label: "Resident will shower at least every other day without prompt",
      value: "Resident will shower at least every other day without prompt",
    },
    {
      label: "Resident will learn how to prepare basic meal",
      value: "Resident will learn how to prepare basic meal",
    },
    {
      label:
        "Resident will brush teeth at least every other day without prompt",
      value:
        "Resident will brush teeth at least every other day without prompt",
    },
    {
      label: "Complete laundry independently",
      value: "Complete laundry independently",
    },
    {
      label:
        "Resident will develop skills to independently do laundry, sort, wash and dry clothing.",
      value:
        "Resident will develop skills to independently do laundry, sort, wash and dry clothing.",
    },
    ,
  ];

  const option4Handler = (optionValue) => {
    setOption4(optionValue);
  };
  // option5
  const option5Option = [
    {
      label: "Resident will create a safety plan",
      value: "Resident will create a safety plan",
    },
    {
      label: "Resident will contract for safety",
      value: "Resident will contract for safety",
    },
    {
      label: "Resident will not elope from the facility for the next 30 days",
      value: "Resident will not elope from the facility for the next 30 days",
    },
    {
      label: "Resident will learn not to touch hot items or spark objects",
      value: "Resident will learn not to touch hot items or spark objects",
    },
    {
      label: "Resident will be aware of surroundings when going on outing",
      value: "Resident will be aware of surroundings when going on outing",
    },
    {
      label:
        "Resident will identify dangers that involves wondering off from the facility",
      value:
        "Resident will identify dangers that involves wondering off from the facility",
    },
  ];

  const option5Handler = (optionValue) => {
    setOption5(optionValue);
  };
  // option6
  const option6Option = [
    {
      label: "Resident to take all prescribed medications",
      value: "Resident to take all prescribed medications",
    },
    {
      label: "Resident will learn all names of her medications",
      value: "Resident will learn all names of her medications",
    },
    {
      label:
        "Resident will self-administer medications with supervision without errors",
      value:
        "Resident will self-administer medications with supervision without errors",
    },
    {
      label: "Resident will take medications in a timely manner",
      value: "Resident will take medications in a timely manner",
    },
    {
      label:
        "Resident will learn how to order medication refills from the pharmacy",
      value:
        "Resident will learn how to order medication refills from the pharmacy",
    },
  ];

  const option6Handler = (optionValue) => {
    setOption6(optionValue);
  };
  //option7
  const option7Option = [
    {
      label:
        "Resident to learn how to utilize coping skills to manage mental health symptoms",
      value:
        "Resident to learn how to utilize coping skills to manage mental health symptoms",
    },
    {
      label: "Resident to learn how to utilize EMS appropriately",
      value: "Resident to learn how to utilize EMS appropriately",
    },
    {
      label:
        "Resident verbalizes an understanding of diagnoses, and their impact",
      value:
        "Resident verbalizes an understanding of diagnoses, and their impact",
    },
    {
      label:
        "Resident to reduce the frequency of maladaptive behaviors, thoughts and feelings that affects quality of daily life",
      value:
        "Resident to reduce the frequency of maladaptive behaviors, thoughts and feelings that affects quality of daily life",
    },
  ];

  const option7Handler = (optionValue) => {
    setOption7(optionValue);
  };
  //option8
  const option8Option = [
    {
      label: "Resident will attend all court appointments",
      value: "Resident will attend all court appointments",
    },
    {
      label:
        "Resident will attend all scheduled appointment with probation/parole officer",
      value:
        "Resident will attend all scheduled appointment with probation/parole officer",
    },
  ];

  const option8Handler = (optionValue) => {
    setOption8(optionValue);
  };

//yeschechbox2-horizontal
const [clinicalSummary,setClinicalSummary]=useState([])
const clinicalSummaryOption=[
  {label  :"Resident to continue to attend treatment with the facility" , value:"Resident to continue to attend treatment with the facility"},
  {label  :"Resident to continue to attend schedule appointments with PCP, Psychiatric provider, and specialist" , value:"Resident to continue to attend schedule appointments with PCP, Psychiatric provider, and specialist"},
  {label  :"Resident will contract for safety while in the program" , value:"Resident will contract for safety while in the program"},
]

const clinicalSummaryHandler=(optionValue)=>{
  setClinicalSummary(optionValue)
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
            <h2 style={{ marginTop: "1rem" }}>Resident Details</h2>
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
            <label htmlFor="" className="label-review">
              Mental Status:
            </label>
            <div className="yeschechbox-review">
              <div>
                <input
                  type="checkbox"
                  id="oriented"
                  checked={mendelHealth === "oriented"}
                  onChange={() => handleCheckboxChangeMentalHealth("oriented")}
                />
                <label htmlFor="oriented">Oriented</label>
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
            <label htmlFor="" className="label-review">
              Mood Level:
            </label>
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
            <label htmlFor="" className="label-review">
              ADLS:
            </label>
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
            <label htmlFor="" className="label-review">
              Behavioral Health Services:
            </label>
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
              <label className="label-review">Psychiatric Provider:</label>
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
              <label htmlFor="" className="label-review">
                Strengths
              </label>

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
            <label htmlFor="" className="label-review">
              Behavioral Symptoms:
            </label>
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
                  checked={behavioralSymptoms.includes(
                    "nolongerenjoyingpreviousactivities"
                  )}
                  onChange={() =>
                    handleCheckboxChangeBehavioral(
                      "Nolongerenjoyingpreviousactivities"
                    )
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
                  onChange={() => handleCheckboxChangeBehavioral("aboutdeath")}
                />
                <span>About death </span>
              </div>
            </div>
            <label htmlFor="" className="label-review">
              Physical Symptoms:
            </label>
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
            <label htmlFor="cognitiveSymptoms" className="label-review">
              Cognitive Symptoms:
            </label>
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
                  checked={consnotiveSymptoms.includes(
                    "pervasivethoughtsaboutdeathanddying"
                  )}
                  onChange={() =>
                    handleCheckboxChangeCognitive(
                      "pervasivethoughtsaboutdeathanddying"
                    )
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
                  checked={consnotiveSymptoms.includes(
                    "inabilitytofocusonspecifictasks"
                  )}
                  onChange={() =>
                    handleCheckboxChangeCognitive(
                      "inabilitytofocusonspecifictasks"
                    )
                  }
                  y
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
                    handleCheckboxChangeCognitive("specifictasks")
                  }
                />
                <label htmlFor="inabilityToFocus">Specific tasks</label>
              </div>
            </div>
            <label htmlFor="" className="label-review">
              Psychosocial Symptoms:{" "}
            </label>
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
            <label htmlFor="" className="label-review">
              Interventions that are being implemented:
            </label>
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
            {/* <div className="yeschechbox-review">
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
            </div> */}
            <div className="yeschechbox-review">
            <div>
                <input type="checkbox" name="" id="" />
                <span>Group</span>
              </div>
            <div>
                <input type="checkbox" name="" id="" />
                <span>3 times a day</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>4 times a day</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Individual Counseling: Minimum 1 hour session per week </span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Individual Therapy: As needed</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Resident decline individual therapy services</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Family Counseling</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>NA</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>AA</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Month ART Meeting/Staffing</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Weekly ART Meeting/Staffing   </span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Other</span>
              </div>
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            {/* <div className="yeschechbox-review">
              <label htmlFor="">Individual: </label>
              <div>
                <span>As needed</span>
              </div>
            </div> */}
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
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                1. Maintain Sobriety
              </label>
              <Select
                isMulti
                options={option1Option}
                value={option1}
                onChange={option1Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                2. Independent Living Skills
              </label>
              <Select
                isMulti
                options={option2Option}
                value={option2}
                onChange={option2Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                3. Employment
              </label>
              <Select
                isMulti
                options={option3Option}
                value={option3}
                onChange={option3Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                4. ADLS
              </label>
              <Select
                isMulti
                options={option4Option}
                value={option4}
                onChange={option4Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                5. Safety
              </label>
              <Select
                isMulti
                options={option5Option}
                value={option5}
                onChange={option5Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                6. Medication Education
              </label>
              <Select
                isMulti
                options={option6Option}
                value={option6}
                onChange={option6Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                7. Managing Mental Health
              </label>
              <Select
                isMulti
                options={option7Option}
                value={option7}
                onChange={option7Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
            </div>
            <div className="form-field">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                8. Legal
              </label>
              <Select
                isMulti
                options={option8Option}
                value={option8}
                onChange={option8Handler}
              />
            </div>
            <div className="form-field">
              <label>Name</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Admission Messure"
                required
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Previous Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter Current Messure"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                // value={name}
                placeholder="Enter Estimete Date of complition"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value=""
                placeholder="Enter text"
                rows={3}
                cols={82}
                required
              />
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

            <label htmlFor="" className="label-review">
              Resident Attitude:
            </label>
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
            <label htmlFor="" className="label-review">
              Resident progress:
            </label>
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
            <label htmlFor="" className="label-review">
              Support System:
            </label>
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
            <div className="form-field">
            <label htmlFor="programlocation&address">Comment:</label>
            <textarea
              id="programlocation&address"
              value=""
              placeholder="Enter text"
              rows={5}
              cols={82}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="admissionDate">Current List of medication: </label>
            <input
              style={{ color: "#1A9FB2" }}
              type="text"
              id="dateOfBirth"
              // value={name}
              placeholder="Enter name"
              required
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
            <label htmlFor="" className="label-review">
              Religious Preference:
            </label>
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
                <span>Islam</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Judaism</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Hinduism</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Mormonism</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Other</span>
              </div>
            </div>
            <div className="form-field">
            <label htmlFor="programlocation&address">Comment:</label>
            <textarea
              id="programlocation&address"
              value=""
              placeholder="Enter text"
              rows={3}
              cols={82}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="admissionDate">Nutrition and wellness Planning: </label>
            <input
              style={{ color: "#1A9FB2" }}
              type="text"
              id="dateOfBirth"
              // value={name}
              placeholder="Enter name"
              required
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label className="label-review">Recommendation to extend residential treatment for : </label>
          <div className="yeschechbox-review">
              <div>
                <input type="checkbox" name="" id="" />
                <span>30 Days</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>60 Days</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>90 Days</span>
              </div>
             
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Resident requires Assistance to maintain personal funds and/or hand personal finances</span>
              </div>
            </div>
            <label htmlFor="" className="label-review">
              Discharge planning & Re-evaluation of initial symptoms, behaviours
              & Goals
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
            <div className="yeschechbox2-horizontal">
             
              <div>
                <input type="checkbox" name="" id="" />
                <span>National suicide hotline 988 or 1-800-273-8255</span>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
        
              <div>
                <input type="checkbox" name="" id="" />
                <span>Emergency care 911</span>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
 
              <div>
                <input type="checkbox" name="" id="" />
                <span>24-Hour crisis in Maricopa County 602-222-9444</span>
              </div>
            </div>

            <div className="yeschechbox2">
             
              <div>
                
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
            
            <div className="formsheading">
            <label className="label-review">
                Clinical Summary 
                /Recommendations/Intervention:
              </label>
              </div>
            
            <div className="form-field">
            <Select
             isMulti
             value={clinicalSummary}
             options={clinicalSummaryOption}
             onChange={clinicalSummaryHandler}
             />
            </div>
            
            
            <div className="formsheading">
              <p>
                The mirrors in the facility are SHATTERPROOF, and if they were
                standard mirrors it would not present as a current safety risk
                to this resident.
              </p>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS" className="label-review">
                Treatment plan review date
              </label>
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
              <label htmlFor="AHCCCS" className="label-review">
                Discharge Plan Date:
              </label>
              <input
                type="date"
                id="AHCCCS"
                value=""
                placeholder="Enter your Lorem Ipsum"
              />
            </div>
            <div className="formsheading">
              <h6>Individual Participating in Developing the Service Plan</h6>
            </div>
            <div className="form-field">
              <label>Resident</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Staff</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>BHP</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                // value={name}
                placeholder="Enter name"
                required
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          


            <label htmlFor="" className="label-review">
              Resident / Representative
            </label>
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
            
              <div style={{ display: "block" }}>
                <button className="upload-button1" type="button" onClick={() => setSignatureModel1(true)}>SAVED AS DRAFT</button>
                <button className="upload-button" type="button" onClick={() => setSignatureModel1(true)}>SAVED AND SIGNED</button>
              </div>
            </div>
            <div className="form-field">
              <label>Date:</label>
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
            <label>First and Last Name</label>
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
         
            <div style={{ display: "block" }}>
              <button className="upload-button1" type="button" onClick={() => setSignatureModel2(true)}>SAVED AS DRAFT</button>
              <button className="upload-button" type="button" onClick={() => setSignatureModel2(true)}>SAVED AND SIGNED</button>
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
         
            <div style={{ display: "block" }}>
              <button className="upload-button1" type="button"  onClick={() => setSignatureModel3(true)}>SAVED AS DRAFT</button>
              <button className="upload-button" type="button"  onClick={() => setSignatureModel3(true)}>SAVED AND SIGNED</button>
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
        <SingInModel onClose={() => setSignatureModel2(false)}>
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
        <SingInModel onClose={() => setSignatureModel3(false)}>
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
