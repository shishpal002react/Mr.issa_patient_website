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
import Select from 'react-select';

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
  const [dateOfAssessment, setDateOfAssessment] = useState(
    ""
  );
  const [ahcccsNumber, setAhcccsNumber] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState(
    ""
  );
  const [ethnicity, setEthnicity] = useState("");
  const [admissionStatus, setAdmissionStatus] = useState("");
  const [programLocation, setProgramLocation] = useState("");
  const [guardianship, setGuardianship] = useState("");
  const [powerOfAttorneyStatus, setPowerOfAttorneyStatus] = useState(
    ""
  );
  const [todayDate, setTodayDate] = useState("");
  const [guardianshipPoaPubFidName, setGuardianshipPoaPubFidName] = useState(
    ""
  );
  const [approvedBy, setApprovedBy] = useState("");
  const [reasonForAdmission, setReasonForAdmission] = useState(
    ""
  );
  const [residentGoals, setResidentGoals] = useState("");

  // Resident Strengths (Array)
  const [residentStrengths, setResidentStrengths] = useState([]);

  const [residentLimitations, setResidentLimitations] = useState(
    ""
  );
  const [currentBehavioralIssues, setCurrentBehavioralIssues] = useState(
    ""
  );

  // Behavioral Interventions (Array of Objects)
  const [behavioralInterventions, setBehavioralInterventions] = useState([
    {
      need: "",
      intervention: "",
    },
  ]);

  const [dischargePlan, setDischargePlan] = useState("");
  const [estimateDateOfDischarge, setEstimateDateOfDischarge] = useState(
    ""
  );
  const [agreementWithPlan, setAgreementWithPlan] = useState(
    
  );

  // Resident Guardian Agreement
  const [residentGuardianAgreementName,setResidentGuardianAgreementName]=useState("");
  const [residentGuardianAgreementSignature,setResidentGuardianAgreementSignature]=useState("")
  const [residentGuardianAgreementDate,setResidentGuardianAgreementDate]=useState("")
  // const [residentGuardianAgreement, setResidentGuardianAgreement] = useState({});

  // Staff Agreement
  const [staffAgreementname,setStaffAgreementName]=useState("");
  const [staffAgreementSignature,setStaffAgreementSignature]=useState("");
  const [staffAgreementDate,setStaffAgreementDate]=useState("")
  // const [staffAgreement, setStaffAgreement] = useState({});

  // BHP Agreement
  const [bhpAgreementName,setBhpAgreementName]=useState("");
  const [bhpAgreementSignature,setBhpAgreementSignature]=useState("")
  const [bhpAgreementDate,setBhpAgreementDate]=useState("")
  // const [bhpAgreement, setBhpAgreement] = useState({});

  // Other
  const [otherName,setOtherName]=useState("");
  const [otherRelationship,setOtherRelationship]=useState("");
  const [otherSignature,setOtherSignature]=useState("");
  const [otherDate,setOtherDate]=useState("");
  // const [other, setOther] = useState({});

  // Medical Conditions (Array of Objects) array
  const [medicalConditionsCondition,setMedicalConditionsCondition]=useState('');
  const [medicalConditionsYes,setMedicalConditionsYes]=useState("")
  const [medicalConditionsNo,setMedicalConditionsNo]=useState("")
  const [medicalConditionsComments,setMedicalConditionsComments]=useState("")
  const [medicalConditions, setMedicalConditions] = useState([]);

  // miss the value between the 79 to 99
  const [SignificantFamilyMedicalPsychiatricHistory,setSignificantFamilyMedicalPsychiatricHistory]=useState("")
  //mental Health
  const [mentalHealthTreatmentHistoryTypeOfService,setMentalHealthTreatmentHistoryTypeOfService]=useState("");
  const [mentalHealthTreatmentHistoryWhere,setMentalHealthTreatmentHistoryWhere]=useState("");
  const [mentalHealthTreatmentHistoryDates,setMentalHealthTreatmentHistoryDates]=useState("");
  const [mentalHealthTreatmentHistoryDiagnosisReason,setMentalHealthTreatmentHistoryDiagnosisReason]=useState("");
  const [mentalHealthTreatmentHistory,setMentalHealthTreatmentHistory]=useState([]);
  const [substanceAbuseHistory,setSubstanceAbuseHistory]=useState("");
  const [substanceAbuseDenies,setSubstanceAbuseDenies]=useState("")
  // substanceAbuseHistoryData array
  const [substanceAbuseHistoryDataTypes,setSubstanceAbuseHistoryDataTypes]=useState("")
  const [substanceAbuseHistoryDataAgeOfFirstUse,setSubstanceAbuseHistoryDataAgeOfFirstUse]=useState("");
  const [substanceAbuseHistoryDataLastUse,setSubstanceAbuseHistoryDataLastUse]=useState("");
  const [substanceAbuseHistoryDataFrequency,setSubstanceAbuseHistoryDataFrequency]=useState("");
  const [substanceAbuseHistoryDataLengthOfSobriety,setSubstanceAbuseHistoryDataLengthOfSobriety]=useState("");
  const [substanceAbuseHistoryData,setSubstanceAbuseHistoryData]=useState([]);

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
const [LossofMuscleCoordination, setLossofMuscleCoordination] = useState(false);
const [activeWithdrawalSymptoms, setActiveWithdrawalSymptoms] = useState({});

  // Mental Status Exam (Nested Object)

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
  const [personalInformation, setPersonalInformation] = useState({
    highestEducation: "Your Highest Education",
    specialEducation: "Your Special Education",
    currentStudent: "Yes/No",
    currentStudentLocation: "Your Current Student Location",
  });

  // Employment History (Nested Object)
  const [employmentHistory, setEmploymentHistory] = useState({
    currentlyEmployed: "Yes/No",
    employmentLocation: "Your Employment Location",
    fullTime: "Yes/No",
  });

  const [workHistory, setWorkHistory] = useState("Your Work History");

  // Military History (Nested Object)
  const [militaryHistory, setMilitaryHistory] = useState({
    militaryService: "Yes/No",
    activeDuty: "Yes/No",
  });

  // Arrested History (Multiple Fields)
  const [selectedValue, setSelectedValue] = useState('');
  const [arrestedForDUI, setArrestedForDUI] = useState(false);
  const [arrestedForAssault, setArrestedForAssault] = useState(false);
  const [arrestedForBadChecks, setArrestedForBadChecks] = useState(false);
  const [arrestedForShoplifting, setArrestedForShoplifting] = useState(false);
  const [arrestedForAttemptedMurder, setArrestedForAttemptedMurder] = useState(false);
  const [arrestedForDrug, setArrestedForDrug] = useState(false);
  const [arrestedForAlcohol, setArrestedForAlcohol] = useState(false);
  const [arrestedForDisorderlyConduct, setArrestedForDisorderlyConduct] = useState(false);
  const [arrestedForIdentityTheft, setArrestedForIdentityTheft] = useState(false);
  const [arrestedForSexOffense, setArrestedForSexOffense] = useState(false);
  const [arrestedForOther, setArrestedForOther] = useState(false);
  const [probationParole, setProbationParole] = useState(false);
  const [pendingLitigation, setPendingLitigation] = useState(false);
  const [sentencingDates, setSentencingDates] = useState(false);
  const [needsLegalAid, setNeedsLegalAid] = useState(false);
  const [incarcerated, setIncarcerated] = useState(false);

  const handleSelectChangeLegalHistory = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    // Handle additional logic based on selected value
    switch (value) {
      case 'Arrested for DUI':
        setArrestedForDUI(true);
        // Additional logic for DUI
        break;
      case 'Arrested for assault':
        setArrestedForAssault(true);
        // Additional logic for assault
        break;
      case 'Arrested for bad checks':
        setArrestedForBadChecks(true);
        // Additional logic for bad checks
        break;
      case 'Arrested for shop lifting':
        setArrestedForShoplifting(true);
        // Additional logic for shop lifting
        break;
      case 'Arrested for attempted murder':
        setArrestedForAttemptedMurder(true);
        // Additional logic for attempted murder
        break;
      case 'Arrested for drug':
        setArrestedForDrug(true);
        // Additional logic for drug-related arrest
        break;
      case 'Arrested for alcohol':
        setArrestedForAlcohol(true);
        // Additional logic for alcohol-related arrest
        break;
      case 'Arrested for disorderly conduct':
        setArrestedForDisorderlyConduct(true);
        // Additional logic for disorderly conduct arrest
        break;
      case 'Arrested for identity theft/ forgery':
        setArrestedForIdentityTheft(true);
        // Additional logic for identity theft/ forgery arrest
        break;
      case 'Arrested for sex offense':
        setArrestedForSexOffense(true);
        // Additional logic for sex offense arrest
        break;
      case 'Arrested for other':
        setArrestedForOther(true);
        // Additional logic for other arrest
        break;
      case 'Probation/parole, custody':
        setProbationParole(true);
        // Additional logic for probation/parole/custody
        break;
      case 'Pending litigation':
        setPendingLitigation(true);
        // Additional logic for pending litigation
        break;
      case 'Sentencing dates':
        setSentencingDates(true);
        // Additional logic for sentencing dates
        break;
      case 'Needs Legal Aid':
        setNeedsLegalAid(true);
        // Additional logic for needing legal aid
        break;
      case 'Incarcerated':
        setIncarcerated(true);
        // Additional logic for being incarcerated
        break;
      default:
        // Reset other state variables if needed
        setArrestedForDUI(false);
        setArrestedForAssault(false);
        setArrestedForBadChecks(false);
        setArrestedForShoplifting(false);
        setArrestedForAttemptedMurder(false);
        setArrestedForDrug(false);
        setArrestedForAlcohol(false);
        setArrestedForDisorderlyConduct(false);
        setArrestedForIdentityTheft(false);
        setArrestedForSexOffense(false);
        setArrestedForOther(false);
        setProbationParole(false);
        setPendingLitigation(false);
        setSentencingDates(false);
        setNeedsLegalAid(false);
        setIncarcerated(false);
        break;
    }
  };


  // Activities of Daily Living (ADLs)
  const [bathingShoweringGood, setBathingShoweringGood] = useState("");
  const [bathingShoweringFair, setBathingShoweringFair] = useState("");
  const [bathingShoweringNeedAssist, setBathingShoweringNeedAssist] =
    useState("");
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
  const [selectedValueMedical, setSelectedValueMedical] = useState('');
  const [medicalEquipmentWheelchair, setMedicalEquipmentWheelchair] = useState(false);
  const [medicalEquipmentOxygenTank, setMedicalEquipmentOxygenTank] = useState(false);
  const [medicalEquipmentCpapMachine, setMedicalEquipmentCpapMachine] = useState(false);
  const [medicalEquipmentShowerChair, setMedicalEquipmentShowerChair] = useState(false);
  const [medicalEquipmentOther, setMedicalEquipmentOther] = useState(false);

  const handleSelectChangeMedical = (event) => {
    const value = event.target.value;
    setSelectedValueMedical(value);

    // Handle additional logic based on selected value
    switch (value) {
      case 'Wheel Chair':
        setMedicalEquipmentWheelchair(true);
        // Additional logic for Wheel Chair
        break;
      case 'Oxygen tank':
        setMedicalEquipmentOxygenTank(true);
        // Additional logic for Oxygen tank
        break;
      case 'CPAP Machine':
        setMedicalEquipmentCpapMachine(true);
        // Additional logic for CPAP Machine
        break;
      case 'Shower chair':
        setMedicalEquipmentShowerChair(true);
        // Additional logic for Shower chair
        break;
      case 'Other':
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
  const [selectedValueSpecialPrecautions, setSelectedValueSpecialPrecautions] = useState('');
  const [seizure, setSeizure] = useState(false);
  const [elopementAwol, setElopementAwol] = useState(false);
  const [physicalAggression, setPhysicalAggression] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [inappropriateSexualBehaviors, setInappropriateSexualBehaviors] = useState(false);
  const [substanceUse, setSubstanceUse] = useState(false);
  const [noSpecialPrecautions, setNoSpecialPrecautions] = useState(false);
  const [specialPrecautions, setSpecialPrecautions] = useState();

  const handleSelectChangeSpecialPrecautions = (event) => {
    const value = event.target.value;
    setSelectedValueSpecialPrecautions(value);

    // Handle additional logic based on selected value
    switch (value) {
      case 'Yes Seizure':
        setSeizure(true);
        // Additional logic for Yes Seizure
        break;
      case 'Elopement/Awol':
        setElopementAwol(true);
        // Additional logic for Elopement/Awol
        break;
      case 'Physical Aggression':
        setPhysicalAggression(true);
        // Additional logic for Physical Aggression
        break;
      case 'Withdrawal':
        setWithdrawal(true);
        // Additional logic for Withdrawal
        break;
      case 'Inappropriate Sexual Behaviors':
        setInappropriateSexualBehaviors(true);
        // Additional logic for Inappropriate Sexual Behaviors
        break;
      case 'Substance use':
        setSubstanceUse(true);
        // Additional logic for Substance use
        break;
      case 'None':
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
  const [selectedValueRiskFactors, setSelectedValueRiskFactors] = useState('');
  const [currentSuicidalIdeation, setCurrentSuicidalIdeation] = useState(false);
  const [priorSuicideAttempt, setPriorSuicideAttempt] = useState(false);
  const [accessToMeans, setAccessToMeans] = useState(false);
  const [substanceAbuse, setSubstanceAbuse] = useState(false);
  const [otherSelfAbusingBehavior, setOtherSelfAbusingBehavior] = useState(false);
  const [recentLossesLackOfSupport, setRecentLossesLackOfSupport] = useState(false);
  const [behaviorCues, setBehaviorCues] = useState(false);
  const [symptomsOfPsychosis, setSymptomsOfPsychosis] = useState(false);
  const [familyHistoryOfSuicide, setFamilyHistoryOfSuicide] = useState(false);
  const [terminalPhysicalIllness, setTerminalPhysicalIllness] = useState(false);
  const [currentStressors, setCurrentStressors] = useState(false);
  const [chronicPain, setChronicPain] = useState(false);
  const [riskFactors, setRiskFactors] = useState({});

  const handleSelectChangeRiskFactors = (event) => {
    const value = event.target.value;
    setSelectedValueRiskFactors(value);

    // Handle additional logic based on selected value
    switch (value) {
      case 'Current suicidal ideation':
        setCurrentSuicidalIdeation(true);
        // Additional logic for Current suicidal ideation
        break;
      case 'Prior suicide attempt':
        setPriorSuicideAttempt(true);
        // Additional logic for Prior suicide attempt
        break;
      case 'Access to means (i.e. weapon)':
        setAccessToMeans(true);
        // Additional logic for Access to means (i.e. weapon)
        break;
      case 'Substance abuse':
        setSubstanceAbuse(true);
        // Additional logic for Substance abuse
        break;
      case 'Other self-abusing behavior':
        setOtherSelfAbusingBehavior(true);
        // Additional logic for Other self-abusing behavior
        break;
      case 'Recent losses/lack of support':
        setRecentLossesLackOfSupport(true);
        // Additional logic for Recent losses/lack of support
        break;
      case 'Behavior cues':
        setBehaviorCues(true);
        // Additional logic for Behavior cues
        break;
      case 'Symptoms of psychosis':
        setSymptomsOfPsychosis(true);
        // Additional logic for Symptoms of psychosis
        break;
      case 'Family history of suicide':
        setFamilyHistoryOfSuicide(true);
        // Additional logic for Family history of suicide
        break;
      case 'Terminal physical illness':
        setTerminalPhysicalIllness(true);
        // Additional logic for Terminal physical illness
        break;
      case 'Current stressors (specify)':
        setCurrentStressors(true);
        // Additional logic for Current stressors (specify)
        break;
      case 'Chronic pain':
        setChronicPain(true);
        // Additional logic for Chronic pain
        break;
      default:
        // Reset other state variables if needed
        setCurrentSuicidalIdeation(false);
        setPriorSuicideAttempt(false);
        setAccessToMeans(false);
        setSubstanceAbuse(false);
        setOtherSelfAbusingBehavior(false);
        setRecentLossesLackOfSupport(false);
        setBehaviorCues(false);
        setSymptomsOfPsychosis(false);
        setFamilyHistoryOfSuicide(false);
        setTerminalPhysicalIllness(false);
        setCurrentStressors(false);
        setChronicPain(false);
        break;
    }
  };
  // State variables for protectiveFactors
  const [selectedValueProtectiveFactors, setSelectedValueProtectiveFactors] = useState('');
  const [supportsAvailable, setSupportsAvailable] = useState(false);
  const [spiritualReligiousSupport, setSpiritualReligiousSupport] = useState(false);
  const [religiousCulturalProhibitions, setReligiousCulturalProhibitions] = useState(false);
  const [fearOfConsequences, setFearOfConsequences] = useState(false);
  const [ableToBeEngagedInIntervention, setAbleToBeEngagedInIntervention] = useState(false);
  const [willingToCommitToKeepingSelfSafe, setWillingToCommitToKeepingSelfSafe] = useState(false);
  const [protectiveFactors, setProtectiveFactors] = useState({});

  const handleSelectChangeProtectiveFactors = (event) => {
    const value = event.target.value;
    setSelectedValueProtectiveFactors(value);

    // Handle additional logic based on selected value
    switch (value) {
      case 'Supports available (family friends)':
        setSupportsAvailable(true);
        // Additional logic for Supports available (family friends)
        break;
      case 'Spiritual / religious support':
        setSpiritualReligiousSupport(true);
        // Additional logic for Spiritual / religious support
        break;
      case 'Religious/cultural prohibitions':
        setReligiousCulturalProhibitions(true);
        // Additional logic for Religious/cultural prohibitions
        break;
      case 'Fear of consequences':
        setFearOfConsequences(true);
        // Additional logic for Fear of consequences
        break;
      case 'Able to be engaged in intervention':
        setAbleToBeEngagedInIntervention(true);
        // Additional logic for Able to be engaged in intervention
        break;
      case 'Willing to commit to keeping self safe':
        setWillingToCommitToKeepingSelfSafe(true);
        // Additional logic for Willing to commit to keeping self safe
        break;
      default:
        // Reset other state variables if needed
        setSupportsAvailable(false);
        setSpiritualReligiousSupport(false);
        setReligiousCulturalProhibitions(false);
        setFearOfConsequences(false);
        setAbleToBeEngagedInIntervention(false);
        setWillingToCommitToKeepingSelfSafe(false);
        break;
    }
  };


  // State variable for riskLevel
  const [riskLevel, setRiskLevel] = useState("");

  // State variables for psychiatricDiagnoses
  const [icdCode, setIcdCode] = useState('');
  const [description, setDescription] = useState('');
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');
  const [additional, setAdditional] = useState('');
  const [psychiatricDiagnoses, setPsychiatricDiagnoses] = useState([]);

  // State variables for medicalDiagnoses
  const [icdCodeMedicalDiagnoses, setIcdCodeMedicalDiagnoses] = useState('');
  const [descriptionMedicalDiagnoses, setDescriptionMedicalDiagnoses] = useState('');
  const [primaryMedicalDiagnoses, setPrimaryMedicalDiagnoses] = useState('');
  const [secondaryMedicalDiagnoses, setSecondaryMedicalDiagnoses] = useState('');
  const [tertiaryMedicalDiagnoses, setTertiaryMedicalDiagnoses] = useState('');
  const [additionalMedicalDiagnoses, setAdditionalMedicalDiagnoses] = useState('');
  const [medicalDiagnoses, setMedicalDiagnoses] = useState([]);

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
  const [otherBoolean,setOtherBoolean]=useState(false);
  const [otherStressors, setOtherStressors] = useState("");

  // State variables for significantRecentLosses
  const [no,setNo]=useState(false);
  const [yes,setYes]=useState(false);
  const [setNoAndYes,setSetNoAndYes]=useState();
  const [death, setDeath] = useState(false);
  const [job, setJob] = useState('');
  const [childRemovedFromHouse, setChildRemovedFromHouse] = useState('');
  const [injury, setInjury] = useState(false);
  const [divorceSeparation, setDivorceSeparation] = useState('');
  const [violentActsAgainstPersonFamily, setViolentActsAgainstPersonFamily] = useState(false);
  const [medicalSurgical, setMedicalSurgical] = useState(false);
  const [accidentInjury, setAccidentInjury] = useState(false);
  const [otherSignificantRecentLosses, setOtherSignificantRecentLosses] = useState(false);
  // const [significantRecentLosses, setSignificantRecentLosses] = useState({});

  const [additionalNotes,setAdditionalNotes]=useState("")

  // State variables for staffInformation
  const [staffName, setStaffName] = useState('');
  const [staffTitle, setStaffTitle] = useState('');
  const [staffSignature, setStaffSignature] = useState("");
  const [staffDate, setStaffDate] = useState('');
  const [staffInformation, setStaffInformation] = useState({});

  // State variables for bhpInformation
  const [bhpName, setBhpName] = useState('');
  const [bhpCredentials, setBhpCredentials] = useState('');
  const [bhpSignature, setBhpSignature] = useState("");
  const [bhpDate, setBhpDate] = useState('');
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
    { label: 'Self motivated', value: 'Self motivated' },
    { label: 'Loving', value: 'Loving' },
    { label: 'Honesty', value: 'Honesty' },
    { label: 'Helping others', value: 'Helping others' },
    { label: 'Communication', value: 'Communication' },
    { label: 'Creative', value: 'Creative' },
    { label: 'Patient', value: 'Patient' },
    { label: 'Dedication', value: 'Dedication' },
    { label: 'Coloring', value: 'Coloring' },
    { label: 'Decision making', value: 'Decision making' },
    { label: 'Team work', value: 'Team work' },
    { label: 'Family', value: 'Family' },
    { label: 'Writing', value: 'Writing' },
    { label: 'Coloring', value: 'Coloring' },
    { label: 'Art', value: 'Art' },
  ];

  const handleSelectChange = (selectedOptions) => {
    setResidentStrengths(selectedOptions);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const stringValues = residentStrengths.map(item => item.value);

    const data={
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
      residentStrengths:stringValues,
      residentLimitations,
      currentBehavioralIssues,
      // missing
      dischargePlan,
      estimateDateOfDischarge,
      agreementWithPlan,
      residentGuardianAgreement :{
        name:residentGuardianAgreementName,
        signature:residentGuardianAgreementSignature,
        date:residentGuardianAgreementDate
      },
      staffAgreement:{
        name: staffAgreementname,
        signature:staffAgreementSignature,
        date:staffAgreementDate
      },
      bhpAgreement :{
        name:bhpAgreementName,
        signature:bhpAgreementSignature,
        date:bhpAgreementDate
      },
      other :{
        name: otherName,
        relationship:otherRelationship,
        signature:otherSignature,
        date:otherDate
      },
// missing
       mentalHealthTreatmentHistory,

//missing 





significantRecentLosses :{

  typeOfLoss:{
    death,
    job,
    childRemovedFromHouse,
    injury,
    divorceSeparation,
    violentActsAgainstPersonFamily,
    medicalSurgical,
    accidentInjury,
    other:otherSignificantRecentLosses
  }
}

    }


    initialAssestment_form(data);
    navigate("/intake");
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
          COMPANY NAME has notified
          <input
            style={{ outline: "none", border: "none" }}
            type="text"
            value={hasNotified}
            placeholder="_________"
            onChange={(e) => setHasNotified(e.target.value)}
          />{" "}
          to participate in his/her Service Treatment Plan/Initial Assessment on
          <input
            style={{ outline: "none", border: "none" }}
            type="text"
            value={assessmentOn}
            placeholder="_________"
            onChange={(e) => setAssessmentOn(e.target.value)}
          />
        </p>
        <form onSubmit={handleSubmit}>
          <h5>Section - 1</h5>
          <div className="form-section">
            <h2>Basic Details</h2>
            <div className="form-field">
              <label htmlFor="residentFullName">Company Name </label>
              <input
                type="text"
                id="residentFullName"
                value={companyName}
                placeholder="Enter full name"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
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
                onChange={(e)=>setResidentName(e.target.value)}
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
              <input type="text" required value={ethnicity} onChange={(e)=>setEthnicity(e.target.value)} />
              {/* <select
                style={{ color: "#1A9FB2" }}
                id="ethnicity"
                value={ethnicity}
                required
                onChange={(e)=>setEthnicity(e.target.value)}
              >
                <option value="Asian">Asian</option>
                <option value="Asian">Asian</option>
             
              </select> */}
            </div>
            <div className="form-field">
              <label htmlFor="admissionstatus">Admission Status</label>
              <select
                style={{ color: "#1A9FB2" }}
                id="admissionstatus"
                value={admissionStatus}
                required
                onChange={(e)=>setAdmissionStatus(e.target.value)}
              > 
               <option value="">Select Status</option><option value="Voluntary">Voluntary</option>
              <option value="Court Ordered Treatment">Court Ordered Treatment</option>
               
             
              </select>
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
                onChange={(e)=>setProgramLocation(e.target.value)}
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
                onChange={(e)=>setGuardianship(e.target.value)}
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
                onChange={(e)=>setPowerOfAttorneyStatus(e.target.value)}
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
                onChange={(e)=>setTodayDate(e.target.value)}
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
                onChange={(e)=>setGuardianshipPoaPubFidName(e.target.value)}
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
                onChange={(e)=>setApprovedBy(e.target.value)}
              />
            </div>
            <h2>Other Details</h2>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Reason for Admission to Services
              </label>
              <select id="reasonadmission" value={reasonForAdmission} required onChange={(e)=>setReasonForAdmission(e.target.value)}>
                <option value="Enter text">Select Reason For Admission</option>
                <option value="Depression">Depression</option>
                <option value="Mood changes">Mood changes</option>
                <option value="Trouble falling or staying asleep">
                  Trouble falling or staying asleep
                </option>
                <option value="Mood swings">Mood swings</option>
                <option value="Social withdrawal">Social withdrawal</option>
                <option value="Changes in eating habits">Changes in eating habits</option>
                <option value="Feelings of anger">Feelings of anger</option>
                <option value="Negative thoughts">Negative thoughts</option>
                <option value="Confused thinking">Confused thinking</option>
                <option value="Irritability">Irritability</option>
                <option value="Loss of interest">Loss of interest</option>
                <option value="Fatigue or low energy">Fatigue or low energy</option>
                <option value="Difficulty concentrating">Difficulty concentrating</option>
                <option value="Delusions">Delusions</option>
                <option value="Hallucinations">Hallucinations</option>
                <option value="Substance use">Substance use</option>
                <option value="Stress">Stress</option>
                <option value="Trouble coping">Trouble coping</option>
                <option value="Feelings of fear">Feelings of fear</option>
                <option value="Grief/Loss">Grief/Loss</option>
                <option value="Eating Disorder">Eating Disorder</option>
                <option value="Danger to self">Danger to self</option>
                <option value="Danger to others">Danger to others</option>
                <option value="Lack of self caret">Lack of self care</option>
                <option value="Inability to maintain safety">Inability to maintain safety</option>
                <option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
                <option value="Bipolar Disorder">Bipolar Disorder</option>
                <option value="Inability to maintain self care">
                  Inability to maintain self care
                </option>
                <option value="Inability to self administer">Inability to self administer</option>
                <option value="Medication">Medication</option>
                <option value="Conduct Disorder">Conduct Disorder</option>
                <option value="Inappropriate Sexual Behavior">
                  Inappropriate Sexual Behavior
                </option>
                <option value="Schizophrenia Disorder">Schizophrenia Disorder</option>
                <option value="Major Depressive Disorder">Major Depressive Disorder</option>
                <option value="Obsessive Disorder">Obsessive Disorder</option>
                <option value="Psychosis">Psychosis</option>
                <option value="Abused">Abused</option>
                <option value="Assaulted">Assaulted</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">Resident’s Goals:</label>
              <textarea
                id="programlocation&address"
                type="text"
                value={residentGoals}
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
                onChange={(e)=>setResidentGoals(e.target.value)}
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
                rows={5}
                cols={82}
                required
                onChange={(e)=>setResidentLimitations(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Current Behavioural Issues / Symptoms
              </label>
              <textarea
                id="programlocation&address"
                value={currentBehavioralIssues}
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
                onChange={(e)=>setCurrentBehavioralIssues(e.target.value)}
              />
            </div>
            <label htmlFor="programlocation&address">
              Identified Needs/targeted Behaviors Intervention(s) to Meet
              Objectives
            </label>
            <div className="needs-interventions-container">
              <div className="needs-interventions-column">
                <h2>Needs</h2>
                <ul>
                  {/* {needs.map((need, index) => (
                                    <li key={index}>{need}</li>
                                ))} */}
                  <li>1.</li>
                  <li>2.</li>
                  <li>3.</li>
                  <li>4.</li>
                  <li style={{ borderBottom: "none" }}>5.</li>
                </ul>
              </div>
              <div className="needs-interventions-column">
                <h2>Interventions</h2>
                <ul>
                  {/* {interventions.map((intervention, index) => (
                                    <li key={index}>{intervention}</li>
                                ))} */}
                  <li>1.</li>
                  <li>2.</li>
                  <li>3.</li>
                  <li>4.</li>
                  <li style={{ borderBottom: "none" }}>5.</li>
                </ul>
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
                onChange={(e)=>setDischargePlan(e.target.value)}
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
                onChange={(e)=>setEstimateDateOfDischarge(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="todaydate">Agreement With Plan</label>
              <select required onChange={(e)=>setAgreementWithPlan(e.target.value)}>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>

            
            <div class="checkbox-container1">
              <div class="checkoptions1">
                <div class="checkboxitem1">
                  <input type="checkbox" />
                  <span>
                    {" "}
                    Yes, I (Resident/guardian) am in agreement with the types
                    and levels of services included in my behavior plan.
                  </span>
                </div>
                <div class="checkboxitem1">
                  <input type="checkbox" />
                  <span>
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
                onChange={(e)=>setResidentGuardianAgreementName(e.target.value)}
              />
            </div>
            <input type="text" required value={residentGuardianAgreementSignature} onChange={(e)=>setResidentGuardianAgreementSignature(e.target.value)}/>
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
                onChange={(e)=>setResidentGuardianAgreementDate(e.target.value)}
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
                onChange={(e)=>setStaffAgreementName(e.target.value)}
              />
            </div>
            <input type="text" required value={staffAgreementSignature} onChange={(e)=>setStaffAgreementSignature(e.target.value)}/>
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
                onChange={(e)=>setStaffAgreementDate(e.target.value)}
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
                onChange={(e)=>setBhpAgreementName(e.target.value)}
              />
            </div>
            <input type="text" required value={bhpAgreementSignature} onChange={(e)=>setBhpAgreementSignature(e.target.value)}/>
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
                onChange={(e)=>setBhpAgreementDate(e.target.value)}
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
                onChange={(e)=>setOtherName(e.target.value)}
              />
            </div>
            <input type="text" required value={otherSignature} onChange={(e)=>setOtherSignature(e.target.value)}/>
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
                onChange={(e)=>setOtherRelationship(e.target.value)}
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
                onChange={(e)=>setOtherDate(e.target.value)}
              />
            </div>
            <h5>Section - 2</h5>
            <div className="formsheading">
              <p>
                A. Currently prescribed medications are attached on a separate
                page.
              </p>
              <p>B. Current and Past Medical/Psychiatric Conditions.</p>
              <h6>Conditions</h6>
            </div>

            {/* {
            "condition": "yourMedicalCondition",
            "yes": "yourMedicalConditionYes",
            "no": "yourMedicalConditionNo",
            "comments": "yourMedicalConditionComments"
            } */}

            <div className="yeschechbox">
              <label htmlFor="">Diabetes</label>
              <div>
                <input type="checkbox" value />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value={medicalConditionsComments}
                placeholder="Enter text"
                rows={5}
                cols={82}
                onChange={(e)=>setMedicalConditionsComments(e.target.value)}
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Heart disease / heart attack</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">History of stroke</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">High Blood Pressure</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">
                Lung disease (ie asthma, COPD, emphysema)
              </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Seizures</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Cancer</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Liver/kidney disease</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Thyroid disorder</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">History of head trauma/traumatic brain</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Injury</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Chronic pain</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">
                Allergies (food, environment, medications)
              </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Surgeries</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Number of pregnancies / births</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Substance use disorder (please specify)</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Depression</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Anxiety/panic attacks</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Insomnia</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Bipolar disorder</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Schizophrenia</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Obsessive compulsive disorder</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Personality disorder (please specify)</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Phobias</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Any other health conditions</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="yeschechbox">
              <label htmlFor="">Infection or Diseases</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
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
              <label htmlFor="reasonadmission">
                Significant Family Medical/Psychiatric History:
              </label>
              <select id="reasonadmission" value="" required>
                <option value="Enter text">Enter text</option>
                <option value="Enter text">Father</option>
                <option value="Enter text">Mother</option>
                <option value="Enter text">Father</option>
                <option value="Enter text">Sister</option>
                <option value="Enter text">Brother</option>
                <option value="Enter text">Daughter</option>
                <option value="Enter text">Son</option>
                <option value="Enter text">Cousin</option>
                <option value="Enter text">Aunt</option>
                <option value="Enter text">Uncle</option>
                <option value="Enter text">Grandfather</option>
                {/* <option value="Female">Sanskrit</option> */}
              </select>
            </div>
            <div className="formsheading">
              <h6>
                Mental Health Treatment History (in Resident hospitalization,
                partial hospitalization, out Resident, etc):
              </h6>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Type of Service</label>
              <select id="reasonadmission" required value={mentalHealthTreatmentHistoryTypeOfService} onChange={(e)=>setMentalHealthTreatmentHistoryTypeOfService(e.target.value)}>
                <option value="">Enter text</option>
                <option value="BHRF">BHRF</option>
                <option value="IP">IP</option>
                <option value="OP">OP</option>
                <option value="PHP">PHP</option>
                <option value="IOP">IOP</option>
                {/* <option value="Female">Sanskrit</option> */}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Where</label>
              <input
                type="text"
                id="approvedby"
                value={mentalHealthTreatmentHistoryWhere}
                placeholder="Enter text"
                required
                onChange={(e)=>setMentalHealthTreatmentHistoryWhere(e.target.value)}
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
                onChange={(e)=>setMentalHealthTreatmentHistoryDates(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Diagnosis/Reason for Treatment
              </label>
              <select id="reasonadmission" required value={mentalHealthTreatmentHistoryDiagnosisReason} onChange={(e)=>setMentalHealthTreatmentHistoryDiagnosisReason(e.target.value)}>
                <option value="">Enter text</option>
                <option value="Mental health Treatment">Mental health Treatment</option>
                <option value="Substance Abuse Treatment">Substance Abuse Treatment</option>
                <option value="Stabilization">Stabilization</option>
                <option value="Detox">Detox</option>
                <option value="DTS/DTO Other">
                  DTS/DTO Other (Please specify)
                </option>

                {/* <option value="Female">Sanskrit</option> */}
              </select>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Substance Abuse history:</label>
              <div>
                <input type="checkbox" id="substanceAbuseHistory" checked={substanceAbuseHistory===true} onChange={()=>setSubstanceAbuseHistory(true)} />
                <label htmlFor="substanceAbuseHistory">Yes</label>
              </div>
              <div>
                <input type="checkbox" id="substanceAbuseHistoryno" checked={substanceAbuseHistory===false} onChange={()=>setSubstanceAbuseHistory(false)} />
                <label htmlFor="substanceAbuseHistoryno">No</label>
              </div>
            </div>

            <div className="yeschechbox">
              <label htmlFor="">Substance Abuse history:</label>
              <div>
                <input type="checkbox" id="substanceAbuseDenies" checked={substanceAbuseDenies===true} onChange={()=>setSubstanceAbuseDenies(true)} />
                <label htmlFor="substanceAbuseDenies">Yes</label>
              </div>
              <div>
                <input type="checkbox" id="substanceAbuseDeniesno" checked={substanceAbuseDenies===false} onChange={()=>setSubstanceAbuseDenies(false)} />
                <label htmlFor="substanceAbuseDeniesno">No</label>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="reasonadmission">Type</label>
              <select id="reasonadmission" value={substanceAbuseHistoryDataTypes} required onChange={(e)=>setSubstanceAbuseHistoryDataTypes(e.target.value)}>
                <option value="Enter text">Enter text</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Benzodiazepines">Benzodiazepines</option>
                <option value="Cocaine">Cocaine</option>
                <option value="Crack">Crack</option>
                <option value="Hallucinogens">
                  Hallucinogens (LSD,mescaline,etc.)
                </option>
                <option value="Heroin">Heroin</option>
                <option value="Inhalants">Inhalants</option>
                <option value="Marijuana">Marijuana</option>
                <option value="Methamphetamine">Methamphetamine</option>
                <option value="Methadone">Methadone</option>
                <option value="MDMA">MDMA (ecstasy)</option>
                <option value="PCP">PCP (angel dust)</option>
                <option value="Prescription medicine">Prescription medicine</option>
                <option value="OTC medicine">OTC medicine</option>
                <option value="other">other</option>
                {/* <option value="Female">Sanskrit</option> */}
              </select>
            </div>
            <div className="form-field">
              <label >Age of First use</label>
              <input
                type="text"
                id=""
                value={substanceAbuseHistoryDataAgeOfFirstUse}
                placeholder="Enter age"
                required
                onChange={(e)=>setSubstanceAbuseHistoryDataAgeOfFirstUse(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Last Use</label>
              <select id="" value={substanceAbuseHistoryDataLastUse} required onChange={(e)=>setSubstanceAbuseHistoryDataLastUse(e.target.value)}>
                <option value="">Enter text</option>
                <option value="Weeks ago">Weeks ago</option>
                <option value="Days ago">Days ago</option>
                <option value="Yesterday">Yesterday</option>
                <option value="Months ago">Months ago</option>
                <option value="Few hours ago">Few hours ago</option>
                <option value="Unsure">Unsure</option>
              
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="">Frequency</label>
              <select required value={substanceAbuseHistoryDataFrequency}  onChange={(e)=>setSubstanceAbuseHistoryDataFrequency(e.target.value)}>
                <option value="">Enter text</option>
                <option value="Daily">Daily</option>
                <option value="Two to four times weekly">Two to four times weekly</option>
                <option value="Multiple times a day">Multiple times a day</option>
                <option value="Chronic">Chronic</option>
                <option value="Intermittent">Intermittent</option>
                <option value="Only on social events">Only on social events</option>
                <option value="Only on weekends">Only on weekends</option>
                <option value="Few times a month">Few times a month</option>
               
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Length of Sobriety</label>
              <select id="reasonadmission" required value={substanceAbuseHistoryDataLengthOfSobriety}  onChange={(e)=>setSubstanceAbuseHistoryDataLengthOfSobriety(e.target.value)}>
                <option value="">Enter text</option>
                <option value="One week">One week</option>
                <option value="A few days ago, One month">A few days ago, One month</option>
                <option value="Two months">Two months</option>
                <option value="Three months">Three months</option>
                <option value="Four months">Four months</option>
                <option value="Five to Six months">Five to Six months</option>
                <option value="One year">One year</option>
                <option value="Two years">Two years</option>
               
              </select>
            </div>
            {/* <div>
                            Boss
                            <div className='chechbox12'>
                                <div className='checkoptions'>
                                    <input type="checkbox" />
                                    <span>None reported or observed</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Vomiting</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Anxiety</span>
                                </div>
                            </div>
                            <div className='chechbox12'>
                                <div className='checkoptions'>
                                    <input type="checkbox" />
                                    <span>Agitation</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Headache</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Tremors</span>
                                </div>
                            </div>
                            <div className='chechbox12'>
                                <div className='checkoptions'>
                                    <input type="checkbox" />
                                    <span>Nausea</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Tactile Disturbances</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Visual Disturbances</span>
                                </div>
                            </div>
                        </div> */}

            <div class="checkbox-container">
              <label>Active Withdrawal Symptoms:</label>
              <div class="chechbox12">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" value={noneReportedOrObserved} checked={noneReportedOrObserved} onChange={()=>setNoneReportedOrObserved(!noneReportedOrObserved)}/>
                    <span>None reported observed</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Vomiting} checked={Vomiting} onChange={()=>setVomiting(!Vomiting)}/>
                    <span>Vomiting</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Anxiety} checked={Anxiety} onChange={()=>setAnxiety(!Anxiety)}/>
                    <span>Anxiety</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Agitation} checked={Agitation} onChange={()=>setAgitation(!Agitation)} />
                    <span>Agitation</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Headache} checked={Headache} onChange={()=>setHeadache(!Headache)} />
                    <span>Headache</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Tremors} checked={Tremors} onChange={()=>setTremors(!Tremors)}/>
                    <span>Tremors</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Nausea} checked={Nausea} onChange={()=>setNausea(!Nausea)}/>
                    <span>Nausea</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={TactileDisturbances} checked={TactileDisturbances} onChange={()=>setTactileDisturbances(!TactileDisturbances)}/>
                    <span>Tactile Disturbances</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={VisualDisturbances} checked={VisualDisturbances} onChange={()=>setVisualDisturbances(!VisualDisturbances)}/>
                    <span>Visual Disturbances</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="checkbox-container">
              <label>Auditory Disturbances</label>
              <div class="chechbox12">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Sweats} checked={Sweats} onChange={()=>setSweats(!Sweats)}/>
                    <span>Sweats</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={GooseBumps} checked={GooseBumps} onChange={()=>setGooseBumps(!GooseBumps)}/>
                    <span>Goose Bumps</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={BonePain} checked={BonePain} onChange={()=>setBonePain(!BonePain)}/>
                    <span>Bone Pain</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Seizures} checked={Seizures} onChange={()=>setSeizures(!Seizures)}/>
                    <span>Seizures</span>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Paranoia} checked={Paranoia} onChange={()=>setParanoia(!Paranoia)}/>
                    <span>Paranoia</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={Runningnose} checked={Runningnose} onChange={()=>setRunningnose(!Runningnose)}/>
                    <span>Running nose</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" value={Tearing} checked={Tearing} onChange={()=>setTearing(!Tearing)}/>
                    <span>Tearing</span>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  value={LossofMuscleCoordination} checked={LossofMuscleCoordination} onChange={()=>setLossofMuscleCoordination(!LossofMuscleCoordination)}/>
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
              <div class="chechbox12">
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
              <div class="chechbox12">
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
              <div class="chechbox12">
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
            <div className="yeschechbox1">
              <label htmlFor="">Orientation to Person:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
              <label htmlFor="">Place:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
              <label htmlFor="">Time:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
              <label htmlFor="">Circumstances:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Judgment:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Good</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fair</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Poor</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Insight:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Good</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fair</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Poor</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Memory:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Good</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fair</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Poor</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Ability to concentration:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Intact</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="approvedby">Other (please specify):</label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter age"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">
                Significant Social/Developmental History:
              </label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter age"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Educational history:</label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter age"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">Highest level of education:</label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter age"
                required
              />
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Special education:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Currently a student?</label>
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
              <label htmlFor="approvedby">If yes, where?</label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <div className="formsheading">
              <h6>Employment history:</h6>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Currently employed:</label>
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
              <label htmlFor="approvedby">If employed, where? FT or PT?</label>
              <input
                type="text"
                id="approvedby"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="programlocation&address">
                Work History (and barriers to employment)
              </label>
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
              <label htmlFor="">Military History:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Currently on active duty?</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div> */}
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Criminal Justice Legal History
              </label>
              <select id="reasonadmission" value={selectedValue} onChange={handleSelectChangeLegalHistory} required>
        <option value="">Select a value</option>
        <option value="Arrested for DUI">Arrested for DUI</option>
        <option value="Arrested for assault">Arrested for assault</option>
        <option value="Arrested for bad checks">Arrested for bad checks</option>
        <option value="Arrested for shop lifting">Arrested for shop lifting</option>
        <option value="Arrested for attempted murder">Arrested for attempted murder</option>
        <option value="Arrested for drug">Arrested for drug</option>
        <option value="Arrested for alcohol">Arrested for alcohol</option>
        <option value="Arrested for disorderly conduct">Arrested for disorderly conduct</option>
        <option value="Arrested for identity theft/ forgery">Arrested for identity theft/ forgery</option>
        <option value="Arrested for sex offense">Arrested for sex offense</option>
        <option value="Arrested for other">Arrested for Other</option>
        <option value="Probation/parole, custody">Probation/parole, custody</option>
        <option value="Pending litigation">Pending litigation</option>
        <option value="Sentencing dates">Sentencing dates</option>
        <option value="Needs Legal Aid">Needs Legal Aid</option>
        <option value="Incarcerated">Incarcerated</option>
      </select>
      {/* pending work */}
            </div>
            <div className="formsheading">
              <h6>Current Independent Living Skills:</h6>
            </div>
            {/* <div className="form-field">
              <label htmlFor="reasonadmission">Type of Activity</label>
              <select id="reasonadmission" value="" required>
                <option value="Select a option" onClick={()=>setBathingShoweringGood(true)}>Enter text</option>
                <option value="Bathing/Showering" onClick={()=>setBathingShoweringFair(true)}>Bathing/Showering</option>
                <option value="Grooming/hygiene" onClick={()=>setBathingShoweringGood(true)}>Grooming/hygiene</option>
                <option value="Mobility" onClick={()=>setBathingShoweringGood(true)}>Mobility</option>
                <option value="Housework" onClick={()=>setBathingShoweringGood(true)}>Housework</option>
                <option value="Shopping" onClick={()=>setBathingShoweringGood(true)}>Shopping</option>
                <option value="Managing money/budget" onClick={()=>setBathingShoweringGood(true)}>Managing money/budget</option>
                <option value="Taking medications" onClick={()=>setBathingShoweringGood(true)}>Taking medications</option>
                <option value="Preparing food" onClick={()=>setBathingShoweringGood(true)}>Preparing food</option>
                <option value="Eating" onClick={()=>setBathingShoweringGood(true)}>Eating</option>
                <option value="Toileting" onClick={()=>setBathingShoweringGood(true)}>Toileting</option>
                <option value="Other (specify)" onClick={()=>setOtherComments(true)}>Other (specify)</option>
              </select>
            </div> */}
            <div className="yeschechbox">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Good</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fair</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Not so good</span>
              </div>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Need assist?</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            {/* <div className="form-field">
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            {/* start working  */}
            <div className="formsheading">
              <h6>Triggers:</h6>
              <input type="text" placeholder="Enter text" required value={triggers} onChange={(e)=>setTriggers(e.target.value)}/>
            </div>
            <div className="yeschechbox">
              <label htmlFor="">Fall risk:</label>
              <div>
                <input type="checkbox" id="fallRisk" checked={fallRisk===true} onChange={()=>setFallRisk(true)} />
                <label htmlFor="fallRisk">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="fallRiskno" checked={fallRisk===false} onChange={()=>setFallRisk(false)} />
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
                onChange={(e)=>setFallRiskExplanation(e.target.value)}
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
                onChange={(e)=>setHobbiesLeisureActivities(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmissionMedical">Medical Equipment:</label>
              <select id="reasonadmissionMedical" value={selectedValueMedical} onChange={handleSelectChangeMedical} required>
        <option value="">Enter text</option>
        <option value="Wheel Chair">Wheel Chair</option>
        <option value="Oxygen tank">Oxygen tank</option>
        <option value="CPAP Machine">CPAP Machine</option>
        <option value="Shower chair">Shower chair</option>
        <option value="Other">Other</option>
      </select>

            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">Special Precautions:</label>
              <select id="reasonadmission" value={selectedValueSpecialPrecautions} onChange={handleSelectChangeSpecialPrecautions} required>
        <option value="">Enter text</option>
        <option value="Yes Seizure">Yes Seizure</option>
        <option value="Elopement/Awol">Elopement/Awol</option>
        <option value="Physical Aggression">Physical Aggression</option>
        <option value="Withdrawal">Withdrawal</option>
        <option value="Inappropriate Sexual Behaviors">Inappropriate Sexual Behaviors</option>
        <option value="Substance use">Substance use</option>
        <option value="None">None</option>
      </select>
            </div>
            <div className="formsheading">
              <h6>Safety and Risk Assessment</h6>
            </div>
            <div className="yeschechbox1">
              <label htmlFor="">
                Are you currently thinking about harming yourself or committing
                suicide?
              </label>
              <div>
                <input type="checkbox" id="currentThoughtsOfHarmingSelf" checked={currentThoughtsOfHarmingSelf===true} onChange={()=>setCurrentThoughtsOfHarmingSelf(true)}/>
                <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
              </div>
              <div>
                <input type="checkbox" id="currentThoughtsOfHarmingSelfno" checked={currentThoughtsOfHarmingSelf===false} onChange={()=>setCurrentThoughtsOfHarmingSelf(false)}/>
                <label htmlFor="currentThoughtsOfHarmingSelfno">No</label>
              </div>
            </div>
            <div className="yeschechbox1">
              <label htmlFor="">Ideation</label>
              <input style={{marginRight:"1rem"}} required placeholder="Enter text" value={suicidalIdeation} onChange={(e)=>setSuicidalIdeation(e.target.value)}/>
            </div>
            <div className="yeschechbox1">
              <label htmlFor="">Increasing in:</label>
              <div>
                <span>Urgency:</span>
              </div>
              <div>
                <input type="checkbox" id="suicidalIdeationUrgency" checked={suicidalIdeationUrgency===true} onChange={()=>setSuicidalIdeationUrgency(true)}/>
                <label htmlFor="suicidalIdeationUrgency">Yes</label>
              </div>
              <div>
                <input type="checkbox" id="suicidalIdeationUrgencyno" checked={suicidalIdeationUrgency===false} onChange={()=>setSuicidalIdeationUrgency(false)}/>
                <label htmlFor="suicidalIdeationUrgencyno">NO</label>
              </div>
              
            </div>
            <div className="yeschechbox1">
                <label>Severity:</label>
                <div>
                <input type="checkbox" id="currentThoughtsOfHarmingSelf" checked={currentThoughtsOfHarmingSelf===true} onChange={()=>setSuicidalIdeationSeverity(true)}/>
                <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
              </div>
              <div>
                <input type="checkbox" id="suicidalIdeationSeverityno" checked={suicidalIdeationSeverity===false} onChange={()=>setSuicidalIdeationSeverity(false)}/>
                <label htmlFor="suicidalIdeationSeverityno">No</label>
              </div>
              </div>
            <div className="yeschechbox1">
              <label htmlFor="">
                Are you currently thinking about harming others or have
                homicidal thoughts?
              </label>
              <div>
                <input type="checkbox" id="currentThoughtsOfHarmingOthers" checked={currentThoughtsOfHarmingOthers===true} onChange={()=>setCurrentThoughtsOfHarmingOthers(true)}/>
                <label htmlFor="currentThoughtsOfHarmingOthers">Yes</label>
              </div>
              <div>
                <input type="checkbox" id="currentThoughtsOfHarmingOthersno" checked={currentThoughtsOfHarmingOthers===false} onChange={()=>setCurrentThoughtsOfHarmingOthers(false)}/>
                <label htmlFor="currentThoughtsOfHarmingOthersno">No</label>
              </div> 
            </div>
            <div className="formsheading">
              <h6>Risk Factors:</h6>
            </div>
            <div className="form-field">
              <label htmlFor="reasonadmission">
                Select risk factors that apply
              </label>
              <select id="reasonadmission" value={selectedValueRiskFactors} onChange={handleSelectChangeRiskFactors} required>
        <option value="">Enter text</option>
        <option value="Current suicidal ideation">Current suicidal ideation</option>
        <option value="Prior suicide attempt">Prior suicide attempt</option>
        <option value="Access to means (i.e. weapon)">Access to means (i.e. weapon)</option>
        <option value="Substance abuse">Substance abuse</option>
        <option value="Other self-abusing behavior">Other self-abusing behavior</option>
        <option value="Recent losses/lack of support">Recent losses/lack of support</option>
        <option value="Behavior cues">Behavior cues</option>
        <option value="Symptoms of psychosis">Symptoms of psychosis</option>
        <option value="Family history of suicide">Family history of suicide</option>
        <option value="Terminal physical illness">Terminal physical illness</option>
        <option value="Current stressors (specify)">Current stressors (specify)</option>
        <option value="Chronic pain">Chronic pain</option>
      </select>
            </div>
            {/* <div className="yeschechbox">
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
              <label htmlFor="programlocation&address">Comments</label>
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
              <label htmlFor="reasonadmission">
                Protective factors that apply:
              </label>
              <select id="reasonadmission" value={selectedValueProtectiveFactors} onChange={handleSelectChangeProtectiveFactors} required>
        <option value="">Enter text</option>
        <option value="Supports available (family friends)">Supports available (family friends)</option>
        <option value="Spiritual / religious support">Spiritual / religious support</option>
        <option value="Religious/cultural prohibitions">Religious/cultural prohibitions</option>
        <option value="Fear of consequences">Fear of consequences</option>
        <option value="Able to be engaged in intervention">Able to be engaged in intervention</option>
        <option value="Willing to commit to keeping self safe">Willing to commit to keeping self safe</option>
      </select>
            </div>
            {/* <div className="yeschechbox">
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
              <label htmlFor="programlocation&address">Comments</label>
              <textarea
                id="programlocation&address"
                value=""
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
              />
            </div> */}
            <div className="formsheading">
              <p>
                Considering the responses to the above risk factors in
                combination with all the other information you know about the
                person (gender, age, diagnosis, balancing factors-resiliency and
                supports, would you rate the level of risk for this person for
                danger to self (DTS) as:
              </p>
            </div>
            <div className="yeschechbox1">
              <div>
                <input type="checkbox"  checked={riskLevel==="No Risk"} onChange={()=>setRiskLevel("No Risk")} />
                <span>No Risk</span>
              </div>
              <div>
                <input type="checkbox" checked={riskLevel==="Low Risk"} onChange={()=>setRiskLevel("Low Risk")} />
                <span>Low Risk</span>
              </div>
              <div>
                <input type="checkbox" checked={riskLevel==="Moderate Risk"} onChange={()=>setRiskLevel("Moderate Risk")} />
                <span>Moderate Risk</span>
              </div>
              <div>
                <input type="checkbox" checked={riskLevel==="High Risk"} onChange={()=>setRiskLevel("High Risk")}/>
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
      <input type="text" required id="icdCode" value={icdCode} onChange={(e) => setIcdCode(e.target.value)} />

            </div>
            <div className="form-field">
            <label htmlFor="description">Description:</label>
      <input type="text" required id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

            </div >
            <div className="form-field">
            <label htmlFor="primary">Primary:</label>
      <input type="text" required id="primary" value={primary} onChange={(e) => setPrimary(e.target.value)} />
      </div>

            <div className="form-field">
             <label htmlFor="secondary">Secondary:</label>
      <input type="text" required id="secondary" value={secondary} onChange={(e) => setSecondary(e.target.value)} />

            </div>
            <div className="form-field">
            <label htmlFor="tertiary">Tertiary:</label>
      <input type="text" required id="tertiary" value={tertiary} onChange={(e) => setTertiary(e.target.value)} />

            </div>
            <div className="form-field">
            <label htmlFor="additional">Additional:</label>
      <input type="text" required id="additional" value={additional} onChange={(e) => setAdditional(e.target.value)} />
            </div>

            <div className="form-actions">
                <button
                  type="button"
                  className="safetybutton"
                  // onClick={handlepsychiatricDiagnoses}
                >
                  SAVE
                </button>
              </div>
         
            <div className="formsheading">
              <h6>Medical Diagnoses</h6>
            </div>
            <div className="form-field">
            <label htmlFor="icdCode">ICD Code:</label>
      <input type="text" required id="icdCode" value={icdCodeMedicalDiagnoses} onChange={(e) => setIcdCodeMedicalDiagnoses(e.target.value)} />

            </div>
            <div className="form-field">
            <label htmlFor="description">Description:</label>
      <input type="text" required id="description" value={descriptionMedicalDiagnoses} onChange={(e) => setDescriptionMedicalDiagnoses(e.target.value)} />

            </div >
            <div className="form-field">
            <label htmlFor="primary">Primary:</label>
      <input type="text" required id="primary" value={primaryMedicalDiagnoses} onChange={(e) => setPrimaryMedicalDiagnoses(e.target.value)} />
      </div>

            <div className="form-field">
             <label htmlFor="secondary">Secondary:</label>
      <input type="text" required id="secondary" value={secondaryMedicalDiagnoses} onChange={(e) => setSecondaryMedicalDiagnoses(e.target.value)} />

            </div>
            <div className="form-field">
            <label htmlFor="tertiary">Tertiary:</label>
      <input type="text" required id="tertiary" value={tertiaryMedicalDiagnoses} onChange={(e) => setTertiaryMedicalDiagnoses(e.target.value)} />

            </div>
            <div className="form-field">
            <label htmlFor="additional">Additional:</label>
      <input type="text" required id="additional" value={additionalMedicalDiagnoses} onChange={(e) => setAdditionalMedicalDiagnoses(e.target.value)} />
            </div>

            <div className="form-actions">
                <button
                  type="button"
                  className="safetybutton"
                  // onClick={handlepsychiatricDiagnoses}
                >
                  SAVE
                </button>
              </div>
            
            <div className="formsheading">
              <h6>Psychosocial or Environmental Stressors</h6>
              <h6>Problems with / related to:</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" id="primarySupportGroup" checked={primarySupportGroup} onChange={()=>setPrimarySupportGroup(!primarySupportGroup)}/>
                    <label htmlFor="primarySupportGroup">Primary Support Group</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="educationalProblems" checked={educationalProblems} onChange={()=>setEducationalProblems(!educationalProblems)} />
                    <label htmlFor="educationalProblems">Educational problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="occupationalProblems" checked={occupationalProblems} onChange={()=>setOccupationalProblems(!occupationalProblems)}/>
                    <label htmlFor="occupationalProblems">Occupational problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="sexualProblems" checked={sexualProblems} onChange={()=>setSexualProblems(!sexualProblems)}/>
                    <label htmlFor="sexualProblems">Sexual problems</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" id="maritalProblems" checked={maritalProblems} onChange={()=>setMaritalProblems(!maritalProblems)}/>
                    <label htmlFor="maritalProblems">Marital problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="housingProblems" checked={housingProblems} onChange={()=>setHousingProblems(!housingProblems)}/>
                    <label htmlFor="housingProblems">Housing problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="interactionWithLegalSystem" checked={interactionWithLegalSystem} onChange={()=>setInteractionWithLegalSystem(!interactionWithLegalSystem)}/>
                    <label htmlFor="interactionWithLegalSystem">Interaction with legal system</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="otherBoolean" checked={otherBoolean} onChange={()=>setOtherBoolean(!otherBoolean)}/>
                    <label htmlFor="otherBoolean">other (please specify)</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox" id="accessToHealthCareServices" checked={accessToHealthCareServices} onChange={()=>setAccessToHealthCareServices(!accessToHealthCareServices)}/>
                    <label htmlFor="accessToHealthCareServices">Access to health care services</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="familyProblems" checked={familyProblems} onChange={()=>setFamilyProblems(!familyProblems)}/>
                    <label htmlFor="familyProblems">Family problems</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox" id="substanceUseInHome" checked={substanceUseInHome} onChange={()=>setSubstanceUseInHome(!substanceUseInHome)}/>
                    <label htmlFor="substanceUseInHome">Substance use in home</label>
                  </div>
                  <div class="checkboxitem">
                   
                  </div>
                </div>
              </div>
            </div>
            {
              otherBoolean &&  <div className="form-field">
              <textarea
                id="programlocation&address"
                value={otherStressors}
                placeholder="Enter text"
                rows={5}
                cols={82}
                required
                onChange={(e)=>setOtherStressors(e.target.value)}
              />
               </div>
            }
           
           
            <div className="yeschechbox">
              <label htmlFor="">Significant recent losses:</label>
              <div>
                <input type="checkbox" id="setSetNoAndYes" checked={setNoAndYes===true} onChange={()=>setSetNoAndYes(true)}/>
                <label htmlFor="setSetNoAndYes">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="setSetNoAndYesno" checked={setNoAndYes===false} onChange={()=>setSetNoAndYes(false)}/>
                <label htmlFor="setSetNoAndYesno">No</label>
              </div>
            </div>
            <div className="formsheading">
              <h6>If yes, please check applicable loss(es):</h6>
            </div>
            <div class="checkbox-container">
              <div class="chechbox12">
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  id="death" checked={death} onChange={()=>setDeath(!death)}/>
                    <label htmlFor="death">Death</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  id="injury" checked={injury} onChange={()=>setInjury(!injury)}/>
                    <label htmlFor="injury">Injury</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  id="medicalSurgical" checked={medicalSurgical} onChange={()=>setMedicalSurgical(!medicalSurgical)}/>
                    <label htmlFor="medicalSurgical">Medical/ surgical </label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  id="job" checked={job} onChange={()=>setJob(!job)}/>
                    <label htmlFor="job">Job</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  id="divorceSeparation" checked={divorceSeparation} onChange={()=>setDivorceSeparation(!divorceSeparation)}/>
                    <label htmlFor="divorceSeparation">Divorce / separation </label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  id="accidentInjury" checked={accidentInjury} onChange={()=>setAccidentInjury(!accidentInjury)}/>
                    <label htmlFor="accidentInjury">Accident /injury</label>
                  </div>
                </div>
                <div class="checkoptions">
                  <div class="checkboxitem">
                    <input type="checkbox"  id="childRemovedFromHouse" checked={childRemovedFromHouse} onChange={()=>setChildRemovedFromHouse(!childRemovedFromHouse)}/>
                    <label htmlFor="childRemovedFromHouse">Child removed from house</label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  id="violentActsAgainstPersonFamily" checked={violentActsAgainstPersonFamily} onChange={()=>setViolentActsAgainstPersonFamily(!violentActsAgainstPersonFamily)}/>
                    <label htmlFor="violentActsAgainstPersonFamily">Violent acts against person/family </label>
                  </div>
                  <div class="checkboxitem">
                    <input type="checkbox"  id="otherSignificantRecentLosses" checked={otherSignificantRecentLosses} onChange={()=>setOtherSignificantRecentLosses(!otherSignificantRecentLosses)}/>
                    <label htmlFor="otherSignificantRecentLosses">other (please specify)</label>
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
                onChange={(e)=>setAdditionalNotes(e.target.value)}
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
                onChange={(e)=>setStaffName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Enter Signature</label>
              <input type="text" required value={staffSignature} onChange={(e)=>setStaffSignature(e.target.vaue)}/>
            </div>
            <div className="form-field">
              <label htmlFor="">Enter Staff Title</label>
              <input type="text" required value={staffTitle} onChange={(e)=>setStaffTitle(e.target.vaue)}/>
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
                onChange={(e)=>setStaffDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="approvedby">BHT name, credentials:</label>
              <input
                type="text"
                id="approvedby"
                value={bhpName}
                placeholder="Enter text"
                required
                onChange={(e)=>setBhpName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="bhpCredentials">Enter BHP Credentials</label>
              <input type="text" required value={bhpCredentials} onChange={(e)=>setBhpCredentials(e.target.vaue)}/>
            </div>
            <div className="form-field">
              <label htmlFor="bhpSignature">Enter Signature</label>
              <input type="text" required value={bhpSignature} onChange={(e)=>setBhpSignature(e.target.vaue)}/>
            </div>
            
            <div className="form-field">
              <label htmlFor="todaydate">Date</label>
              <input
                type="date"
                id="todaydate"
                value={bhpDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e)=>setBhpDate(e.target.value)}
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

export default InitialAssessment;
