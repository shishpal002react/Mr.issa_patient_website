// ResidentForm.js

import React, { useEffect, useState } from "react";
import "./Initial-Assessment.css";
import FormUpper from "./FormsUpperbar";
import formupload from "../../img/formupload.png";
import Chechkbox from "../chechkbox";
import locate from "../../img/locate.png";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { user_detail, initialAssestment_form } from "../../Api_Collection/Api";
import Select from "react-select";

const InitialAssessment = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  //state
  const [hasNotified, setHasNotified] = useState("");
  const [assessmentOn, setAssessmentOn] = useState("");
  const [patientId, setPatientId] = useState("");
  const [dob, setDob] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [residentName, setResidentName] = useState("");
  const [sex, setSex] = useState("");
  const [dateOfAssessment, setDateOfAssessment] = useState("");
  const [ahcccsNumber, setAhcccsNumber] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  // admission status is array
  const [admissionStatus, setAdmissionStatus] = useState([]);

  const [programLocation, setProgramLocation] = useState("");
  const [guardianship, setGuardianship] = useState("");
  const [powerOfAttorneyStatus, setPowerOfAttorneyStatus] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [guardianshipPoaPubFidName, setGuardianshipPoaPubFidName] =
    useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [reasonForAdmission, setReasonForAdmission] = useState([]);
  const [residentGoals, setResidentGoals] = useState("");

  // Resident Strengths (Array)
  const [residentStrengths, setResidentStrengths] = useState([]);

  const [residentLimitations, setResidentLimitations] = useState("");
  const [currentBehavioralIssues, setCurrentBehavioralIssues] = useState("");

  // Behavioral Interventions (Array of Objects)
  const [need, setNeed] = useState("");
  const [intervention, setIntervention] = useState("");
  const [behavioralInterventionsArray, setbehavioralInterventionsArray] =
    useState([]);

  // final array
  const [behavioralInterventions, setBehavioralInterventions] = useState([]);

  const behavioralInterventionaArrayHandle = () => {
    setbehavioralInterventionsArray((prev) => [
      ...prev,
      { need, intervention },
    ]);
    setNeed("");
    setIntervention("");
  };

  const [dischargePlan, setDischargePlan] = useState("");
  const [estimateDateOfDischarge, setEstimateDateOfDischarge] = useState("");
  const [agreementWithPlan, setAgreementWithPlan] = useState();

  // Resident Guardian Agreement
  const [residentGuardianAgreementName, setResidentGuardianAgreementName] =
    useState("");
  const [
    residentGuardianAgreementSignature,
    setResidentGuardianAgreementSignature,
  ] = useState("");
  const [residentGuardianAgreementDate, setResidentGuardianAgreementDate] =
    useState("");
  // const [residentGuardianAgreement, setResidentGuardianAgreement] = useState({});

  // Staff Agreement
  const [staffAgreementname, setStaffAgreementName] = useState("");
  const [staffAgreementSignature, setStaffAgreementSignature] = useState("");
  const [staffAgreementDate, setStaffAgreementDate] = useState("");
  // const [staffAgreement, setStaffAgreement] = useState({});

  // BHP Agreement
  const [bhpAgreementName, setBhpAgreementName] = useState("");
  const [bhpAgreementSignature, setBhpAgreementSignature] = useState("");
  const [bhpAgreementDate, setBhpAgreementDate] = useState("");
  // const [bhpAgreement, setBhpAgreement] = useState({});

  // Other
  const [otherName, setOtherName] = useState("");
  const [otherRelationship, setOtherRelationship] = useState("");
  const [otherSignature, setOtherSignature] = useState("");
  const [otherDate, setOtherDate] = useState("");
  // const [other, setOther] = useState({});

  // Medical Conditions (Array of Objects) array
// diabetes
const [diabetes,setDiabetes]=useState("")
const [yesDiabetes,setYesDiabetes]=useState();
const [noDiabetes,setNoDiabetes]=useState(false);
const [commentDiabety,setCommentDeabetes]=useState("")

//Heart disease / heart attack
const [heart ,setHeart] =useState("")
const [yesHeart ,setYesHeart ]=useState();
const [noHeart ,setNoHeart ]=useState(false);
const [commentHeart ,setCommentHeart ]=useState("")

//History 
const [history  ,setHistory ] =useState("")
const [yesHistory ,setYesHistory  ]=useState();
const [noHistory  ,setNoHistory ]=useState(false);
const [commentHistory  ,setCommentHistory  ]=useState("")

//High Blood Pressure
const [High   ,setHigh  ] =useState("")
const [yesHigh  ,setYesHigh   ]=useState();
const [noHigh  ,setNoHigh  ]=useState(false);
const [commentHigh ,setCommentHigh   ]=useState("")

//Lung disease (ie asthma, COPD, emphysema)
const [Lung    ,setLung  ] =useState("")
const [yesLung   ,setYesLung    ]=useState();
const [noLung  ,setNoLung   ]=useState(false);
const [commentLung,setCommentLung]=useState("")

//Seizures
const [SeizuresMental ,setSeizuresMental ] =useState("")
const [yesSeizures   ,setYesSeizures   ]=useState();
const [noSeizures ,setNoSeizures  ]=useState(false);
const [commentSeizures,setCommentSeizures]=useState("")

//Cancer
const [Cancer    ,setCancer ] =useState("")
const [yesCancer   ,setYesCancer   ]=useState();
const [noCancer ,setNoCancer  ]=useState(false);
const [commentCancer,setCommentCancer]=useState("")

// Liver/kidney disease
const [Liver    ,setLiver] =useState("")
const [yesLiver   ,setYesLiver  ]=useState();
const [noLiver ,setNoLiver ]=useState(false);
const [commentLiver,setCommentLiver]=useState("")

//Thyroid disorder
const [Thyroid     ,setThyroid ] =useState("")
const [yesThyroid    ,setYesThyroid   ]=useState();
const [noThyroid ,setNoThyroid  ]=useState(false);


// History of head trauma/traumatic brain injury
const [brainInjury    ,setBrainInjury] =useState("")
const [yesbrainInjury   ,setYesBrainInjury  ]=useState();
const [nobrainInjury ,setNoBrainInjury]=useState(false);
const [commentbrainInjury,setbrainInjury]=useState("")

//Chronic painChronic pain
const [Chronic     ,setChronic ] =useState("")
const [yesChronic   ,setYesChronic  ]=useState();
const [noChronic ,setNoChronic ]=useState(false);
// const [commentbrainInjury,setbrainInjury]=useState("")

const [medicalConditions, setMedicalConditions] = useState([]);

  // miss the value between the 79 to 99
  const [
    SignificantFamilyMedicalPsychiatricHistory,
    setSignificantFamilyMedicalPsychiatricHistory,
  ] = useState([]);
  //mental Health
  const [
    mentalHealthTreatmentHistoryTypeOfService,
    setMentalHealthTreatmentHistoryTypeOfService,
  ] = useState([]);
  const [
    mentalHealthTreatmentHistoryWhere,
    setMentalHealthTreatmentHistoryWhere,
  ] = useState("");
  const [
    mentalHealthTreatmentHistoryDates,
    setMentalHealthTreatmentHistoryDates,
  ] = useState("");
  const [
    mentalHealthTreatmentHistoryDiagnosisReason,
    setMentalHealthTreatmentHistoryDiagnosisReason,
  ] = useState([]);
  const [mentalHealthTreatmentHistory, setMentalHealthTreatmentHistory] =
    useState([]);
  const [substanceAbuseHistory, setSubstanceAbuseHistory] = useState("");
  const [substanceAbuseDenies, setSubstanceAbuseDenies] = useState("");
  // substanceAbuseHistoryData array
  const [substanceAbuseHistoryDataTypes, setSubstanceAbuseHistoryDataTypes] =
    useState([]);
  const [
    substanceAbuseHistoryDataAgeOfFirstUse,
    setSubstanceAbuseHistoryDataAgeOfFirstUse,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUse,
    setSubstanceAbuseHistoryDataLastUse,
  ] = useState([]);
  const [
    substanceAbuseHistoryDataFrequency,
    setSubstanceAbuseHistoryDataFrequency,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobriety,
    setSubstanceAbuseHistoryDataLengthOfSobriety,
  ] = useState("");
  const [substanceAbuseHistoryData, setSubstanceAbuseHistoryData] = useState(
    []
  );

  // Active Withdrawal Symptoms
  const [noneReportedOrObserved, setNoneReportedOrObserved] = useState(false);
  const [Agitation, setAgitation] = useState(false);
  const [Nausea, setNausea] = useState(false);
  const [Vomiting, setVomiting] = useState(false);
  const [Headache, setHeadache] = useState(false);
  const [TactileDisturbances, setTactileDisturbances] = useState(false);
  const [Anxiety, setAnxiety] = useState(false);
  const [Tremors, setTremors] = useState(false);
  const [VisualDisturbances, setVisualDisturbances] = useState(false);
  // const [AuditoryDisturbances, setAuditoryDisturbances] = useState(false);
  const [Sweats, setSweats] = useState(false);
  const [Paranoia, setParanoia] = useState(false);
  const [GooseBumps, setGooseBumps] = useState(false);
  const [Runningnose, setRunningnose] = useState(false);
  const [BonePain, setBonePain] = useState(false);
  const [Tearing, setTearing] = useState(false);
  const [Seizures, setSeizures] = useState(false);
  const [LossofMuscleCoordination, setLossofMuscleCoordination] =
    useState(false);
  const [activeWithdrawalSymptoms, setActiveWithdrawalSymptoms] = useState({});

  // Mental Status Exam (Nested Object)
  //peding more satte (__ to 283)

 // "AbilityToConcentration": 
    const [intact,setIntact]=useState(false);
    const [otherintact,setOtherIntact]=useState("")


  const [mentalStatusExam, setMentalStatusExam] = useState({
    apparentAge: {
      consistent: true,
      younger: false,
      older: false,
    },
  });



  // Significant Social Developmental History
  const [
    significantSocialDevelopmentalHistory,
    setSignificantSocialDevelopmentalHistory,
  ] = useState("");

  // Personal Information (Nested Object)
  const [highestEducation, setHighestEducation] = useState("");
  const [specialEducation, setSpecialEducation] = useState();
  const [currentStudent, setCurrentStudent] = useState();
  const [currentStudentLocation, setCurrentStudentLocation] = useState("");
  const [personalInformation, setPersonalInformation] = useState({});

  const [ifYesWhere,setIfYesWhere]=useState("")
  // Employment History (Nested Object)
  const [currentlyEmployed, setCurrentlyEmployed] = useState();
  const [employmentLocation, setEmploymentLocation] = useState("");
  const [fullTime, setFullTime] = useState();
  const [employmentHistory, setEmploymentHistory] = useState({ });

  const [workHistory, setWorkHistory] = useState("");

  // Military History (Nested Object)
  const [militaryService,setMilitaryService]=useState();
  const [activeDuty,setActiveDuty]=useState("")
  const [militaryHistory, setMilitaryHistory] = useState({});

  // Arrested History (Multiple Fields)
  const [selectedValue, setSelectedValue] = useState([]);
  const [arrestedForDUI, setArrestedForDUI] = useState(false);
  const [arrestedForAssault, setArrestedForAssault] = useState(false);
  const [arrestedForBadChecks, setArrestedForBadChecks] = useState(false);
  const [arrestedForShoplifting, setArrestedForShoplifting] = useState(false);
  const [arrestedForAttemptedMurder, setArrestedForAttemptedMurder] =
    useState(false);
  const [arrestedForDrug, setArrestedForDrug] = useState(false);
  const [arrestedForAlcohol, setArrestedForAlcohol] = useState(false);
  const [arrestedForDisorderlyConduct, setArrestedForDisorderlyConduct] =
    useState(false);
  const [arrestedForIdentityTheft, setArrestedForIdentityTheft] =
    useState(false);
  const [arrestedForSexOffense, setArrestedForSexOffense] = useState(false);
  const [arrestedForOther, setArrestedForOther] = useState(false);
  const [probationParole, setProbationParole] = useState(false);
  const [pendingLitigation, setPendingLitigation] = useState(false);
  const [sentencingDates, setSentencingDates] = useState(false);
  const [needsLegalAid, setNeedsLegalAid] = useState(false);
  const [incarcerated, setIncarcerated] = useState(false);

  // Activities of Daily Living (ADLs)
  const [bathingShoweringGood, setBathingShoweringGood] = useState([]);
  const [bathingShoweringFair, setBathingShoweringFair] = useState();
  const [bathingShoweringNeedAssist, setBathingShoweringNeedAssist] =
    useState();
  const [bathingShoweringComments, setBathingShoweringComments] = useState("");

  const [groomingHygieneGood, setGroomingHygieneGood] = useState("");
  const [groomingHygieneFair, setGroomingHygieneFair] = useState("");
  const [groomingHygieneNeedAssist, setGroomingHygieneNeedAssist] =
    useState("");
  const [groomingHygieneComments, setGroomingHygieneComments] = useState("");

  const [mobilityGood, setMobilityGood] = useState("");
  const [mobilityFair, setMobilityFair] = useState("");
  const [mobilityNeedAssist, setMobilityNeedAssist] = useState("");
  const [mobilityComments, setMobilityComments] = useState("");

  // Instrumental Activities of Daily Living (IADLs)
  const [houseworkGood, setHouseworkGood] = useState("Good");
  const [houseworkFair, setHouseworkFair] = useState("Fair");
  const [houseworkNeedAssist, setHouseworkNeedAssist] = useState("NeedAssist");
  const [houseworkComments, setHouseworkComments] = useState("Comments");

  const [shoppingGood, setShoppingGood] = useState("Good");
  const [shoppingFair, setShoppingFair] = useState("Fair");
  const [shoppingNeedAssist, setShoppingNeedAssist] = useState("NeedAssist");
  const [shoppingComments, setShoppingComments] = useState("Comments");

  const [managingMoneyBudgetGood, setManagingMoneyBudgetGood] =
    useState("Good");
  const [managingMoneyBudgetFair, setManagingMoneyBudgetFair] =
    useState("Fair");
  const [managingMoneyBudgetNeedAssist, setManagingMoneyBudgetNeedAssist] =
    useState("NeedAssist");
  const [managingMoneyBudgetComments, setManagingMoneyBudgetComments] =
    useState("Comments");

  const [takingMedicationsGood, setTakingMedicationsGood] = useState("Good");
  const [takingMedicationsFair, setTakingMedicationsFair] = useState("Fair");
  const [takingMedicationsNeedAssist, setTakingMedicationsNeedAssist] =
    useState("NeedAssist");
  const [takingMedicationsComments, setTakingMedicationsComments] =
    useState("Comments");

  const [preparingFoodGood, setPreparingFoodGood] = useState("Good");
  const [preparingFoodFair, setPreparingFoodFair] = useState("Fair");
  const [preparingFoodNeedAssist, setPreparingFoodNeedAssist] =
    useState("NeedAssist");
  const [preparingFoodComments, setPreparingFoodComments] =
    useState("Comments");

  const [eatingGood, setEatingGood] = useState("Good");
  const [eatingFair, setEatingFair] = useState("Fair");
  const [eatingNeedAssist, setEatingNeedAssist] = useState("NeedAssist");
  const [eatingComments, setEatingComments] = useState("Comments");

  const [toiletingGood, setToiletingGood] = useState("Good");
  const [toiletingFair, setToiletingFair] = useState("Fair");
  const [toiletingNeedAssist, setToiletingNeedAssist] = useState("NeedAssist");
  const [toiletingComments, setToiletingComments] = useState("Comments");

  const [otherGood, setOtherGood] = useState("Good");
  const [otherFair, setOtherFair] = useState("Fair");
  const [otherNeedAssist, setOtherNeedAssist] = useState("NeedAssist");
  const [otherComments, setOtherComments] = useState("Comments");

  const [triggers, setTriggers] = useState("");
  const [fallRisk, setFallRisk] = useState("");
  const [fallRiskExplanation, setFallRiskExplanation] = useState("");

  const [hobbiesLeisureActivities, setHobbiesLeisureActivities] = useState("");

  // Medical Equipment
  const [selectedValueMedical, setSelectedValueMedical] = useState([]);
  const [medicalEquipmentWheelchair, setMedicalEquipmentWheelchair] =
    useState(false);
  const [medicalEquipmentOxygenTank, setMedicalEquipmentOxygenTank] =
    useState(false);
  const [medicalEquipmentCpapMachine, setMedicalEquipmentCpapMachine] =
    useState(false);
  const [medicalEquipmentShowerChair, setMedicalEquipmentShowerChair] =
    useState(false);
  const [medicalEquipmentOther, setMedicalEquipmentOther] = useState(false);

  const handleSelectChangeMedical = (event) => {
    const value = event.target.value;
    setSelectedValueMedical(value);

    // Handle additional logic based on selected value
    switch (value) {
      case "Wheel Chair":
        setMedicalEquipmentWheelchair(true);
        // Additional logic for Wheel Chair
        break;
      case "Oxygen tank":
        setMedicalEquipmentOxygenTank(true);
        // Additional logic for Oxygen tank
        break;
      case "CPAP Machine":
        setMedicalEquipmentCpapMachine(true);
        // Additional logic for CPAP Machine
        break;
      case "Shower chair":
        setMedicalEquipmentShowerChair(true);
        // Additional logic for Shower chair
        break;
      case "Other":
        setMedicalEquipmentOther(true);
        // Additional logic for Other
        break;
      default:
        // Reset other state variables if needed
        setMedicalEquipmentWheelchair(false);
        setMedicalEquipmentOxygenTank(false);
        setMedicalEquipmentCpapMachine(false);
        setMedicalEquipmentShowerChair(false);
        setMedicalEquipmentOther(false);
        break;
    }
  };

  // Special Precautions (Nested Object)
  const [selectedValueSpecialPrecautions, setSelectedValueSpecialPrecautions] =
    useState([]);
  const [seizure, setSeizure] = useState(false);
  const [elopementAwol, setElopementAwol] = useState(false);
  const [physicalAggression, setPhysicalAggression] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [inappropriateSexualBehaviors, setInappropriateSexualBehaviors] =
    useState(false);
  const [substanceUse, setSubstanceUse] = useState(false);
  const [noSpecialPrecautions, setNoSpecialPrecautions] = useState(false);
  const [specialPrecautions, setSpecialPrecautions] = useState();

  const handleSelectChangeSpecialPrecautions = (event) => {
    const value = event.target.value;
    setSelectedValueSpecialPrecautions(value);

    // Handle additional logic based on selected value
    switch (value) {
      case "Yes Seizure":
        setSeizure(true);
        // Additional logic for Yes Seizure
        break;
      case "Elopement/Awol":
        setElopementAwol(true);
        // Additional logic for Elopement/Awol
        break;
      case "Physical Aggression":
        setPhysicalAggression(true);
        // Additional logic for Physical Aggression
        break;
      case "Withdrawal":
        setWithdrawal(true);
        // Additional logic for Withdrawal
        break;
      case "Inappropriate Sexual Behaviors":
        setInappropriateSexualBehaviors(true);
        // Additional logic for Inappropriate Sexual Behaviors
        break;
      case "Substance use":
        setSubstanceUse(true);
        // Additional logic for Substance use
        break;
      case "None":
        setNoSpecialPrecautions(true);
        // Additional logic for None
        break;
      default:
        // Reset other state variables if needed
        setSeizure(false);
        setElopementAwol(false);
        setPhysicalAggression(false);
        setWithdrawal(false);
        setInappropriateSexualBehaviors(false);
        setSubstanceUse(false);
        setNoSpecialPrecautions(false);
        break;
    }
  };

  // jigjok
  const [currentThoughtsOfHarmingSelf, setCurrentThoughtsOfHarmingSelf] =
    useState();
  const [suicidalIdeation, setSuicidalIdeation] = useState("");
  const [suicidalIdeationUrgency, setSuicidalIdeationUrgency] = useState();
  const [suicidalIdeationSeverity, setSuicidalIdeationSeverity] = useState();
  const [currentThoughtsOfHarmingOthers, setCurrentThoughtsOfHarmingOthers] =
    useState();

  // Risk Factors (Nested Object)
 // Risk Factors (Nested Object)
 const [selectedValueRiskFactors, setSelectedValueRiskFactors] = useState([]);
 const [riskYesNo,setRiskYesNo]=useState();
 const [riskComment,setRiskComment]=useState("");
 const [riskFactorArray,setRiskFactoeArray]=useState([])

 const handleRiskFactor=()=>{
   const newData={
     selectedValueRiskFactors,
     riskYesNo,
     riskComment
   }
   setRiskFactoeArray((prev)=> [...prev,newData]);
   setSelectedValueRiskFactors([]);
   setRiskYesNo();
   setRiskComment("");
 }
 const [riskFactors, setRiskFactors] = useState({});

 // State variables for protectiveFactors
 const [selectedValueProtectiveFactors, setSelectedValueProtectiveFactors] =
   useState([]);
   const [protectiveYesNo,setProtectiveYesNo]=useState();
 const [protectiveComment,setprotectiveComment]=useState("");
 const [protectiveFactorsArray,setProtectiveFactorsArray]=useState([]);

 const handleProtectiveFactors=()=>{
   const newData={
     selectedValueProtectiveFactors,
     protectiveYesNo,
     protectiveComment
   }
   setProtectiveFactorsArray((prev)=> [...prev,newData]);
   setSelectedValueProtectiveFactors([]);
   setProtectiveYesNo();
   setprotectiveComment("");
 }

 const [protectiveFactors, setProtectiveFactors] = useState({});

  // State variable for riskLevel
  const [riskLevel, setRiskLevel] = useState("");

  // State variables for psychiatricDiagnoses
  const [icdCode, setIcdCode] = useState("");
  const [description, setDescription] = useState("");
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [tertiary, setTertiary] = useState("");
  const [additional, setAdditional] = useState("");
  const [psychiatricDiagnoses, setPsychiatricDiagnoses] = useState([]);


  const handlePsychiatricDiagnoses=()=>{
    setPsychiatricDiagnoses((prev)=>[...prev,{
      icdCode,
      description,
      primary,
      secondary,
      tertiary,
      additional
    }])
    setIcdCode("")
    setDescription("")
    setPrimary("")
    setSecondary("")
    setTertiary("")
    setAdditional("")
  }

  // State variables for medicalDiagnoses
  const [icdCodeMedicalDiagnoses, setIcdCodeMedicalDiagnoses] = useState("");
  const [descriptionMedicalDiagnoses, setDescriptionMedicalDiagnoses] =
    useState("");
  const [primaryMedicalDiagnoses, setPrimaryMedicalDiagnoses] = useState("");
  const [secondaryMedicalDiagnoses, setSecondaryMedicalDiagnoses] =
    useState("");
  const [tertiaryMedicalDiagnoses, setTertiaryMedicalDiagnoses] = useState("");
  const [additionalMedicalDiagnoses, setAdditionalMedicalDiagnoses] =
    useState("");
  const [medicalDiagnoses, setMedicalDiagnoses] = useState([]);


  const handleMedicalDiagnoses=()=>{
    setMedicalDiagnoses((prev)=>[...prev,{
      icdCodeMedicalDiagnoses,
      descriptionMedicalDiagnoses,
      primaryMedicalDiagnoses,
      secondaryMedicalDiagnoses,
      tertiaryMedicalDiagnoses,
      additionalMedicalDiagnoses
    }])
    setIcdCodeMedicalDiagnoses("")
    setDescriptionMedicalDiagnoses("")
    setPrimaryMedicalDiagnoses("")
    setSecondaryMedicalDiagnoses("")
    setTertiaryMedicalDiagnoses("")
    setAdditionalMedicalDiagnoses("")
  }

  // State variable for additionalDiagnoses
  const [additionalDiagnoses, setAdditionalDiagnoses] = useState("");

  // State variable for primarySupportGroup
  const [primarySupportGroup, setPrimarySupportGroup] = useState(false);

  // State variable for maritalProblems
  const [maritalProblems, setMaritalProblems] = useState(false);

  // State variable for accessToHealthCareServices
  const [accessToHealthCareServices, setAccessToHealthCareServices] =
    useState(false);

  // State variable for educationalProblems
  const [educationalProblems, setEducationalProblems] = useState(false);

  // State variable for housingProblems
  const [housingProblems, setHousingProblems] = useState(false);

  // State variable for familyProblems
  const [familyProblems, setFamilyProblems] = useState(false);

  // State variable for occupationalProblems
  const [occupationalProblems, setOccupationalProblems] = useState(false);

  // State variable for interactionWithLegalSystem, substanceUseInHome, sexualProblems, otherStressors
  const [interactionWithLegalSystem, setInteractionWithLegalSystem] =
    useState(false);
  const [substanceUseInHome, setSubstanceUseInHome] = useState(false);
  const [sexualProblems, setSexualProblems] = useState(false);
  const [otherBoolean, setOtherBoolean] = useState(false);
  const [otherStressors, setOtherStressors] = useState("");

  // State variables for significantRecentLosses
  const [no, setNo] = useState(false);
  const [yes, setYes] = useState(false);
  const [setNoAndYes, setSetNoAndYes] = useState();
  const [death, setDeath] = useState(false);
  const [job, setJob] = useState("");
  const [childRemovedFromHouse, setChildRemovedFromHouse] = useState("");
  const [injury, setInjury] = useState(false);
  const [divorceSeparation, setDivorceSeparation] = useState("");
  const [violentActsAgainstPersonFamily, setViolentActsAgainstPersonFamily] =
    useState(false);
  const [medicalSurgical, setMedicalSurgical] = useState(false);
  const [accidentInjury, setAccidentInjury] = useState(false);
  const [otherSignificantRecentLosses, setOtherSignificantRecentLosses] =
    useState(false);
  // const [significantRecentLosses, setSignificantRecentLosses] = useState({});

  const [additionalNotes, setAdditionalNotes] = useState("");

  // State variables for staffInformation
  const [staffName, setStaffName] = useState("");
  const [staffTitle, setStaffTitle] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffDate, setStaffDate] = useState("");
  const [staffInformation, setStaffInformation] = useState({});

  // State variables for bhpInformation
  const [bhpName, setBhpName] = useState("");
  const [bhpCredentials, setBhpCredentials] = useState("");
  const [bhpSignature, setBhpSignature] = useState("");
  const [bhpDate, setBhpDate] = useState("");
  const [bhpInformation, setBhpInformation] = useState({});

  useEffect(() => {
    setPatientId(userData?._id);
    setUser(userData?.fullName);
  }, [userData]);

  useEffect(() => {
    user_detail(setUserData);
  }, []);

  //react select library
  const qualitiesOptions = [
    { label: "Self motivated", value: "Self motivated" },
    { label: "Loving", value: "Loving" },
    { label: "Honesty", value: "Honesty" },
    { label: "Helping others", value: "Helping others" },
    { label: "Communication", value: "Communication" },
    { label: "Creative", value: "Creative" },
    { label: "Patient", value: "Patient" },
    { label: "Dedication", value: "Dedication" },
    { label: "Coloring", value: "Coloring" },
    { label: "Decision making", value: "Decision making" },
    { label: "Team work", value: "Team work" },
    { label: "Family", value: "Family" },
    { label: "Writing", value: "Writing" },
    { label: "Coloring", value: "Coloring" },
    { label: "Art", value: "Art" },
  ];

  const handleSelectChange = (selectedOptions) => {
    setResidentStrengths(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stringValues = residentStrengths.map((item) => item.value);

    const data = {
      patientId,
      dob,
      hasNotified,
      assessmentOn,
      companyName,
      residentName,
      sex,
      dateOfAssessment,
      ahcccsNumber,
      preferredLanguage,
      ethnicity,
      admissionStatus,
      programLocation,
      guardianship,
      powerOfAttorneyStatus,
      todayDate,
      guardianshipPoaPubFidName,
      approvedBy,
      reasonForAdmission,
      residentGoals,
      residentStrengths: stringValues,
      residentLimitations,
      currentBehavioralIssues,
      // missing
      dischargePlan,
      estimateDateOfDischarge,
      agreementWithPlan,
      residentGuardianAgreement: {
        name: residentGuardianAgreementName,
        signature: residentGuardianAgreementSignature,
        date: residentGuardianAgreementDate,
      },
      staffAgreement: {
        name: staffAgreementname,
        signature: staffAgreementSignature,
        date: staffAgreementDate,
      },
      bhpAgreement: {
        name: bhpAgreementName,
        signature: bhpAgreementSignature,
        date: bhpAgreementDate,
      },
      other: {
        name: otherName,
        relationship: otherRelationship,
        signature: otherSignature,
        date: otherDate,
      },
      // missing
      mentalHealthTreatmentHistory,

      //missing

      significantRecentLosses: {
        typeOfLoss: {
          death,
          job,
          childRemovedFromHouse,
          injury,
          divorceSeparation,
          violentActsAgainstPersonFamily,
          medicalSurgical,
          accidentInjury,
          other: otherSignificantRecentLosses,
        },
      },
    };

    initialAssestment_form(data);
    navigate("/intake");
  };

  const option_value_Admission = [
    { label: "Voluntary", value: "Voluntary" },
    { label: "Court Ordered Treatment", value: "Court Ordered Treatment" },
  ];

  const handleSelectChangeAdmission = (selectedOptions) => {
    setAdmissionStatus(selectedOptions);
  };

  // resion for admission
  const option_value_ReasonForAdmission = [
    { label: "Depression", value: "Depression" },
    { label: "Mood changes", value: "Mood changes" },
    {
      label: "Trouble falling or staying asleep",
      value: "Trouble falling or staying asleep",
    },
    { label: "Mood swings", value: "Mood swings" },
    { label: "Social withdrawal", value: "Social withdrawal" },
    { label: "Changes in eating habits", value: "Changes in eating habits" },
    { label: "Feelings of anger", value: "Feelings of anger" },
    { label: "Negative thoughts", value: "Negative thoughts" },
    { label: "Confused thinking", value: "Confused thinking" },
    { label: "Loss of interest", value: "Loss of interest" },
    { label: "Fatigue or low energy", value: "Fatigue or low energy" },
    { label: "Difficulty concentrating", value: "Difficulty concentrating" },
    { label: "Delusions", value: "Delusions" },
    { label: "Hallucinations", value: "Hallucinations" },
    { label: "Substance use", value: "Substance use" },
    { label: "Stress", value: "Stress" },
    { label: "Trouble coping", value: "Trouble coping" },
    { label: "Feelings of fear", value: "Feelings of fear" },
    { label: "Grief/Loss", value: "Grief/Loss" },
    { label: "Eating Disorder", value: "Eating Disorder" },
    { label: "Danger to self", value: "Danger to self" },
    { label: "Danger to others", value: "Danger to others" },
    { label: "Lack of self care", value: "Lack of self care" },
    {
      label: "Inability to maintain safety",
      value: "Inability to maintain safety",
    },
    { label: "Autism Spectrum Disorder", value: "Autism Spectrum Disorder" },
    { label: "Bipolar Disorder", value: "Bipolar Disorder" },
    {
      label: "Inability to maintain self care",
      value: "Inability to maintain self care",
    },
    {
      label: "Inability to self administer",
      value: "Inability to self administer",
    },
    { label: "Conduct Disorder", value: "Conduct Disorder" },
    {
      label: "Inappropriate Sexual Behavior",
      value: "Inappropriate Sexual Behavior",
    },
    { label: "Schizophrenia Disorder", value: "Schizophrenia Disorder" },
    { label: "Major Depressive Disorder", value: "Major Depressive Disorder" },
    { label: "Obsessive Disorder", value: "Obsessive Disorder" },
    { label: "Psychosis", value: "Psychosis" },
    { label: "Abused", value: "Abused" },
    { label: "Assaulted", value: "Assaulted" },
  ];

  const handleSelectChangeAdmissionReasonForAdmission = (selectedOption) => {
    setReasonForAdmission(selectedOption);
  };

  //state Thyroid disorder
  const [thyroidDisorder, setThyroidDisorder] = useState([]);

  const thyroidOptions = [
    { label: "Hypothyroidism", value: "Hypothyroidism" },
    { label: "Hyperthyroidism", value: "Hyperthyroidism" },
  ];
  const thyroiddisorderhnadler = (selectedOptions) => {
    setThyroidDisorder(selectedOptions);
  };

  // Infection or Diseases<
  const [infectionDiseases, setInfectionDiseases] = useState([]);

  const infectionDiseasesOptions = [
    { label: "HIV/Aids", value: "HIV/Aids" },
    { label: "MRSA", value: "MRSA" },
    { label: "VRE", value: "VRE" },
    { label: "Rash", value: "Rash" },
    { label: "Open Wounds", value: "Open Wounds" },
    { label: "Chicken pox", value: "Chicken pox" },
    { label: "Shingles", value: "Shingles" },
    { label: "Hepatitis", value: "Hepatitis" },
    { label: "STD", value: "STD" },
    { label: "Measles", value: "Measles" },
    { label: "Mumps", value: "Mumps" },
    { label: "Signs of active TB", value: "Signs of active TB" },
    { label: "Scabies", value: "Scabies" },
  ];

  const infectionDiseasesHandler = (selectedOptions) => {
    setInfectionDiseases(selectedOptions);
  };

  //Significant Family Medical/Psychiatric History:
  const SignificantFamilyMedicalPsychiatricHistoryOptions = [
    { label: "Father", value: "Father" },
    { label: "Mother", value: "Mother" },
    { label: "Sister", value: "Sister" },
    { label: "Brother", value: "Brother" },
    { label: "Daughter", value: "Daughter" },
    { label: "Son", value: "Son" },
    { label: "Cousin", value: "Cousin" },
    { label: "Aunt", value: "Aunt" },
    { label: "Uncle", value: "Uncle" },
    { label: "Grandfather", value: "Grandfather" },
  ];

  const SignificantFamilyMedicalPsychiatricHistoryHandler = (
    selectedOptions
  ) => {
    setSignificantFamilyMedicalPsychiatricHistory(selectedOptions);
  };

  // types of services
  const mentalHealthTreatmentHistoryTypeOfServiceOption = [
    { label: "BHRF", value: "BHRF" },
    { label: "IP", value: "IP" },
    { label: "OP", value: "OP" },
    { label: "PHP", value: "PHP" },
    { label: "IOP", value: "IOP" },
  ];

  const mentalHealthTreatmentHistoryTypeOfServiceHandler = (
    selectedOptions
  ) => {
    setMentalHealthTreatmentHistoryTypeOfService(selectedOptions);
  };

  //Diagnosis/Reason for Treatment
  const mentalHealthTreatmentHistoryDiagnosisReasonOption = [
    { label: "Mental health Treatment", value: "Mental health Treatment" },
    { label: "Substance Abuse Treatment", value: "Substance Abuse Treatment" },
    { label: "Stabilization", value: "Stabilization" },
    { label: "Detox", value: "Detox" },
    {
      label: "DTS/DTO Other (Please specify)",
      value: "DTS/DTO Other (Please specify)",
    },
  ];

  const mentalHealthTreatmentHistoryDiagnosisReasonHandler = (
    selectedOptions
  ) => {
    setMentalHealthTreatmentHistoryDiagnosisReason(selectedOptions);
  };

  // Type of services drop down
  const substanceAbuseHistoryDataTypesOption = [
    { label: "Alcohol", value: "Alcohol" },
    { label: "Benzodiazepines", value: "Benzodiazepines" },
    { label: "Cocaine", value: "Cocaine" },
    { label: "Crack", value: "Crack" },
    {
      label: "Hallucinogens (LSD,mescaline,etc.)",
      value: "Hallucinogens (LSD,mescaline,etc.)",
    },
    { label: "Heroin", value: "Heroin" },
    { label: "Crack", value: "Crack" },
    { label: "Inhalants", value: "Inhalants" },
    { label: "Marijuana", value: "Marijuana" },
    { label: "Methamphetamine", value: "Methamphetamine" },
    { label: "Methadone", value: "Methadone" },
    { label: "MDMA (ecstasy)", value: "MDMA (ecstasy)" },
    { label: "PCP (angel dust)", value: "PCP (angel dust)" },
    { label: "Prescription medicine", value: "Prescription medicine" },
    { label: "OTC medicine", value: "OTC medicine" },
    { label: "other", value: "other" },
  ];

  const substanceAbuseHistoryDataTypesHandler = (selectedOptions) => {
    setSubstanceAbuseHistoryDataTypes(selectedOptions);
  };

  //// Type of services Last use
  const substanceAbuseHistoryDataLastUseOption = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" },
  ];

  const substanceAbuseHistoryDataLastUseHandler = (selectedOptions) => {
    setSubstanceAbuseHistoryDataLastUse(selectedOptions);
  };

  //// Type of services frequency
  const substanceAbuseHistoryDataFrequencyOption = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" },
  ];

  const substanceAbuseHistoryDataFrequencyHandler = (selectedOptions) => {
    setSubstanceAbuseHistoryDataFrequency(selectedOptions);
  };

  //// Type of services length of Sobriety
  const substanceAbuseHistoryDataLengthOfSobrietyOption = [
    { label: "One week", value: "One week" },
    { label: "A few days ago, One month", value: "A few days ago, One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
  ];

  const substanceAbuseHistoryDataLengthOfSobrietyHandler = (selectedOptions) => {
    setSubstanceAbuseHistoryDataLengthOfSobriety(selectedOptions);
  };

  //Criminal Justice Legal History
  const selectedValueOption = [
    { label: "Arrested for DUI", value: "Arrested for DUI" },
    { label: "Arrested for assault", value: "Arrested for assault" },
    { label: "Arrested for bad checks", value: "Arrested for bad checks" },
    { label: "Arrested for shop lifting", value: "Arrested for shop lifting" },
    { label: "Arrested for attempted murder", value: "Arrested for attempted murder" },
    { label: "Arrested for alcohol", value: "Arrested for alcohol" },
    { label: "Arrested for disorderly conduct", value: "Arrested for disorderly conduct" },
    { label: "Arrested for identity theft/ forgery", value: "Arrested for identity theft/ forgery" },
    { label: "Arrested for sex offense", value: "Arrested for sex offense" },
    { label: "Probation/parole, custody", value: "Probation/parole, custody" },
    { label: "Pending litigation", value: "Pending litigation" },
    { label: "Sentencing dates", value: "Sentencing dates" },
    { label: "Needs Legal Aid", value: "Needs Legal Aid" },
    { label: "Incarcerated", value: "Incarcerated" },
  ]

  const selectedValueHandler = (selectedOptions) => {
    setSelectedValue(selectedOptions);
  };

  // Current Independent Living Skills:
  const bathingShoweringGoodOptions = [
    { label: "Bathing/Showering", value: "Bathing/Showering" },
    { label: "Grooming/hygiene", value: "Grooming/hygiene" },
    { label: "Mobility", value: "Mobility" },
    { label: "Housework", value: "Housework" },
    { label: "Shopping", value: "Shopping" },
    { label: "Managing money/budget", value: "Managing money/budget" },
    { label: "Taking medications", value: "Taking medications" },
    { label: "Preparing food", value: "Preparing food" },
    { label: "Eating", value: "Eating" },
    { label: "Toileting", value: "Toileting" },
    { label: "Other(specify)", value: "Other(specify)" }
  ]
  
  const bathingShoweringGoodJHandler=(optionValue)=>{
    setBathingShoweringGood(optionValue);
  }

  //Medical Equipment:
  const selectedValueMedicalOption = [
    { label: "Wheel Chair", value: "Wheel Chair" },
    { label: "Oxygen tank", value: "Oxygen tank" },
    { label: "CPAP Machine", value: "CPAP Machine" },
    { label: "Shower chair", value: "Shower chair" },
    { label: "Other", value: "Other" },
  ]

  const selectedValueMedicalHandler=(optionValue)=>{
    setSelectedValueMedical(optionValue);
  }

  const selectedValueSpecialPrecautionsOption = [
    { label: "Yes Seizure", value: "Yes Seizure" },
    { label: "Elopement/Awol", value: "Elopement/Awol" },
    { label: "Physical Aggression", value: "Physical Aggression" },
    { label: "Withdrawal", value: "Withdrawal" },
    { label: "Inappropriate Sexual Behaviors", value: "Inappropriate Sexual Behaviors" },
    { label: "Substance use", value: "Substance use" },
    { label: "None", value: "None" },
  ]
  const selectedValueSpecialPrecautionsHandler=(optionValue)=>{
    setSelectedValueSpecialPrecautions(optionValue)
  }

  //Select risk factors that apply
  const selectedValueRiskFactorsOption = [
    { label: "Current suicidal ideation", value: "Current suicidal ideation" },
    { label: "Prior suicide attempt", value: "Prior suicide attempt" },
    { label: "Access to means (i.e. weapon)", value: "Access to means (i.e. weapon)" },
    { label: "Other self-abusing behavior", value: "Other self-abusing behavior" },
    { label: "Recent losses/lack of support", value: "Recent losses/lack of support" },
    { label: "Symptoms of psychosis", value: "Symptoms of psychosis" },
    { label: "Family history of suicide", value: "Family history of suicide" },
    { label: "Terminal physical illness", value: "Terminal physical illness" },
    { label: "Current stressors (specify)", value: "Current stressors (specify)" },
    { label: "Chronic pain", value: "Chronic pain" },
  ]

  const selectedValueRiskFactorsHandler=(optionValue)=>{
    setSelectedValueRiskFactors(optionValue)
  }

  //Protective factors that apply:
  const selectedValueProtectiveFactorsOption = [
    { label: "Supports available (family friends)", value: "Supports available (family friends)" },
    { label: "Spiritual / religious support", value: "Spiritual / religious support" },
    { label: "Religious/cultural prohibitions", value: "Religious/cultural prohibitions" },
    { label: " Fear of consequences", value: " Fear of consequences" },
    { label: " Able to be engaged in intervention", value: " Able to be engaged in intervention" },
    { label: "Willing to commit to keeping self safe", value: "Willing to commit to keeping self safe" },

  ]

  const selectedValueProtectiveFactorsHandler=(optionValue)=>{
    setSelectedValueProtectiveFactors(optionValue)
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
        <FormUpper />
        <p>
          <div className="inLine_box_style">
            <div>
              <input
                placeholder="Company name"
                id="input-text_value1"
                type="text"
                value={companyName}
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <p style={{ height: "10px" }}>has notified</p>
            <div>
              <input
                style={{ outline: "none", border: "none" }}
                type="text"
                value={hasNotified}
                placeholder="______________"
                onChange={(e) => setHasNotified(e.target.value)}
                id="input-text_value2"
              />{" "}
            </div>
            <p style={{ height: "10px" }}>
              to participate in his/her Service Treatment Plan/Initial
              Assessment on
            </p>
            <div>
              <input
                style={{ outline: "none", border: "none" }}
                type="text"
                value={assessmentOn}
                placeholder="_________"
                className="input-text_value"
                onChange={(e) => setAssessmentOn(e.target.value)}
              />
            </div>
          </div>
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: "8rem" }}
        >
          <h5>Section - 1</h5>
          <div className="form-section">
            <h2>Basic Details</h2>
            {/* <div className="form-field">
              <label htmlFor="residentFullName">Company Name </label>
              <input
                type="text"
                id="residentFullName"
                value={companyName}
                placeholder="Enter full name"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div> */}
            <div className="form-field">
              <label htmlFor="residentFullName">Resident Full Name</label>
              <input
                type="text"
                id="residentFullName"
                // value={user}
                value={residentName}
                placeholder="Enter full name"
                required
                // onChange={(e) => setUser(e.target.value)}
                onChange={(e) => setResidentName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="residentFullName">Gender</label>

              <div className="genderdiv">
                <div className="genderbox">
                  <input
                    type="radio"
                    id="maleRadio"
                    checked={sex === "Male"}
                    onChange={() => setSex("Male")}
                    className="custom-radio"
                  />
                  <label htmlFor="maleRadio">Male</label>
                </div>
                <div className="genderbox">
                  <input
                    type="radio"
                    id="femaleRadio"
                    checked={sex === "Female"}
                    onChange={() => setSex("Female")}
                    className="custom-radio"
                  />
                  <label htmlFor="femaleRadio">Female</label>
                </div>
                <div className="genderbox">
                  <input
                    type="radio"
                    id="femaleRadio"
                    checked={sex === "Other"}
                    onChange={() => setSex("Other")}
                    className="custom-radio"
                  />
                  <label htmlFor="femaleRadio">Other</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={dob}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Admission Date:</label>
              <input
                type="date"
                id="admissionDate"
                value={dateOfAssessment}
                placeholder="Enter Date"
                required
                onChange={(e) => setDateOfAssessment(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">AHCCCS</label>
              <input
                type="text"
                id="AHCCCS"
                value={ahcccsNumber}
                placeholder="Enter text"
                required
                onChange={(e) => setAhcccsNumber(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="preferredlanguage">Preferred Language</label>
              <input
                type="text"
                required
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
              />
              {/* <select
                style={{ color: "#1A9FB2" }}
                id="preferredlanguage"
                value={preferredLanguage}
                required
                onChange={(e)=>setPreferredLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
             
              </select> */}
            </div>
            <div className="form-field">
              <label htmlFor="ethnicity">Ethnicity</label>
              <input
                type="text"
                required
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionstatus">Admission Status</label>

              <Select
                isMulti
                value={admissionStatus}
                onChange={handleSelectChangeAdmission}
                options={option_value_Admission}
              />
            </div>
            <div className="form-field">
              <label
                htmlFor="programlocation&address"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Program Location & Address{" "}
                <img
                  src={locate}
                  alt=""
                  style={{ width: "92px", height: "29px" }}
                />
              </label>
              <textarea
                id="programlocation&address"
                type="text"
                value={programLocation}
                rows={5}
                cols={130}
                placeholder="Enter Full Address"
                required
                onChange={(e) => setProgramLocation(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="guardianship">Guardianship:</label>
              <input
                type="text"
                id="guardianship"
                value={guardianship}
                placeholder="Enter name"
                required
                onChange={(e) => setGuardianship(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="attorneystatus">Power of Attorney Status:</label>
              <input
                type="text"
                id="attorneystatus"
                value={powerOfAttorneyStatus}
                placeholder="Enter text"
                required
                onChange={(e) => setPowerOfAttorneyStatus(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="todaydate">Today’s Date:</label>
              <input
                type="date"
                id="todaydate"
                value={todayDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setTodayDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="fidname">Guardianship/POA/PUB FID Name:</label>
              <input
                type="text"
                id="fidname"
                value={guardianshipPoaPubFidName}
                placeholder="Enter name"
                required
                onChange={(e) => setGuardianshipPoaPubFidName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Approved By:</label>
              <input
                type="text"
                id="approvedby"
                value={approvedBy}
                placeholder="Enter name"
                required
                onChange={(e) => setApprovedBy(e.target.value)}
              />
            </div>
            <h2 style={{marginTop:"1.5rem"}}>Other Details</h2>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Reason for Admission to Services
              </label>
              <Select
                isMulti
                value={reasonForAdmission}
                onChange={handleSelectChangeAdmissionReasonForAdmission}
                options={option_value_ReasonForAdmission}
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">Resident’s Goals:</label>
              <textarea
                id="programlocation&address"
                type="text"
                value={residentGoals}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e) => setResidentGoals(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Resident’s Strength</label>
              <Select
                isMulti
                value={residentStrengths}
                onChange={handleSelectChange}
                options={qualitiesOptions}
              />
              {/* <div>
        Selected Options:
        {qualitiesOptions.map((option) => (
          <span key={option.value}>{option.label}, </span>
        ))}
      </div> */}
              {/* <select id="reasonadmission" value="" required>
                <option value="Enter text">Enter text</option>
                <option value="Enter text">Self motivated</option>
                <option value="Enter text">Loving</option>
                <option value="Enter text">Honesty</option>
                <option value="Enter text">Helping others</option>
                <option value="Enter text">Communication</option>
                <option value="Enter text">Creative</option>
                <option value="Enter text">Patient</option>
                <option value="Enter text">Dedication</option>
                <option value="Enter text">Coloring</option>
                <option value="Enter text">Decision making</option>
                <option value="Enter text">Team work</option>
                <option value="Enter text">Family</option>
                <option value="Enter text">Writing</option>
                <option value="Enter text">Coloring</option>
                <option value="Enter text">Art</option>
 
              </select> */}
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Resident’s Limitation(s)
              </label>
              <textarea
                id="programlocation&address"
                value={residentLimitations}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e) => setResidentLimitations(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Current Behavioral Issues / Symptoms Reported by the Resident:
              </label>
              <textarea
                id="programlocation&address"
                value={currentBehavioralIssues}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e) => setCurrentBehavioralIssues(e.target.value)}
              />
            </div>
            <label className="label-review">
              Identified Needs/targeted Behaviors Intervention(s) to Meet
              Objectives
            </label>
            <div className="safetyplandiv">
              <div className="form-field">
                <label >Needs</label>
                <input
                  type="text"
                  
                  value={need}
                  placeholder="Enter Needs"
                  onChange={(e) => setNeed(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label >Interventions</label>
                <input
                  type="text"
                 
                  value={intervention}
                  placeholder="Enter Interventions"
                  onChange={(e) => setIntervention(e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={behavioralInterventionaArrayHandle}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="needs-interventions-container">
              <div className="needs-interventions-column1">
                {behavioralInterventionsArray.length > 0 && (
                  <table>
                    <thead>
        
                      <th>Need</th>
                      <th>Intervention</th>
                    </thead>
                    <tbody>
                      {behavioralInterventionsArray?.map((i, index) => (
                        <tr>
  
                          <td>{`${index + 1}. ${i.need}`} </td>
                          <td>{`${index + 1}. ${i.intervention}`} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Discharge Plan</label>
              <input
                type="text"
                id="approvedby"
                value={dischargePlan}
                placeholder="Enter text"
                required
                onChange={(e) => setDischargePlan(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="todaydate">Estimated Date of Discharge</label>
              <input
                type="date"
                id="todaydate"
                value={estimateDateOfDischarge}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setEstimateDateOfDischarge(e.target.value)}
              />
            </div>

            {/* <div className="form-field">
            
              <select required onChange={(e)=>setAgreementWithPlan(e.target.value)}>
                
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div> */}

            <div class="checkbox-container1">
              <div class="checkoptions1" style={{marginTop:"1.2rem"}}>
                {/* <label >Agreement With Plan</label> */}
                <div class="checkboxitem1">
                  <input
                    type="checkbox"
                    checked={agreementWithPlan === true}
                    onChange={() => setAgreementWithPlan(true)}
                  />
                  <span style={{ paddingLeft: "10px" }}>
                    {" "}
                    Yes, I (Resident/guardian) am in agreement with the types
                    and levels of services included in my behavior plan.
                  </span>
                </div>
                <div
                  class="checkboxitem12"
                  style={{ display: "flex" }}
                >
                  <input
                    type="checkbox"
                    checked={agreementWithPlan === false}
                    onChange={() => setAgreementWithPlan(false)}
                  />
                  <span style={{ paddingLeft: "10px" }}>
                    No, I (Resident/guardian) disagree with the types and/or
                    levels of some or all of the services included in my
                    behavioral health treatment plan. By checking this box, I
                    (Resident/guardian) will receive the services that I have
                    agreed to receive and may appeal the treatment team’s
                    decision to not include all the types and/ or levels of
                    services that I have requested. *
                  </span>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="approvedby">Resident/Guardian name:</label>
              <input
                type="text"
                id="approvedby"
                value={residentGuardianAgreementName}
                placeholder="Enter name"
                required
                onChange={(e) =>
                  setResidentGuardianAgreementName(e.target.value)
                }
              />
            </div>
            <div className="form-field">
            <label htmlFor="">Signature</label>
            <input
              type="text"
              required
              value={residentGuardianAgreementSignature}
              onChange={(e) =>
                setResidentGuardianAgreementSignature(e.target.value)
              }
            />
            </div>
            {/* <div class="file-upload-box">
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
            </div> */}
            <div className="form-field">
              <label htmlFor="todaydate">Date</label>
              <input
                type="date"
                id="todaydate"
                value={residentGuardianAgreementDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) =>
                  setResidentGuardianAgreementDate(e.target.value)
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Staff name:</label>
              <input
                type="text"
                id="approvedby"
                value={staffAgreementname}
                placeholder="Enter name"
                required
                onChange={(e) => setStaffAgreementName(e.target.value)}
              />
            </div>
            <div className="form-field">
            <label htmlFor="">Signature</label>
            <input
              type="text"
              required
              value={staffAgreementSignature}
              onChange={(e) => setStaffAgreementSignature(e.target.value)}
            />
            </div>
            {/* <div class="file-upload-box">
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <div class="upload-icon">
                <img
                  src={formupload}
                  alt=""
                  style={{ width: "74px", height: "74px" }}
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
            </div> */}
            <div className="form-field">
              <label htmlFor="todaydate">Date</label>
              <input
                type="date"
                id="todaydate"
                value={staffAgreementDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setStaffAgreementDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">BHP name, credentials:</label>
              <input
                type="text"
                id="approvedby"
                value={bhpAgreementName}
                placeholder="Enter name"
                required
                onChange={(e) => setBhpAgreementName(e.target.value)}
              />
            </div>
            <div className="form-field">
            <label htmlFor="">Signature</label>
            <input
              type="text"
              required
              value={bhpAgreementSignature}
              onChange={(e) => setBhpAgreementSignature(e.target.value)}
            />
            </div>
            {/* <div class="file-upload-box">
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <div class="upload-icon">
                <img
                  src={formupload}
                  alt=""
                  style={{ width: "74px", height: "74px" }}
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
            </div> */}
            <div className="form-field">
              <label htmlFor="todaydate">Date</label>
              <input
                type="date"
                id="todaydate"
                value={bhpAgreementDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setBhpAgreementDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Other name:</label>
              <input
                type="text"
                id="approvedby"
                value={otherName}
                placeholder="Enter name"
                required
                onChange={(e) => setOtherName(e.target.value)}
              />
            </div>
            <div className="form-field">
            <label htmlFor="">Signature</label>
            <input
              type="text"
              required
              value={otherSignature}
              onChange={(e) => setOtherSignature(e.target.value)}
            />
            </div>
            {/* <div class="file-upload-box">
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <div class="upload-icon">
                <img
                  src={formupload}
                  alt=""
                  style={{ width: "74px", height: "74px" }}
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
            </div> */}
            <div className="form-field">
              <label htmlFor="approvedby">Relationship to Resident</label>
              <input
                type="text"
                id="approvedby"
                value={otherRelationship}
                placeholder="Enter text"
                required
                onChange={(e) => setOtherRelationship(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Signature</label>
              <input
                type="text"
                id="approvedby"
                value={otherSignature}
                placeholder="Enter text"
                required
                onChange={(e) => setOtherSignature(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Other Date:</label>
              <input
                type="date"
                id="approvedby"
                value={otherDate}
                placeholder="Enter name"
                required
                onChange={(e) => setOtherDate(e.target.value)}
              />
            </div>
            <h5 style={{marginTop:"1.5rem"}}>Section - 2</h5>
            <div className="formsheading">
              <p>
                A. Currently prescribed medications are attached on a separate
                page.
              </p>
              <p>B. Current and Past Medical/Psychiatric Conditions.</p>
              <h6 style={{fontSize:"25px",marginTop:"2.5rem"}}>Conditions</h6>
            </div>

    

            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Diabetes</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="diabetes"
                    checked={diabetes===true}
                    onChange={()=>setDiabetes(true)}
                  />
                  <label htmlFor="diabetes">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="diabetesno"
                    checked={diabetes===false}
                    onChange={()=>setDiabetes(false)}
                  />
                  <label htmlFor="diabetesno">No</label>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentDiabety}
                placeholder="Enter text"
                rows={2}
                cols={82}
                onChange={(e) => setCommentDeabetes(e.target.value)}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Heart disease / heart attack</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesHeart"
                    checked={yesHeart===true}
                    onChange={()=>setYesHeart(true)}
                  />
                  <label htmlFor="yesHeart">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesHeartno"
                    checked={yesHeart===false}
                    onChange={()=>setYesHeart(false)}
                  />
                  <label htmlFor="yesHeartno">No</label>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentHeart}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentHeart(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>History of stroke</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesHistory"
                    checked={yesHistory===true}
                    onChange={()=>setYesHistory(true)}
                  />
                  <label htmlFor="yesHistory">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesHistoryno"
                    checked={yesHistory===false}
                    onChange={()=>setYesHistory(false)}
                  />
                  <label htmlFor="yesHistoryno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentHistory}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentHistory(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>High Blood Pressure</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesHigh"
                    checked={yesHigh===true}
                    onChange={()=>setYesHigh(true)}
                  />
                  <label htmlFor="yesHigh">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesHighno"
                    checked={yesHigh===false}
                    onChange={()=>setYesHigh(false)}
                  />
                  <label htmlFor="yesHighno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentHigh}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentHigh(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>
                Lung disease (ie asthma, COPD, emphysema)
              </label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesLung"
                    checked={diabetes===true}
                    onChange={()=>setYesLung(true)}
                  />
                  <label htmlFor="yesLung">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesLungno"
                    checked={yesLung===false}
                    onChange={()=>setYesLung(false)}
                  />
                  <label htmlFor="yesLungno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentLung}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentLung(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Seizures</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="diabetes"
                    checked={diabetes===true}
                    onChange={()=>setDiabetes(true)}
                  />
                  <label htmlFor="diabetes">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesSeizuresno"
                    checked={yesSeizures===false}
                    onChange={()=>setYesSeizures(false)}
                  />
                  <label htmlFor="yesSeizuresno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentSeizures}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentSeizures(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Cancer</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesCancer"
                    checked={yesCancer===true}
                    onChange={()=>setYesCancer(true)}
                  />
                  <label htmlFor="yesCancer">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesCancerno"
                    checked={yesCancer===false}
                    onChange={()=>setYesCancer(false)}
                  />
                  <label htmlFor="yesCancerno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentCancer}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentCancer(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Liver/kidney disease</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesLiver"
                    checked={yesLiver===true}
                    onChange={()=>setYesLiver(true)}
                  />
                  <label htmlFor="yesLiver">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesLiverno"
                    checked={yesLiver===false}
                    onChange={()=>setYesLiver(false)}
                  />
                  <label htmlFor="yesLiverno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field"> 
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value={commentLiver}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setCommentLiver(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Thyroid disorder</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="yesThyroid"
                    checked={yesThyroid===true}
                    onChange={()=>setYesThyroid(true)}
                  />
                  <label htmlFor="yesThyroid">Yes</label>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    id="setYesThyroidno"
                    checked={setYesThyroid===false}
                    onChange={()=>setYesThyroid(false)}
                  />
                  <label htmlFor="setYesThyroidno">No</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"20px",marginTop:"1.5rem"}}>
                Select thyroid disorder{" "}
              </label>
              {/* <select name="" id="">
                <option value="">Select any one</option>
                <option value="">Hypothyroidism</option>
                <option value="">Hyperthyroidism</option>
              </select> */}
              <Select
                isMulti
                value={thyroidDisorder}
                onChange={thyroiddisorderhnadler}
                options={thyroidOptions}
              />
            </div>
            <div className="yeschechbox" style={{marginTop:"1.5rem"}}>
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>History of head trauma/traumatic brain</label>
              <div className="checkbox654" >
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Injury</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Chronic pain</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>
                Allergies (food, environment, medications)
              </label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Surgeries</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Number of pregnancies / births</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Substance use disorder (please specify)</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Depression</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Anxiety/panic attacks</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Insomnia</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Bipolar disorder</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Schizophrenia</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Obsessive compulsive disorder</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Personality disorder (please specify)</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Phobias</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Any other health conditions</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address" style={{fontSize:"14px"}}>Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="" style={{fontSize:"20px",marginTop:"1.5rem"}}>Infection or Diseases</label>
              <div className="checkbox654">
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>Yes</span>
                </div>
                <div className="checkBox-aligment">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Select Infection or Diseases{" "}
              </label>

              <Select
                isMulti
                value={infectionDiseases}
                onChange={infectionDiseasesHandler}
                options={infectionDiseasesOptions}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Significant Family Medical/Psychiatric History:
              </label>

              <Select
                isMulti
                value={SignificantFamilyMedicalPsychiatricHistory}
                onChange={SignificantFamilyMedicalPsychiatricHistoryHandler}
                options={SignificantFamilyMedicalPsychiatricHistoryOptions}
              />
            </div>
            <div className="formsheading">
              <h6 style={{marginTop:"2rem"}}>
                Mental Health Treatment History (in Resident hospitalization,
                partial hospitalization, out Resident, etc):
              </h6>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Type of Service</label>

              <Select
                isMulti
                value={mentalHealthTreatmentHistoryTypeOfService}
                onChange={mentalHealthTreatmentHistoryTypeOfServiceHandler}
                options={mentalHealthTreatmentHistoryTypeOfServiceOption}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Where</label>
              <input
                type="text"
                id="approvedby"
                value={mentalHealthTreatmentHistoryWhere}
                placeholder="Enter text"
                required
                onChange={(e) =>
                  setMentalHealthTreatmentHistoryWhere(e.target.value)
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Dates</label>
              <input
                type="text"
                id="approvedby"
                value={mentalHealthTreatmentHistoryDates}
                placeholder="Enter text"
                required
                onChange={(e) =>
                  setMentalHealthTreatmentHistoryDates(e.target.value)
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Diagnosis/Reason for Treatment
              </label>

              <Select
                isMulti
                value={mentalHealthTreatmentHistoryDiagnosisReason}
                onChange={mentalHealthTreatmentHistoryDiagnosisReasonHandler}
                options={mentalHealthTreatmentHistoryDiagnosisReasonOption}
              />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div className="yeschechbox235" style={{marginTop:"1.5rem"}}>
                <label htmlFor="">Substance Abuse history:</label>

                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="substanceAbuseHistory"
                    checked={substanceAbuseHistory}
                    onChange={() =>
                      setSubstanceAbuseHistory(!substanceAbuseHistory)
                    }
                  />
                </div>
                
              </div>

              <div className="yeschechbox23" style={{marginTop:"1.5rem"}}>
                <label htmlFor="" >Denies: </label>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="substanceAbuseDenies"
                    checked={substanceAbuseDenies}
                    onChange={() =>
                      setSubstanceAbuseDenies(!substanceAbuseDenies)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="reasonadmission">Type</label>
              <Select
                isMulti
                value={substanceAbuseHistoryDataTypes}
                onChange={substanceAbuseHistoryDataTypesHandler}
                options={substanceAbuseHistoryDataTypesOption}
              />
            </div>
            <div className="form-field">
              <label>Age of First use</label>
              <input
                type="text"
                id=""
                value={substanceAbuseHistoryDataAgeOfFirstUse}
                placeholder="Enter age"
                required
                onChange={(e) =>
                  setSubstanceAbuseHistoryDataAgeOfFirstUse(e.target.value)
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Last Use</label>

              <Select
                isMulti
                value={substanceAbuseHistoryDataLastUse}
                onChange={substanceAbuseHistoryDataLastUseHandler}
                options={substanceAbuseHistoryDataLastUseOption}
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Frequency</label>
              <Select
                isMulti
                value={substanceAbuseHistoryDataFrequency}
                onChange={substanceAbuseHistoryDataFrequencyHandler}
                options={substanceAbuseHistoryDataFrequencyOption}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Length of Sobriety</label>
              <Select
              value={substanceAbuseHistoryDataLengthOfSobriety}
              isMulti
              onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
              options={substanceAbuseHistoryDataLengthOfSobrietyOption}
              />
            </div>

            <div class="checkbox-container">
              <label>Active Withdrawal Symptoms:</label>
              <div class="chechbox12-correct">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={noneReportedOrObserved}
                      checked={noneReportedOrObserved}
                      style={{alignSelf:"start",marginTop:"10px"}}
                      onChange={() =>
                        setNoneReportedOrObserved(!noneReportedOrObserved)
                      }
                    />
                    <span>None reported observed</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Vomiting}
                      checked={Vomiting}
                      onChange={() => setVomiting(!Vomiting)}
                    />
                    <span>Vomiting</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Anxiety}
                      checked={Anxiety}
                      onChange={() => setAnxiety(!Anxiety)}
                    />
                    <span>Anxiety</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Agitation}
                      checked={Agitation}
                      onChange={() => setAgitation(!Agitation)}
                    />
                    <span>Agitation</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Headache}
                      checked={Headache}
                      onChange={() => setHeadache(!Headache)}
                    />
                    <span>Headache</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Tremors}
                      checked={Tremors}
                      onChange={() => setTremors(!Tremors)}
                    />
                    <span>Tremors</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Nausea}
                      checked={Nausea}
                      onChange={() => setNausea(!Nausea)}
                    />
                    <span>Nausea</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={TactileDisturbances}
                      checked={TactileDisturbances}
                      onChange={() =>
                        setTactileDisturbances(!TactileDisturbances)
                      }
                    />
                    <span>Tactile Disturbances</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={VisualDisturbances}
                      checked={VisualDisturbances}
                      onChange={() =>
                        setVisualDisturbances(!VisualDisturbances)
                      }
                    />
                    <span>Visual Disturbances</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="checkbox-container">
              <label>Auditory Disturbances</label>
              <div class="chechbox12-aligment411">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Sweats}
                      checked={Sweats}
                      onChange={() => setSweats(!Sweats)}
                    />
                    <span>Sweats</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={GooseBumps}
                      checked={GooseBumps}
                      onChange={() => setGooseBumps(!GooseBumps)}
                    />
                    <span>Goose Bumps</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={BonePain}
                      checked={BonePain}
                      onChange={() => setBonePain(!BonePain)}
                    />
                    <span>Bone Pain</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Seizures}
                      checked={Seizures}
                      onChange={() => setSeizures(!Seizures)}
                    />
                    <span>Seizures</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Paranoia}
                      checked={Paranoia}
                      onChange={() => setParanoia(!Paranoia)}
                    />
                    <span>Paranoia</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Runningnose}
                      checked={Runningnose}
                      onChange={() => setRunningnose(!Runningnose)}
                    />
                    <span>Running nose</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={Tearing}
                      checked={Tearing}
                      onChange={() => setTearing(!Tearing)}
                    />
                    <span>Tearing</span>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      value={LossofMuscleCoordination}
                      checked={LossofMuscleCoordination}
                      onChange={() =>
                        setLossofMuscleCoordination(!LossofMuscleCoordination)
                      }
                    />
                    <span>Loss of muscle coordination</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="formsheading">
              <h6>Mental Status Exam/Behavioral Observations:</h6>
              <h6>General Appearance</h6>
            </div>

            <div class="checkbox-container">
              <div class="chechbox12">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Apparent age</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Height</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Weight</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Attire</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Grooming</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Consistent</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Average</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Average</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Casual</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Well-groomed</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Younger</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Short</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Obese</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Neat</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Adequate</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Older</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Tall</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Overweight</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Tattered</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Unkempt</span>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Older</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Tall</span> */}
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Thin</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Dirty</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Disheveled</span>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Older</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Tall</span> */}
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Emaciated</span>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Dirty</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Disheveled</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="formsheading">
              <h6>Demeanor / Interaction</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12-aligment4">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Mood</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Affect</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Eye Contact</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Cooperation</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Euthymic</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal range</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Appropriate</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Appropriate</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Irritable</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Depressed</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Minimal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Hostile</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Elevated</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Labile</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Poor</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Evasive</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Depressed</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Constricted</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Adequate</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Defensive</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Anxious</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Other</span>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Adequate</span> */}
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Indifferent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="formsheading">
              <h6>Speech</h6>
            </div>

            <div class="checkbox-container">
              <div class="chechbox12">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Articulation</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Tone</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Rate</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Quantity</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Response latency</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Unintelligible</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Soft</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Slow</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Verbose</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Delayed</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Mumbled</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Loud</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Fast</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Mutism</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Shortened</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Slurred</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Pressured</span>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Adequate</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Defensive</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Defensive</span> */}
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Stuttered</span>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Other</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Adequate</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Indifferent</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Indifferent</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="formsheading">
              <h6>Cognition</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12-aligment411">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Thought content</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Thought processes</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Delusions</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Hallucinations</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Unremarkable</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Logical/Coherent</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>No</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Unremarkable</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Suspicious</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Tangential</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Yes, persecutory</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Visual hallucinations</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Negative</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Circumstantial</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Yes, somatic</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Auditory hallucinations</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Concrete</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Vague</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Yes, grandiose</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Yes, Tactile hallucinations</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Stuttered</span> */}
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" />
                                        <span>Other</span> */}
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Yes, other</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Yes, other</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="formsheading">
              <h6>Motor activity</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12-aligment411">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Gait</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Posture</label>
                  </div>
                  <div class="checkboxitem">
                    {/* <input type="checkbox" /> */}
                    <label>Psychomotor Activity</label>
                  </div>
                  <div class="checkboxitem">
                    <label>Mannerisms</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Normal</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Within normal limits</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>None</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Staggering</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Relaxed</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Calm</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Tics</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Shuffling</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Rigid</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Hyperactive</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Tremors</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Slow</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Tense</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Agitated</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Rocking</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Awkward</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Slouched</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Hypoactive</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" />
                    <span>Picking</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="yeschechbox1" style={{marginTop:"1.5rem"}}>
              <label htmlFor="" >Orientation to Person:</label>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>No</span>
              </div>
              <label htmlFor="">Place:</label>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>No</span>
              </div>
              <label htmlFor="">Time:</label>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>No</span>
              </div>
              <label htmlFor="">Circumstances:</label>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Judgment:</label>
              <div className="yesNoAligment">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Good</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Fair</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Poor</span>
              </div>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Insight:</label>
              <div className="yesNoAligment">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Good</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Fair</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Poor</span>
              </div>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Memory:</label>
              <div className="yesNoAligment">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Good</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Fair</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Poor</span>
              </div>
              </div>
            </div>
            <div className="yeschechbox">
              <div style={{display:"flex", gap:"90px"}}>
              <label htmlFor="">Ability to concentration:</label>

              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="intact"
                  checked={intact}
                  onChange={()=>setIntact(!intact)}
                />
                <label htmlFor="intact">Intact</label>
              </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="otherintact">Other (please specify):</label>
              <input
                type="text"
                id="otherintact"
                value={otherintact}
                placeholder="please specify"
                required
                onChange={(e)=>setOtherIntact(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">
                Significant Social/Developmental History:
              </label>
              <p>Child</p>
              <input
                type="text"
                id="approvedby"
                value={significantSocialDevelopmentalHistory}
                placeholder="Enter "
                required
                onChange={(e)=>setSignificantSocialDevelopmentalHistory(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Educational history:</label>
              <input
                type="text"
                id="approvedby"
                value={currentStudentLocation}
                placeholder="Enter "
                required
                onChange={(e)=>setCurrentStudentLocation(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Highest level of education:</label>
              <input
                type="text"
                id="approvedby"
                value={highestEducation}
                placeholder="Enter education"
                required
                onChange={(e)=>setHighestEducation(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Special education:</label>
              <div className="employment-Aligmant">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={specialEducation===true} 
                  onChange={()=>setSpecialEducation(true)}
                />
                <span>Yes</span>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={specialEducation===true} 
                  onChange={()=>setSpecialEducation(true)}
                />
                <span>No</span>
              </div>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Currently a student?</label>
              <div className="employment-Aligmant">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={currentStudent===true} 
                  onChange={()=>setCurrentStudent(true)}
                />
                <span>Yes</span>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={currentStudent===false} 
                  onChange={()=>setCurrentStudent(false)}
                />
                <span>No</span>
              </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">If yes, where?</label>
              <input
                type="text"
                id="approvedby"
                value={ifYesWhere}
                placeholder="Enter text"
                required
                onChange={(e)=>setIfYesWhere(e.target.value)}
              />
            </div>
            <div className="formsheading">
              <h6>Employment history:</h6>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Currently employed:</label>
              <div className="employment-Aligmant">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  name=""
                  id="currentlyEmployed"
                  checked={currentlyEmployed===true}
                  onChange={()=>setCurrentlyEmployed(true)}
                />
                <label htmlFor="currentlyEmployed">Yes</label>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="currentlyEmployedno"
                  checked={currentlyEmployed===false}
                  onChange={()=>setCurrentlyEmployed(false)}
                />
                <label htmlFor="currentlyEmployedno">No</label>
              </div>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Fully time employed:</label>
              <div className="employment-Aligmant">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  name=""
                  id="fullTime"
                  checked={fullTime===true}
                  onChange={()=>setFullTime(true)}
                />
                <label htmlFor="fullTime">Yes</label>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="fullTimeno"
                  checked={fullTime===false}
                  onChange={()=>setFullTime(false)}
                />
                <label htmlFor="fullTimeno">No</label>
              </div>
              </div>
              </div>
            <div className="form-field">
              <label htmlFor="approvedby">If employed, where? FT or PT?</label>
              <input
                type="text"
                id="approvedby"
                value={employmentLocation}
                placeholder="Enter text"
                required
                onChange={(e)=>setEmploymentLocation(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Work History (and barriers to employment)
              </label>
              <textarea
                id="programlocation&address"
                value={workHistory}
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
                onChange={(e)=>setWorkHistory(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Military History:</label>
              <div className="yesNoAligment">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="militaryService"
                  checked={militaryService===true}
                  onChange={()=>setMilitaryService(true)}

                />
               <label htmlFor="militaryService">Yes</label>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="militaryServiceno"
                  checked={militaryService===false}
                  onChange={()=>setMilitaryService(false)}

                />
               <label htmlFor="militaryServiceno">No</label>
              </div>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Currently on active duty?</label>
              <div className="yesNoAligment">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="activeDuty"
                  checked={activeDuty===true}
                  onChange={()=>setActiveDuty(true)}
                />
              <label htmlFor="activeDuty">Yes</label>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="activeDutyno"
                  checked={activeDuty===false}
                  onChange={()=>setActiveDuty(false)}
                />
              <label htmlFor="activeDutyno">No</label>
              </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Criminal Justice Legal History
              </label>
              <Select
              isMulti
              value={selectedValue}
              onChange={selectedValueHandler}
              options={selectedValueOption}
              />
              
            </div>
            <div className="formsheading">
              <h6>Current Independent Living Skills:</h6>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Type of Activity</label>
              <Select
              value={bathingShoweringGood}
              isMulti
              onChange={bathingShoweringGoodJHandler}
              options={bathingShoweringGoodOptions}/>
            </div>
            <div className="yeschechbox employment-Aligmant">
              <div>
                <input
                  type="checkbox"
                  checked={bathingShoweringFair===true}
                  onChange={()=>setBathingShoweringFair(true)}
                />
                <span>Good</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={bathingShoweringFair===false}
                  onChange={()=>setBathingShoweringFair(false)}
                />
                <span>Fair</span>
              </div>
              <div>
                <input
                  type="checkbox"
                
                />
                <span>Not so good</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Need assist?</label>
              <div className="employment-Aligmant">
              <div>
                <input
                  type="checkbox"
                  checked={bathingShoweringNeedAssist===true}
                  onChange={()=>setBathingShoweringNeedAssist(true)}
                />
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={bathingShoweringNeedAssist===false}
                  onChange={()=>setBathingShoweringNeedAssist(false)}
                />
                <span>No</span>
              </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value={bathingShoweringComments}
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
                onChange={(e)=>setBathingShoweringComments(e.target.value)}
              />
            </div>
            {/* start working  */}
            <div className="formsheading">
              <h6>Triggers:</h6>
              <input
                type="text"
                placeholder="Enter text"
                required
                value={triggers}
                onChange={(e) => setTriggers(e.target.value)}
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Fall risk:</label>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  id="fallRisk"
                  checked={fallRisk === true}
                  onChange={() => setFallRisk(true)}
                />
                <label htmlFor="fallRisk">Yes</label>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  id="fallRiskno"
                  checked={fallRisk === false}
                  onChange={() => setFallRisk(false)}
                />
                <label htmlFor="fallRiskno">No</label>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">If yes please explain:</label>
              <input
                type="text"
                id="approvedby"
                value={fallRiskExplanation}
                placeholder="Enter text"
                required
                onChange={(e) => setFallRiskExplanation(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Hobbies/Leisure Activities:
              </label>
              <textarea
                id="programlocation&address"
                value={hobbiesLeisureActivities}
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
                onChange={(e) => setHobbiesLeisureActivities(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmissionMedical">Medical Equipment:</label>
        
              <Select
              value={selectedValueMedical}
              isMulti
              onChange={selectedValueMedicalHandler}
              options={selectedValueMedicalOption}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Special Precautions:</label>
              <Select
              value={selectedValueSpecialPrecautions}
              isMulti
              onChange={selectedValueSpecialPrecautionsHandler}
              options={selectedValueSpecialPrecautionsOption}
              />
            </div>
            <div className="formsheading">
              <h6>Safety and Risk Assessment</h6>
            </div>
            <div className="yeschechbox1">
              <label htmlFor="">
                Are you currently thinking about harming yourself or committing
                suicide?
              </label>
              <div className="riskAndSafityAligment" style={{paddingLeft:"15px"}}>
              <div className="checkBox-aligment">
                <input
                  type="checkbox"
                  id="currentThoughtsOfHarmingSelf"
                  checked={currentThoughtsOfHarmingSelf === true}
                  onChange={() => setCurrentThoughtsOfHarmingSelf(true)}
                />
                <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
              </div>
              <div className="checkBox-aligment">
                <input
                  type="checkbox"
                  id="currentThoughtsOfHarmingSelfno"
                  checked={currentThoughtsOfHarmingSelf === false}
                  onChange={() => setCurrentThoughtsOfHarmingSelf(false)}
                />
                <label htmlFor="currentThoughtsOfHarmingSelfno">No</label>
              </div>
              </div>
            </div>


            <div className="yeschechbox1">
              <label htmlFor="">Ideation</label>
              {/* <input
                style={{ marginRight: "1rem" }}
                required
                placeholder="Enter text"
                value={suicidalIdeation}
                onChange={(e) => setSuicidalIdeation(e.target.value)}
              /> */}

<div className="employment-Aligmant-location">
              <div>
                <input
                  type="checkbox"
                  // checked={bathingShoweringNeedAssist===true}
                  // onChange={()=>setBathingShoweringNeedAssist(true)}
                />
                <span>Fleeting</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  // checked={bathingShoweringNeedAssist===false}
                  // onChange={()=>setBathingShoweringNeedAssist(false)}
                />
                <span>Periodic</span>
              </div>
             <div>
                <input
                  type="checkbox"
                  // checked={bathingShoweringNeedAssist===false}
                  // onChange={()=>setBathingShoweringNeedAssist(false)}
                />
                <span>Constant</span>
              </div>
              <div style={{marginLeft:"10%"}}>
                <input
                  type="checkbox"
                  // checked={bathingShoweringNeedAssist===false}
                  // onChange={()=>setBathingShoweringNeedAssist(false)}
                />
                <span>N/A</span>
              </div>
              </div>
        
            </div>


              <div className="increasingClass" >
              <label htmlFor="">Increasing in:</label>
                 
                 <div className="increasingClassInternal">
            <div className="yeschechbox1">
              <div>
                <span>Urgency:</span>
              </div>
              <div
                style={{ display: "flex", gap: "7px", alignItems: "center",marginLeft:"10px" }}
              >
                <input
                  type="checkbox"
                  id="suicidalIdeationUrgency"
                  checked={suicidalIdeationUrgency === true}
                  onChange={() => setSuicidalIdeationUrgency(true)}
                />
                <label htmlFor="suicidalIdeationUrgency">Yes</label>
              </div>
              <div
                style={{ display: "flex", gap: "7px", alignItems: "center",marginLeft:"10px" }}
              >
                <input
                  type="checkbox"
                  id="suicidalIdeationUrgencyno"
                  checked={suicidalIdeationUrgency === false}
                  onChange={() => setSuicidalIdeationUrgency(false)}
                />
                <label htmlFor="suicidalIdeationUrgencyno">NO</label>
              </div>
            </div>


            <div className="yeschechbox1" style={{marginLeft:"3rem"}}>
              <label>Severity:</label>
              <div
                style={{ display: "flex", gap: "7px", alignItems: "center",marginLeft:"10px" }}
              >
                <input
                  type="checkbox"
                  id="currentThoughtsOfHarmingSelf"
                  checked={currentThoughtsOfHarmingSelf === true}
                  onChange={() => setSuicidalIdeationSeverity(true)}
                />
                <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
              </div>
              <div
                style={{ display: "flex", gap: "7px", alignItems: "center",marginLeft:"10px" }}
              >
                <input
                  type="checkbox"
                  id="suicidalIdeationSeverityno"
                  checked={suicidalIdeationSeverity === false}
                  onChange={() => setSuicidalIdeationSeverity(false)}
                />
                <label htmlFor="suicidalIdeationSeverityno">No</label>
              </div>
            </div>
            </div>

              </div>
         
            
            <div className="yeschechbox1">
              <label htmlFor="">
                Are you currently thinking about harming others or have
                homicidal thoughts?
              </label>

              <div className="safetyRiskLast">
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="currentThoughtsOfHarmingOthers"
                  checked={currentThoughtsOfHarmingOthers === true}
                  onChange={() => setCurrentThoughtsOfHarmingOthers(true)}
                />
                <label htmlFor="currentThoughtsOfHarmingOthers">Yes</label>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  id="currentThoughtsOfHarmingOthersno"
                  checked={currentThoughtsOfHarmingOthers === false}
                  onChange={() => setCurrentThoughtsOfHarmingOthers(false)}
                />
                <label htmlFor="currentThoughtsOfHarmingOthersno">No</label>
              </div>
              </div>
            </div>

              
            <div className="formsheading">
              <h6>Risk Factors:</h6>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Select risk factors that apply
              </label>
              <Select
              value={selectedValueRiskFactors}
              isMulti
              options={selectedValueRiskFactorsOption}
              onChange={selectedValueRiskFactorsHandler}/>
            </div>
            <div className="yeschechbox">
              <div className="safetyRiskFactor">
              <div className="safetyRiskFactor-child">
                <input type="checkbox" id="riskYesNo" checked={riskYesNo===true} onChange={()=>setRiskYesNo(true)} />
                <label htmlFor="riskYesNo">Yes</label>
              </div>
              <div className="safetyRiskFactor-child">
                <input type="checkbox" id="riskYesNono" checked={riskYesNo===false} onChange={()=>setRiskYesNo(false)}/>
                <label htmlFor="riskYesNono">No</label>
              </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value={riskComment}
                placeholder="Enter text"
                rows={2}
                cols={82}
                
                onChange={(e)=>setRiskComment(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="safetybutton"
                onClick={handleRiskFactor}
              >
                Add
              </button>
            </div>

            
            <div className="needs-interventions-container">
  <div className="needs-interventions-column3">
    {riskFactorArray.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Select risk factors that apply</th>
            <th>Yes</th>
            <th>No</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {riskFactorArray?.map((i, index) => (
            <tr key={index}>
              <td>
                <ol>
                  {i?.selectedValueRiskFactors?.map((item) => (
                    <li key={item?.value}>{item?.value}</li>
                  ))}
                </ol>
              </td>
              <td>{`${index + 1}. ${i.riskYesNo === true ? "True" : "False"}`} </td>
              <td>{`${index + 1}. ${i.riskYesNo === true ? "False" : "True"}`} </td>
              <td>{`${index + 1}. ${i.riskComment}`} </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>

            <div className="form-field">
              <label htmlFor="reasonadmission">
                Protective factors that apply:
              </label>
              <Select
              value={selectedValueProtectiveFactors}
              isMulti
              onChange={selectedValueProtectiveFactorsHandler}
              options={selectedValueProtectiveFactorsOption}
              />
           
            </div>
            <div className="yeschechbox">
            <div className="safetyRiskFactor">
              <div className="safetyRiskFactor-child">
              <input type="checkbox" id="protectiveYesNo" checked={protectiveYesNo===true} onChange={()=>setProtectiveYesNo(true)} />
                <label htmlFor="protectiveYesNo">Yes</label>
              </div>
              <div className="safetyRiskFactor-child">
              <input type="checkbox" id="protectiveYesNono" checked={protectiveYesNo===false} onChange={()=>setProtectiveYesNo(false)} />
                <label htmlFor="protectiveYesNono">No</label>
              </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value={protectiveComment}
                placeholder="Enter text"
                rows={2}
                cols={82}
                
                onChange={(e)=>setprotectiveComment(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="safetybutton"
                onClick={handleProtectiveFactors}
              >
                Add
              </button>
            </div>

            <div className="needs-interventions-container">
  <div className="needs-interventions-column3">
    {protectiveFactorsArray.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Protective factors that apply</th>
            <th>Yes</th>
            <th>No</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {protectiveFactorsArray?.map((i, index) => (
            <tr key={index}>
              <td>
                <ol>
                  {i?.selectedValueProtectiveFactors?.map((item) => (
                    <li key={item?.value}>{item?.value}</li>
                  ))}
                </ol>
              </td>
              <td>{`${index + 1}. ${i.protectiveYesNo === true ? "True" : "False"}`} </td>
              <td>{`${index + 1}. ${i.protectiveYesNo === true ? "False" : "True"}`} </td>
              <td>{`${index + 1}. ${i.protectiveComment}`} </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>


           
            <div className="formsheading">
              <p>
                Considering the responses to the above risk factors in
                combination with all the other information you know about the
                person (gender, age, diagnosis, balancing factors-resiliency and
                supports, would you rate the level of risk for this person for
                danger to self (DTS) as:
              </p>
            </div>
            <div className="yeschechbox_select-4">
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={riskLevel === "No Risk"}
                  onChange={() => setRiskLevel("No Risk")}
                />
                <span>No Risk</span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={riskLevel === "Low Risk"}
                  onChange={() => setRiskLevel("Low Risk")}
                />
                <span>Low Risk</span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={riskLevel === "Moderate Risk"}
                  onChange={() => setRiskLevel("Moderate Risk")}
                />
                <span>Moderate Risk</span>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={riskLevel === "High Risk"}
                  onChange={() => setRiskLevel("High Risk")}
                />
                <span>High Risk</span>
              </div>
            </div>
            <div className="formsheading">
              <h6>Diagnoses:</h6>
            </div>
            <div className="formsheading">
              <h6>Psychiatric Diagnoses</h6>
            </div>
            {/* <div className="form-field">
              <label htmlFor="approvedby">Primary*</label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter text"
                required
              />
            </div> */}
            <div className="form-field">
              <label htmlFor="icdCode">ICD Code:</label>
              <input
                type="text"
                required
                id="icdCode"
                value={icdCode}
                onChange={(e) => setIcdCode(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                required
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="primary">Primary:</label>
              <input
                type="text"
                required
                id="primary"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="secondary">Secondary:</label>
              <input
                type="text"
                required
                id="secondary"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="tertiary">Tertiary:</label>
              <input
                type="text"
                required
                id="tertiary"
                value={tertiary}
                onChange={(e) => setTertiary(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="additional">Additional:</label>
              <input
                type="text"
                required
                id="additional"
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="safetybutton"
                onClick={handlePsychiatricDiagnoses}
              >
                Add
              </button>
            </div>

            <div className="needs-interventions-container2">
              <div className="needs-interventions-column2">
                {psychiatricDiagnoses.length > 0 && (
                  <table>
                    <thead>
                    <th>icdCode</th>
                      <th>Description</th>
                      <th>Primary</th>
                      <th>Secondary</th>
                      <th>Tertiary</th>
                      <th>Additional</th>
                    </thead>
                    <tbody>
                      {psychiatricDiagnoses?.map((i, index) => (
                        <tr>
                          <td>{`${index + 1}. ${i.icdCode}`} </td>
                          <td>{`${index + 1}. ${i.description}`} </td>
                          <td>{`${index + 1}. ${i.primary}`} </td>
                          <td>{`${index + 1}. ${i.secondary}`} </td>
                          <td>{`${index + 1}. ${i.tertiary}`} </td>
                          <td>{`${index + 1}. ${i.additional}`} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              </div>


           

            <div className="formsheading">
              <h6>Medical Diagnoses</h6>
            </div>
            <div className="form-field">
              <label htmlFor="icdCode">ICD Code:</label>
              <input
                type="text"
                required
                id="icdCode"
                value={icdCodeMedicalDiagnoses}
                onChange={(e) => setIcdCodeMedicalDiagnoses(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                required
                id="description"
                value={descriptionMedicalDiagnoses}
                onChange={(e) => setDescriptionMedicalDiagnoses(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="primary">Primary:</label>
              <input
                type="text"
                required
                id="primary"
                value={primaryMedicalDiagnoses}
                onChange={(e) => setPrimaryMedicalDiagnoses(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="secondary">Secondary:</label>
              <input
                type="text"
                required
                id="secondary"
                value={secondaryMedicalDiagnoses}
                onChange={(e) => setSecondaryMedicalDiagnoses(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="tertiary">Tertiary:</label>
              <input
                type="text"
                required
                id="tertiary"
                value={tertiaryMedicalDiagnoses}
                onChange={(e) => setTertiaryMedicalDiagnoses(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="additional">Additional:</label>
              <input
                type="text"
                required
                id="additional"
                value={additionalMedicalDiagnoses}
                onChange={(e) => setAdditionalMedicalDiagnoses(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="safetybutton"
                onClick={handleMedicalDiagnoses}
              >
                Add
              </button>
            </div>


            <div className="needs-interventions-container2">
              <div className="needs-interventions-column2">
                {medicalDiagnoses.length > 0 && (
                  <table>
                    <thead>
                    <th>icdCode</th>
                      <th>Description</th>
                      <th>Primary</th>
                      <th>Secondary</th>
                      <th>Tertiary</th>
                      <th>Additional</th>
                    </thead>
                    <tbody>
                      {medicalDiagnoses?.map((i, index) => (
                        <tr>
                          <td>{`${index + 1}. ${i.icdCodeMedicalDiagnoses}`} </td>
                          <td>{`${index + 1}. ${i.descriptionMedicalDiagnoses}`} </td>
                          <td>{`${index + 1}. ${i.primaryMedicalDiagnoses}`} </td>
                          <td>{`${index + 1}. ${i.secondaryMedicalDiagnoses}`} </td>
                          <td>{`${index + 1}. ${i.tertiaryMedicalDiagnoses}`} </td>
                          <td>{`${index + 1}. ${i.additionalMedicalDiagnoses}`} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              </div>

            <div className="formsheading">
              <h6>Psychosocial or Environmental Stressors</h6>
              <h6>Problems with / related to:</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12-aligment4">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="primarySupportGroup"
                      checked={primarySupportGroup}
                      onChange={() =>
                        setPrimarySupportGroup(!primarySupportGroup)
                      }
                    />
                    <label htmlFor="primarySupportGroup">
                      Primary Support Group
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="educationalProblems"
                      checked={educationalProblems}
                      onChange={() =>
                        setEducationalProblems(!educationalProblems)
                      }
                    />
                    <label htmlFor="educationalProblems">
                      Educational problems
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="occupationalProblems"
                      checked={occupationalProblems}
                      onChange={() =>
                        setOccupationalProblems(!occupationalProblems)
                      }
                    />
                    <label htmlFor="occupationalProblems">
                      Occupational problems
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="sexualProblems"
                      checked={sexualProblems}
                      onChange={() => setSexualProblems(!sexualProblems)}
                    />
                    <label htmlFor="sexualProblems">Sexual problems</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="maritalProblems"
                      checked={maritalProblems}
                      onChange={() => setMaritalProblems(!maritalProblems)}
                    />
                    <label htmlFor="maritalProblems">Marital problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="housingProblems"
                      checked={housingProblems}
                      onChange={() => setHousingProblems(!housingProblems)}
                    />
                    <label htmlFor="housingProblems">Housing problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="interactionWithLegalSystem"
                      checked={interactionWithLegalSystem}
                      onChange={() =>
                        setInteractionWithLegalSystem(
                          !interactionWithLegalSystem
                        )
                      }
                    />
                    <label htmlFor="interactionWithLegalSystem">
                      Interaction with legal system
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="otherBoolean"
                      checked={otherBoolean}
                      onChange={() => setOtherBoolean(!otherBoolean)}
                    />
                    <label htmlFor="otherBoolean">other (please specify)</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="accessToHealthCareServices"
                      checked={accessToHealthCareServices}
                      onChange={() =>
                        setAccessToHealthCareServices(
                          !accessToHealthCareServices
                        )
                      }
                    />
                    <label htmlFor="accessToHealthCareServices">
                      Access to health care services
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="familyProblems"
                      checked={familyProblems}
                      onChange={() => setFamilyProblems(!familyProblems)}
                    />
                    <label htmlFor="familyProblems">Family problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="substanceUseInHome"
                      checked={substanceUseInHome}
                      onChange={() =>
                        setSubstanceUseInHome(!substanceUseInHome)
                      }
                    />
                    <label htmlFor="substanceUseInHome">
                      Substance use in home
                    </label>
                  </div>
                  <div class="checkboxitem"></div>
                </div>
              </div>
            </div>
            {otherBoolean && (
              <div className="form-field">
                <textarea
                  id="programlocation&address"
                  value={otherStressors}
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                  onChange={(e) => setOtherStressors(e.target.value)}
                />
              </div>
            )}

            <div className="yeschechbox">
              <label htmlFor="">Significant recent losses:</label>
              <div
                className="Significant-losses"
              >
                <input
                  type="checkbox"
                  id="setSetNoAndYes"
                  checked={setNoAndYes === true}
                  onChange={() => setSetNoAndYes(true)}
                />
                <label htmlFor="setSetNoAndYes">Yes</label>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  id="setSetNoAndYesno"
                  checked={setNoAndYes === false}
                  onChange={() => setSetNoAndYes(false)}
                />
                <label htmlFor="setSetNoAndYesno">No</label>
              </div>
            </div>
            <div className="formsheading">
              <h6>If yes, please check applicable loss(es):</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12-correct">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="death"
                      checked={death}
                      onChange={() => setDeath(!death)}
                    />
                    <label htmlFor="death">Death</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="injury"
                      checked={injury}
                      onChange={() => setInjury(!injury)}
                    />
                    <label htmlFor="injury">Injury</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="medicalSurgical"
                      checked={medicalSurgical}
                      onChange={() => setMedicalSurgical(!medicalSurgical)}
                    />
                    <label htmlFor="medicalSurgical">Medical/ surgical </label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="job"
                      checked={job}
                      onChange={() => setJob(!job)}
                    />
                    <label htmlFor="job">Job</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="divorceSeparation"
                      checked={divorceSeparation}
                      onChange={() => setDivorceSeparation(!divorceSeparation)}
                    />
                    <label htmlFor="divorceSeparation">
                      Divorce / separation{" "}
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="accidentInjury"
                      checked={accidentInjury}
                      onChange={() => setAccidentInjury(!accidentInjury)}
                    />
                    <label htmlFor="accidentInjury">Accident /injury</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="childRemovedFromHouse"
                      checked={childRemovedFromHouse}
                      onChange={() =>
                        setChildRemovedFromHouse(!childRemovedFromHouse)
                      }
                    />
                    <label htmlFor="childRemovedFromHouse">
                      Child removed from house
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="violentActsAgainstPersonFamily"
                      checked={violentActsAgainstPersonFamily}
                      onChange={() =>
                        setViolentActsAgainstPersonFamily(
                          !violentActsAgainstPersonFamily
                        )
                      }
                    />
                    <label htmlFor="violentActsAgainstPersonFamily">
                      Violent acts against person/family{" "}
                    </label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="otherSignificantRecentLosses"
                      checked={otherSignificantRecentLosses}
                      onChange={() =>
                        setOtherSignificantRecentLosses(
                          !otherSignificantRecentLosses
                        )
                      }
                    />
                    <label htmlFor="otherSignificantRecentLosses">
                      other (please specify)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="form-field">
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="form-field">
              <label htmlFor="programlocation&address">Additional Notes:</label>
              <textarea
                id="programlocation&address"
                value={additionalNotes}
                placeholder="Enter text"
                rows={5}
                cols={82}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Staff name:</label>
              <input
                type="text"
                id="approvedby"
                value={staffName}
                placeholder="Enter text"
                required
                onChange={(e) => setStaffName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Enter Signature</label>
              <input
                type="text"
                required
                value={staffSignature}
                onChange={(e) => setStaffSignature(e.target.vaue)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Enter Staff Title</label>
              <input
                type="text"
                required
                value={staffTitle}
                onChange={(e) => setStaffTitle(e.target.vaue)}
              />
            </div>
            {/* <div class="file-upload-box">
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
            </div> */}
            <div className="form-field">
              <label htmlFor="todaydate">Date</label>
              <input
                type="date"
                id="todaydate"
                value={staffDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setStaffDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">BHP</label>
              <input
                type="text"
                id="approvedby"
                value={bhpName}
                placeholder="Enter text"
                required
                onChange={(e) => setBhpName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="bhpCredentials">Enter BHP Credentials</label>
              <input
                type="text"
                required
                value={bhpCredentials}
                onChange={(e) => setBhpCredentials(e.target.vaue)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="bhpSignature">Enter Signature</label>
              <input
                type="text"
                required
                value={bhpSignature}
                onChange={(e) => setBhpSignature(e.target.vaue)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="todaydate">Date</label>
              <input
                type="date"
                id="todaydate"
                value={bhpDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setBhpDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="initalsubmit"
            >
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InitialAssessment;
