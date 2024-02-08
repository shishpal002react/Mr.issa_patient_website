import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { user_detail, patient_form } from "../../Api_Collection/Api";
import SingInModel from "../Modal/SingInModel";
import Select from "react-select";
import Draftinmodel from "../Modal/Draftinmodel";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import { useReactToPrint } from "react-to-print";


const TreatmentPlan = () => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // model data
  const [draftModel,setDraftModel]=useState(false);
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
 
// Counseling and Frequency : Total of minimum Blank ___hours daily
const [minimumHoure,setMinimumHoure]=useState("")
const [counselingOptions, setCounselingOptions] = useState([]);
const [counselingOptionsText,setCounselingOptionsOther]=useState("");
const [counselingOptionsTextBoolean,setCounselingOptionsTextBoolean]=useState(false)

  //Goals for Changes in the Resident Phychorial Interaction or Behaviour
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const [option3, setOption3] = useState([]);
  const [option4, setOption4] = useState([]);
  const [option5, setOption5] = useState([]);
  const [option6, setOption6] = useState([]);
  const [option7, setOption7] = useState([]);
  const [option8, setOption8] = useState([]);


//option1
const [admissionMeasure1,setAdmissionMeasure1]=useState("")
const [previousMeasure1,setPreviousMeasure1]=useState("")
const [currentMeasure1,setCurrentMeasure1]=useState("")
const [estimatedDateOfCompletion1,setEstimatedDateOfCompletion1]=useState("")
const [comments1,setComment1]=useState("");
// option3
const [admissionMeasure2,setAdmissionMeasure2]=useState("")
const [previousMeasure2,setPreviousMeasure2]=useState("")
const [currentMeasure2,setCurrentMeasure2]=useState("")
const [estimatedDateOfCompletion2,setEstimatedDateOfCompletion2]=useState("")
const [comments2,setComment2]=useState("");
// option 42
const [admissionMeasure3,setAdmissionMeasure3]=useState("")
const [previousMeasure3,setPreviousMeasure3]=useState("")
const [currentMeasure3,setCurrentMeasure3]=useState("")
const [estimatedDateOfCompletion3,setEstimatedDateOfCompletion3]=useState("")
const [comments3,setComment3]=useState("");
//option4
const [admissionMeasure4,setAdmissionMeasure4]=useState("")
const [previousMeasure4,setPreviousMeasure4]=useState("")
const [currentMeasure4,setCurrentMeasure4]=useState("")
const [estimatedDateOfCompletion4,setEstimatedDateOfCompletion4]=useState("")
const [comments4,setComment4]=useState("");
//option5
const [admissionMeasure5,setAdmissionMeasure5]=useState("")
const [previousMeasure5,setPreviousMeasure5]=useState("")
const [currentMeasure5,setCurrentMeasure5]=useState("")
const [estimatedDateOfCompletion5,setEstimatedDateOfCompletion5]=useState("")
const [comments5,setComment5]=useState("");
//option 65
const [admissionMeasure6,setAdmissionMeasure6]=useState("")
const [previousMeasure6,setPreviousMeasure6]=useState("")
const [currentMeasure6,setCurrentMeasure6]=useState("")
const [estimatedDateOfCompletion6,setEstimatedDateOfCompletion6]=useState("")
const [comments6,setComment6]=useState("");
//option7
const [admissionMeasure7,setAdmissionMeasure7]=useState("")
const [previousMeasure7,setPreviousMeasure7]=useState("")
const [currentMeasure7,setCurrentMeasure7]=useState("")
const [estimatedDateOfCompletion7,setEstimatedDateOfCompletion7]=useState("")
const [comments7,setComment7]=useState("");
//option 876
const [admissionMeasure8,setAdmissionMeasure8]=useState("")
const [previousMeasure8,setPreviousMeasure8]=useState("")
const [currentMeasure8,setCurrentMeasure8]=useState("")
const [estimatedDateOfCompletion8,setEstimatedDateOfCompletion8]=useState("")
const [comments8,setComment8]=useState("");


  //Resident overall participation in treatment:
  const [residentParticipation, setResidentParticipation] = useState("");
  const [residentAttitute, setResidentAttitute] = useState("");
  const [residentProgress, setResidentProgress] = useState("");
  const [supportSystem, setSupportSystem] = useState([]);
  const [supportSystemOtherText,setSupportSystemOtherText]=useState("")
  const [supportSystemOtherTextBoolean,setSupportSystemOtherTextBoolean]=useState(false)
  const [currentMedications,setCurrentMedications]=useState("")
  const [religiousPreference, setreligiousPreference] = useState("");
  const [religiousPreferenceText,setReligiousPreferenceText]=useState("")
  const [nutritionAndWellnessPlanning,setNutritionAndWellnessPlanning]=useState("")
  const [recommendationToExtendResidentialTreatment,setRecommendationToExtendResidentialTreatment]=useState("")
  const [personalFinances,setPersonalFinances]=useState(false)
  const [dischargePlanning,setDischargePlanning]=useState("")
  const [additionalComment,setAdditionalComment]=useState("");
  const [recommendationsForFurtherPrograms,setRecommendationsForFurtherPrograms]=useState([])
  const [afterCareAndTransitionPlanning,setAfterCareAndTransitionPlanning]=useState([])
  
  //Clinical Summary/Recommendations/Intervention:
  const [clinicalSummary,setClinicalSummary]=useState([])
  const [treatmentPlanReviewDate,setTreatmentPlanReviewDate]=useState("")
  const [dischargePlanDate,setDischargePlanDate]=useState("")
  //Individual Participating in Developing the Service Plan
  const [resident, setResident] = useState("");
  const [guardian, setGuardian] = useState("");
  const [staff, setStaff] = useState("");
  const [bpn, setBph] = useState("");
  //isReason
  const [isReason,setIsReason]=useState("no");
  const [refusalReason,setrefusalReason]=useState("");
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

  
  const handleCheckboxChange = (value) => {
    // Check if the value is already in the array
    const isValueChecked = interventionsImplemented.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedInterventions = isValueChecked
      ? interventionsImplemented.filter((item) => item !== value)
      : [...interventionsImplemented, value];

    setInterventionsImplemented(updatedInterventions);
  };

  const handleCheckboxChangeCounsiling = (value) => {
    // Check if the value is already in the array
    const isValueChecked = counselingOptions.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedCounselingOptions = isValueChecked
      ? counselingOptions.filter((item) => item !== value)
      : [...counselingOptions, value];

    setCounselingOptions(updatedCounselingOptions);
  };

  //suppost system handle
  const handleCheckboxChangeSupportSystem = (value) => {
    // Check if the value is already in the array
    const isValueChecked = supportSystem.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedSupportSystem = isValueChecked
      ? supportSystem.filter((item) => item !== value)
      : [...supportSystem, value];

    setSupportSystem(updatedSupportSystem);
  };

  const handleCheckboxChangerecommendationsForFurtherPrograms = (value) => {
    // Check if the value is already in the array
    const isValueChecked = recommendationsForFurtherPrograms.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedRecommendations = isValueChecked
      ? recommendationsForFurtherPrograms.filter((item) => item !== value)
      : [...recommendationsForFurtherPrograms, value];

      setRecommendationsForFurtherPrograms(updatedRecommendations);
  };

  const handleCheckboxChangeafterCareAndTransitionPlanning = (value) => {
    // Check if the value is already in the array
    const isValueChecked = afterCareAndTransitionPlanning.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedEmergencyContacts = isValueChecked
      ? afterCareAndTransitionPlanning.filter((item) => item !== value)
      : [...afterCareAndTransitionPlanning, value];

      setAfterCareAndTransitionPlanning(updatedEmergencyContacts);
  };


  useEffect(() => {
    for (let i = 0; i < counselingOptions.length; i++) {
      if(counselingOptions[i]==="Other") {
        setCounselingOptionsTextBoolean(true);
        break; 
      }else{
        setCounselingOptionsTextBoolean(false);
      }
    }
    for (let i = 0; i < supportSystem.length; i++) {
      if(supportSystem[i]==="Other") {
        setSupportSystemOtherTextBoolean(true);
        break; 
      }else{
        setSupportSystemOtherTextBoolean(false);
      }
    }
  }, [counselingOptions,supportSystem]);
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
    <div ref={componentRef} >
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
                rows={2}
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
                  <label htmlFor="behavioralCheckbox" style={{fontSize:"13px"}}>Physical Services</label>
                </div>
                <div className="genderbox">
                  <input
                    type="checkbox"
                    checked={behavior}
                    onChange={() => setBehavior(!behavior)}
                    id="behavioralCheckbox"
                  />
                  <label htmlFor="behavioralCheckbox" style={{fontSize:"13px"}}>
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
            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>
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
                  rows={2}
                  cols={130}
                  placeholder="Enter text."
                  required
                  onChange={(e) => setMentelText(e.target.value)}
                />
              </div>
            )}
            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>
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
                  rows={2}
                  cols={130}
                  placeholder="Enter text."
                  required
                  onChange={(e) => setMindText(e.target.value)}
                />
              </div>
            )}
            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>
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
                rows={2}
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
                rows={2}
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
                rows={2}
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
                rows={2}
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
                <label htmlFor="selfInjuring">Self-injuring</label>
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
                <label htmlFor="recklessBehavior">Reckless behavior</label>
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
                <label htmlFor="impulsiveBehaviors">Impulsive behaviors</label>
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
                <label htmlFor="socialIsolation">Social isolation</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="nolongerenjoyingpreviousactivities"
                  checked={behavioralSymptoms.includes(
                    "nolongerenjoyingpreviousactivities"
                  )}
                  onChange={() =>
                    handleCheckboxChangeBehavioral(
                      "Nolongerenjoyingpreviousactivities"
                    )
                  }
                />
                <label htmlFor="nolongerenjoyingpreviousactivities">No longer enjoying previous activities </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="talkingorwriting"
                  checked={behavioralSymptoms.includes("talkingorwriting")}
                  onChange={() =>
                    handleCheckboxChangeBehavioral("talkingorwriting")
                  }
                />
                <label htmlFor="talkingorwriting">Talking, or writing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="aboutdeath"
                  checked={behavioralSymptoms.includes("aboutdeath")}
                  onChange={() => handleCheckboxChangeBehavioral("aboutdeath")}
                />
                <label htmlFor="aboutdeath">About death </label>
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
                <label htmlFor="insomnia">Insomnia</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hypersomnia"
                  checked={physicalSymptoms.includes("hypersomnia")}
                  onChange={() => handleCheckboxChangePhysical("hypersomnia")}
                />
                <label htmlFor="hypersomnia">Hypersomnia</label>
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
                <label htmlFor="changesInAppetite">Changes in appetite</label>
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
                <label htmlFor="weightGainLoss">Weight gain/loss</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="panicAttacks"
                  checked={physicalSymptoms.includes("panicAttacks")}
                  onChange={() => handleCheckboxChangePhysical("panicAttacks")}
                />
                <label htmlFor="panicAttacks">Panic attacks</label>
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
            {[
          "Psychiatric services",
          "Communication Skills",
          "Verbal Prompt",
          "Interactive Feedback",
          "Encouragement",
          "Role-Play",
          "Sponsors, and support programs & people",
          "Review of Treatment Plan",
          "Relaxation techniques",
          "Reframing",
          "Conflict resolution",
          "Rehearsal, Spiritual exploration",
          "Values clarification, Psycho-education",
          "Exploring feelings",
          "Distraction",
          "Redirection",
        ].map((intervention, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`interventionCheckbox${index}`}
              checked={interventionsImplemented.includes(intervention)}
              onChange={() => handleCheckboxChange(intervention)}
            />
            <label htmlFor={`interventionCheckbox${index}`}>{intervention}</label>
          </div>
        ))}
            </div>

            <div className="formsheading">
              <h6>Counseling Frequency</h6>
            </div>

            <div className="formsheading">
              <p className="inLine_box_style"><p>Total of minimum </p> <div>
              <input
              style={{ outline: "none", border: "none" }}
                placeholder="__________"
                id="input-text_value3"
                type="text"
                value={minimumHoure}
                required
                onChange={(e) => setMinimumHoure(e.target.value)}
              />
            </div><p>hours daily.</p></p>
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
            <div>
  
      
      <div className="yeschechbox-review">
        {[
          "Group",
          "3 times a day",
          "4 times a day",
          "Individual Counseling: Minimum 1 hour session per week",
          "Individual Therapy: As needed",
          "Resident decline individual therapy services",
          "Family Counseling",
          "NA",
          "AA",
          "Month ART Meeting/Staffing",
          "Weekly ART Meeting/Staffing",
          "Other",
        ].map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`counselingCheckbox${index}`}
              checked={counselingOptions.includes(option)}
              onChange={() => handleCheckboxChangeCounsiling(option)}
            />
            <label htmlFor={`counselingCheckbox${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>

    {
  counselingOptionsTextBoolean && (
    <div className="form-field">
    <label>Comment:</label>
    <textarea
      value={counselingOptionsText}
      placeholder="Enter text"
      rows={2}
      cols={82}
      required
      onChange={(e)=>setCounselingOptionsOther(e.target.value)}
    />
  </div>
  )
}
           
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure1}
                placeholder="Admission Messure"
                required
                onChange={(e) => setAdmissionMeasure1(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure1}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure1(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure1}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure1(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion1}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion1(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments1}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment1(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure2}
                placeholder="Admission Messure"
                required
                 onChange={(e) => setAdmissionMeasure2(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure2}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure2(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure2}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure2(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion2}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion2(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments2}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment2(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure3}
                placeholder="Admission Messure"
                required
              onChange={(e) => setAdmissionMeasure3(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure3}
                placeholder="Enter Previous Messure"
                required
               onChange={(e) => setPreviousMeasure3(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure3}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure3(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion3}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion3(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments3}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment3(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure4}
                placeholder="Admission Messure"
                required
                  onChange={(e) => setAdmissionMeasure4(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure4}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure4(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure4}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure4(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion4}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion4(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments4}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment4(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure5}
                placeholder="Admission Messure"
                required
                  onChange={(e) => setAdmissionMeasure5(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure5}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure5(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure5}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure5(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion5}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion5(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments5}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment5(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure6}
                placeholder="Admission Messure"
                required
                  onChange={(e) => setAdmissionMeasure6(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure6}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure6(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure6}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure6(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion6}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion6(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments6}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment6(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure7}
                placeholder="Admission Messure"
                required
                  onChange={(e) => setAdmissionMeasure7(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure7}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure7(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure7}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure7(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion7}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion7(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments7}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment7(e.target.value)}
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
              <label>Admission Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={admissionMeasure8}
                placeholder="Admission Messure"
                required
                  onChange={(e) => setAdmissionMeasure8(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Previous Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={previousMeasure8}
                placeholder="Enter Previous Messure"
                required
                onChange={(e) => setPreviousMeasure8(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Current Messure</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={currentMeasure8}
                placeholder="Enter Current Messure"
                required
                onChange={(e) => setCurrentMeasure8(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Estimete Date of complition</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={estimatedDateOfCompletion8}
                placeholder="Enter Estimete Date of complition"
                required
                onChange={(e) => setEstimatedDateOfCompletion8(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Comment:</label>
              <textarea
                value={comments8}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setComment8(e.target.value)}
              />
            </div>
           
           
            <div className="yeschechbox-review-treatment">
            <div>
            <label style={{fontSize:"1.2rem"}} >
              Resident overall participation in treatment:{" "}
            </label>
            </div>
            <div className="yeschechbox-review-treatment-child">
              <div className="checkbox-style-data">
                <input type="checkbox" id="100%" checked={residentParticipation==="100%"} onChange={()=>setResidentParticipation("100%")} />
                <label htmlFor="100%">100%</label>
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="75%" checked={residentParticipation==="75%"} onChange={()=>setResidentParticipation("75%")} />
                <label htmlFor="100%">75%</label>
                
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="50%" checked={residentParticipation==="50%"} onChange={()=>setResidentParticipation("50%")} />
                <label htmlFor="50%">50%</label>
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="25%" checked={residentParticipation==="25%"} onChange={()=>setResidentParticipation("25%")} />
                <label htmlFor="25%">25%</label>
                
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="≤5%" checked={residentParticipation==="≤5%"} onChange={()=>setResidentParticipation("≤5%")} />
                <label htmlFor="≤5%">≤5%</label>
              </div>
              </div>
            </div>

            
            <div className="yeschechbox-review-treatment">
              <div><label style={{fontSize:"1.2rem"}} >
              Resident Attitude:
            </label></div>
            <div  className="yeschechbox-review-treatment-child ">
              <div className="checkbox-style-data">
              <input type="checkbox" id="Attentive" checked={residentAttitute==="Attentive"} onChange={()=>setResidentAttitute("Attentive")} />
                <label htmlFor="Attentive">Attentive</label>
                
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Supportive" checked={residentAttitute==="Supportive"} onChange={()=>setResidentAttitute("Supportive")} />
                <label htmlFor="Supportive">Supportive</label>
                
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Sharing" checked={residentAttitute==="Sharing"} onChange={()=>setResidentAttitute("Sharing")} />
                <label htmlFor="Sharing">Sharing</label>
              
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Intrusive" checked={residentAttitute==="Intrusive"} onChange={()=>setResidentAttitute("Intrusive")} />
                <label htmlFor="Intrusive">Intrusive</label>
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Resistant" checked={residentAttitute==="Resistant"} onChange={()=>setResidentAttitute("Resistant")} />
                <label htmlFor="Resistant">Resistant</label>
              </div>
              </div>
            </div>
            
            <div className="yeschechbox-review-treatment">
              <div>
              <label style={{fontSize:"1.2rem",marginTop:"0.5rem"}} >
              Resident progress:
            </label>
              </div>
              <div className="yeschechbox-review-treatment-progress">
              <div className="checkbox-style-data">
              <input type="checkbox" id="Deterioration" checked={residentProgress==="Deterioration"} onChange={()=>setResidentProgress("Deterioration")} />
                <label htmlFor="Deterioration">Deterioration</label>
               
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="No Progress" checked={residentProgress==="No Progress"} onChange={()=>setResidentProgress("No Progress")} />
                <label htmlFor="No Progress">No Progress</label>
               
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Small progress" checked={residentProgress==="Small progress"} onChange={()=>setResidentProgress("Small progress")} />
                <label htmlFor="Small progress">Small progress</label>
             
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Good Progress" checked={residentProgress==="Good Progress"} onChange={()=>setResidentProgress("Good Progress")} />
                <label htmlFor="Good Progress">Good Progress</label>
              
              </div>
              <div className="checkbox-style-data">
              <input type="checkbox" id="Goal achieved" checked={residentProgress==="Goal achieved"} onChange={()=>setResidentProgress("Goal achieved")} />
                <label htmlFor="Goal achieved">Goal achieved</label>
                
              </div>
              </div>
            </div>
            <label htmlFor="" className="label-review">
        Support System:
      </label>
      <div className="yeschechbox-review">
        {[
          "Family",
          "Friends",
          "BHRF Staff",
          "Clinical Team",
          "Guardian",
          "Other",
        ].map((support, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`supportSystemCheckbox${index}`}
              checked={supportSystem.includes(support)}
              onChange={() => handleCheckboxChangeSupportSystem(support)}
            />
            <label htmlFor={`supportSystemCheckbox${index}`}>{support}</label>
          </div>
        ))}
      </div>
      {
        supportSystemOtherTextBoolean && (
          <div className="form-field">
          <label htmlFor="supportSystemOtherText">Comment:</label>
          <textarea
            id="supportSystemOtherText"
            value={supportSystemOtherText}
            placeholder="Enter text"
            rows={2}
            cols={82}
            required
            onChange={(e)=>setSupportSystemOtherText(e.target.value)}
          />
        </div>
        )
      }
           
          <div className="form-field">
            <label htmlFor="admissionDate">Current List of medication: </label>
            <input
              
              type="text"
              id="dateOfBirth"
              value={currentMedications}
              placeholder="Enter medication"
              required
              onChange={(e) => setCurrentMedications(e.target.value)}
            />
          </div>
            <label htmlFor="" className="label-review">
              Religious Preference:
            </label>
            <div className="yeschechbox-review">
              <div>
                <input type="checkbox" id="Christian" checked={religiousPreference==="Christian"} onChange={()=>setreligiousPreference("Christian")}/>
                <label htmlFor="Christian">Christian</label>
              </div>
              <div>
              <input type="checkbox" id="Catholic" checked={religiousPreference==="Catholic"} onChange={()=>setreligiousPreference("Catholic")}/>
                <label htmlFor="Catholic">Catholic</label>
                
              </div>
              <div>
              <input type="checkbox" id="Buddhist" checked={religiousPreference==="Buddhist"} onChange={()=>setreligiousPreference("Buddhist")}/>
                <label htmlFor="Buddhist">Buddhist</label>
                
              </div>
              <div>
              <input type="checkbox" id="Islam" checked={religiousPreference==="Islam"} onChange={()=>setreligiousPreference("Islam")}/>
                <label htmlFor="Islam">Islam</label>
                
              </div>
              <div>
              <input type="checkbox" id="Judaism" checked={religiousPreference==="Judaism"} onChange={()=>setreligiousPreference("Judaism")}/>
                <label htmlFor="Judaism">Judaism</label>
                
              </div>
              <div>
              <input type="checkbox" id="Hinduism" checked={religiousPreference==="Hinduism"} onChange={()=>setreligiousPreference("Hinduism")}/>
                <label htmlFor="Hinduism">Hinduism</label>
              
              </div>
              <div>
              <input type="checkbox" id="Mormonism" checked={religiousPreference==="Mormonism"} onChange={()=>setreligiousPreference("Mormonism")}/>
                <label htmlFor="Mormonism">Mormonism</label>
                
              </div>
              <div>
              <input type="checkbox" id="Other" checked={religiousPreference==="Other"} onChange={()=>setreligiousPreference("Other")}/>
                <label htmlFor="Other">Other</label>
              </div>
            </div>
            {
              religiousPreference==="Other" && (
                <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value={religiousPreferenceText}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e)=>setReligiousPreferenceText(e.target.value)}
                />
              </div>
              )
            }
           
          <div className="form-field">
            <label htmlFor="admissionDate">Nutrition and wellness Planning: </label>
            <input
              style={{ color: "#1A9FB2" }}
              type="text"
              id="dateOfBirth"
              value={nutritionAndWellnessPlanning}
              placeholder="Enter name"
              required
              onChange={(e) => setNutritionAndWellnessPlanning(e.target.value)}
            />
          </div>
          <label className="label-review">Recommendation to extend residential treatment for : </label>
          <div className="yeschechbox-review">
              <div>
                <input type="checkbox" id="30 Days" checked={recommendationToExtendResidentialTreatment==="30 Days"} onChange={()=>setRecommendationToExtendResidentialTreatment("30 Days")} />
                <label htmlFor="30 Days">30 Days</label>
              </div>
              <div>
              <input type="checkbox" id="60 Days" checked={recommendationToExtendResidentialTreatment==="60 Days"} onChange={()=>setRecommendationToExtendResidentialTreatment("60 Days")} />
                <label htmlFor="60 Days">60 Days</label>
              </div>
              <div>
              <input type="checkbox" id="90 Day" checked={recommendationToExtendResidentialTreatment==="90 Day"} onChange={()=>setRecommendationToExtendResidentialTreatment("90 Day")} />
                <label htmlFor="90 Day">90 Day</label>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
                <input type="checkbox" id="personalFinances" checked={personalFinances} onChange={()=>setPersonalFinances(!personalFinances)}/>
                <label htmlFor="personalFinances">Resident requires Assistance to maintain personal funds and/or hand personal finances</label>
              </div>
            </div>
            <label htmlFor="" className="label-review">
              Discharge planning & Re-evaluation of initial symptoms, behaviours
              & Goals
            </label>
            <div className="yeschechbox2-horizontal">
              <div>
              <input type="checkbox" id="Follow-up Medical appointments upon discharge" checked={dischargePlanning==="Follow-up Medical appointments upon discharge"} onChange={()=>setDischargePlanning("Follow-up Medical appointments upon discharge")} />
                <label htmlFor="Follow-up Medical appointments upon discharge">Follow-up Medical appointments upon discharge </label>
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
              <input type="checkbox" id="Submit application for higher or lower level of care." checked={dischargePlanning==="Submit application for higher or lower level of care."} onChange={()=>setDischargePlanning("Submit application for higher or lower level of care.")} />
                <label htmlFor="Submit application for higher or lower level of care.">Submit application for higher or lower level of care.</label>
                
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
              <input type="checkbox" id="Continue with Psychiatric Provider" checked={dischargePlanning==="Continue with Psychiatric Provider"} onChange={()=>setDischargePlanning("Continue with Psychiatric Provider")} />
                <label htmlFor="Continue with Psychiatric Provider">Continue with Psychiatric Provider</label>
                
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
              <input type="checkbox" id="Continue with Primary Care Provider (PCP)" checked={dischargePlanning==="Continue with Primary Care Provider (PCP)"} onChange={()=>setDischargePlanning("Continue with Primary Care Provider (PCP)")} />
                <label htmlFor="Continue with Primary Care Provider (PCP)">Continue with Primary Care Provider (PCP)</label>
                
              </div>
            </div>
            <div className="yeschechbox2-horizontal">
              <div>
              <input type="checkbox" id="Continue with case manager for additional support and
                  resources" checked={dischargePlanning==="Continue with case manager for additional support and resources"} onChange={()=>setDischargePlanning("Continue with case manager for additional support and resources")} />
                <label htmlFor="Continue with case manager for additional support and
                  resources">Continue with case manager for additional support and
                  resources</label>
               
              </div>
            </div>
            <div className="form-field">
              <label
                
                className="label-review"
                
              >
                Specify ( If Others )
              </label>
              <textarea
                type="text"
                required
                value={additionalComment}
                rows={2}
                cols={130}
                placeholder="Type Here....."
                onChange={(e) => setAdditionalComment(e.target.value)}
              />
            </div>
            <label htmlFor="" className="label-review">
              Recommendations for further programs upon discharge:
            </label>
            <div className="yeschechbox-review">
        {[
          "PHP",
          "IOP",
          "Sober living",
          "Home",
          "Flex Care 23.9",
          "Flex Care 16",
          "Flex Care 8",
        ].map((recommendation, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`recommendationCheckbox${index}`}
              checked={recommendationsForFurtherPrograms.includes(recommendation)}
              onChange={() => handleCheckboxChangerecommendationsForFurtherPrograms(recommendation)}
            />
            <label htmlFor={`recommendationCheckbox${index}`}>{recommendation}</label>
          </div>
        ))}
      </div>
           
            <label htmlFor="" className="label-review">
              After care and Transition planning / Community Resources:
            </label>
           
            <div className="yeschechbox2-horizontal">
        <div>
          <input
            type="checkbox"
            id="suicideHotlineCheckbox"
            checked={afterCareAndTransitionPlanning.includes("National suicide hotline 988 or 1-800-273-8255")}
            onChange={() => handleCheckboxChangeafterCareAndTransitionPlanning("National suicide hotline 988 or 1-800-273-8255")}
          />
          <label htmlFor="suicideHotlineCheckbox">National suicide hotline 988 or 1-800-273-8255</label>
        </div>
      </div>

      <div className="yeschechbox2-horizontal">
        <div>
          <input
            type="checkbox"
            id="emergencyCareCheckbox"
            checked={afterCareAndTransitionPlanning.includes("Emergency care 911")}
            onChange={() => handleCheckboxChangeafterCareAndTransitionPlanning("Emergency care 911")}
          />
          <label htmlFor="emergencyCareCheckbox">Emergency care 911</label>
        </div>
      </div>

      <div className="yeschechbox2-horizontal">
        <div>
          <input
            type="checkbox"
            id="crisisLineCheckbox"
            checked={afterCareAndTransitionPlanning.includes("24-Hour crisis in Maricopa County 602-222-9444")}
            onChange={() => handleCheckboxChangeafterCareAndTransitionPlanning("24-Hour crisis in Maricopa County 602-222-9444")}
          />
          <label htmlFor="crisisLineCheckbox">24-Hour crisis in Maricopa County 602-222-9444</label>
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
              <label className="label-review">
                Treatment plan review date
              </label>
              <input
                type="text"
               onChange={(e)=>setTreatmentPlanReviewDate(e.target.value)}
                value={treatmentPlanReviewDate}
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
              <label  className="label-review">
                Discharge Plan Date:
              </label>
              <input
                type="date"
               onChange={(e)=>setDischargePlanDate(e.target.value)}
                value={dischargePlanDate}
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
                value={resident}
                placeholder="Enter name"
                required
                onChange={(e) => setResident(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Guardian</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={guardian}
                placeholder="Enter name"
                required
                onChange={(e) => setGuardian(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Staff</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={staff}
                placeholder="Enter name"
                required
                onChange={(e) => setStaff(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>BHP</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                value={bpn}
                placeholder="Enter name"
                required
                onChange={(e) => setBph(e.target.value)}
              />
            </div>
        
            <label htmlFor="" className="label-review">
              Resident / Representative
            </label>
            <div className="yeschechbox-review-yes-no">
              <div>
                <input type="checkbox" id="isReason" checked={isReason==="yes"} onChange={()=>setIsReason(isReason === "yes" ? "no" :"yes")}/>
                <label htmlFor="isReason">Yes  <span>
                  I am in the agreement with the services included in this
                  treatment Plan
                </span></label>
              </div>
            </div>
            {/* <div className="yeschechbox2">
              <div>
                <span>
                  I am in the agreement with the services included in this
                  treatment Plan
                </span>
              </div>
            </div> */}
            <div className="yeschechbox-review-yes-no">
              <div>
                <input type="checkbox" id="refusalReason" checked={refusalReason === "Not applicable"} onChange={()=>setrefusalReason(refusalReason === "Not applicable" ? "" : "Not applicable")} />
                <label htmlFor="refusalReason">No   <span>
                  I am in the agreement with the services included in this
                  treatment Plan
                </span></label>
              </div>
            </div>
            {/* <div className="yeschechbox2">
              <div>
                <span>
                  I am in the agreement with the services included in this
                  treatment Plan
                </span>
              </div>
            </div> */}
            {/* /"signaturesResident */}

            <div className="formsheading">
              <h6>
                signatures Resident participation and informed consent for
                treatment services.
              </h6>
            </div>
            <div className="form-field">
              <label >First and Last Name</label>
              <input
                type="text"
               
                value={nameResident}
                placeholder="Enter your Lorem Ipsum"
                required
                onChange={(e) => setNameResident(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label >
                Resident or Resident’s representative <span style={{fontSize :"15px",color:"gray"}}>(By signing this document, I acknowledge that I was asked, encouraged to participate in the assessment)</span>
              </label>
              <input
                type="text"
               
                value={credentialsResident}
                placeholder="Enter your Lorem Ipsum"
                required
                onChange={(e) => setCredentialsResident(e.target.value)}
              />
            </div>
          
            <div class="file-upload-box"> 
                <div className="file-upload-box-child">
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" type="button" onClick={() => setSignatureModel1(true)}>
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {
                  signatureResident  && (
                    <p className="signature_name_print">Digitally Sign by {signatureResident} {dateResident}</p>
                  )
                }
              </div>
            </div>

            {
              signatureModel1 && (<SingInUpdateModel 
                onClose={()=>setSignatureModel1(false)}
                singin={signatureResident}
                setSingIn={setsignatureResident}
                setDateAndTime={setDateResident}
                />)
            }
            {/* <div className="form-field">
              <label>Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                value={dateResident}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDateResident(e.target.value)}
              />
            </div> */}
          </div>
          {/*   "signaturesFacilityRep": */}
          <div className="formsheading">
            <h6>
              signatures Facility Representative participation and informed consent for
              treatment services.
            </h6>
          </div>
          <div className="form-field">
            <label>First and Last Name</label>
            <input
              type="text"
             
              value={nameFacilityRep}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setNameFacilityRep(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label >
            Facility Representative
            </label>
            <input
              type="text"
          
              value={credentialsFacilityRep}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setCredentialsFacilityRep(e.target.value)}
            />
          </div>
       

          <div class="file-upload-box"> 
                <div className="file-upload-box-child">
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" type="button" onClick={() => setSignatureModel2(true)}>
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {
                  signatureFacilityRep  && (
                    <p className="signature_name_print">Digitally Sign by {signatureFacilityRep} {dateFacilityRep}</p>
                  )
                }
              </div>
            </div>

            {
              signatureModel2 && (<SingInUpdateModel 
                onClose={()=>setSignatureModel2(false)}
                singin={signatureFacilityRep}
                setSingIn={setsignatureFacilityRep}
                setDateAndTime={setDateFacilityRep}
                />)
            }
          {/* <div className="form-field">
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
          </div> */}

          <div className="formsheading">
            <h6>
              Signatures BHP participation and informed consent for treatment
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
            <label >
            Behavioral Health Professional
            </label>
            <input
              type="text"
              
              value={credentialsBhp}
              placeholder="Enter your Lorem Ipsum"
              required
              onChange={(e) => setCredentialsBhp(e.target.value)}
            />
          </div>
        

          <div class="file-upload-box">
              
              <div className="file-upload-box-child">
               <div >
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={() => setSignatureModel3(true)}>
                  SAVED AND SIGNED
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={handlePrint}>
                  PRINT THIS FORM
                </button>
                </div>
              </div> 
              <div>
                {
                  signatureBhp && (
                    <p className="signature_name_print">Digitally Sign by {signatureBhp} {dateBhp}</p>
                  )
                }
              </div>
              
            </div>

            {
              signatureModel3 && (<SingInUpdateModel 
                onClose={()=>setSignatureModel3(false)}
                singin={signatureBhp}
                setSingIn={setsignatureBhp}
                setDateAndTime={setDateBhp}
                />)
            }
          {/* <div className="form-field">
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
          </div> */}
          {/* <div className="form-actions">
            <button type="submit" className="initalsubmit">
              SUBMIT DETAILS
            </button>
          </div> */}
        </form>
      </div>
      {/* signature 1 */}
      {/* {signatureModel1 && (
        <SingInModel onClose={() => setSignatureModel1(false)}>
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
      )} */}
      {/* signature 2 */}
      {/* {signatureModel2 && (
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
      )} */}
      {/* signature3 */}
      {/* {signatureModel3 && (
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
      )} */}

{
        draftModel && (<Draftinmodel onClose={() => setDraftModel(false)}/>)
      }
      </div>
    </>
  );
};

export default TreatmentPlan;
