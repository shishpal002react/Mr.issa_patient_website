import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import body1 from "../../img/body1.png";
import body2 from "../../img/body2.png";
import body3 from "../../img/body3.png";
import body4 from "../../img/body4.png";
import body5 from "../../img/body5.png";
import body6 from "../../img/body6.png";
import body7 from "../../img/body7.png";
import body8 from "../../img/body8.png";
import { user_detail } from "../../Api_Collection/Api";

const NursingAssessment = () => {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState("");
  const [userId, setUserId] = useState("");

  //all useState value
  const [admissionDate, setAdmissionDate] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [admissionDiagnoses, setAdmissionDiagnoses] = useState("");
  const [codeStatus, setCodeStatus] = useState("");
  const [lastTBScreeningDate, setLastTBScreeningDate] = useState("");
  const [tbScreeningResults, setTbScreeningResults] = useState("");
  const [careProvidedPhysicalServices, setCareProvidedPhysicalServices] =
    useState("");
  const [
    careProvidedBehavioralHealthServices,
    setCareProvidedBehavioralHealthServices,
  ] = useState("");
  const [vitalsBloodPressure, setVitalsBloodPressure] = useState("");
  const [vitalsPulse, setVitalsPulse] = useState(0);
  const [vitalsRespiratoryRate, setVitalsRespiratoryRate] = useState(0);
  const [vitalsOxygenLevel, setVitalsOxygenLevel] = useState(0);
  const [vitalsTemperature, setVitalsTemperature] = useState(0);
  const [vitalsWeight, setVitalsWeight] = useState(0);
  const [vitalsHeightFeet, setVitalsHeightFeet] = useState(0);
  const [vitalsHeightInches, setVitalsHeightInches] = useState(0);
  const [allergies, setAllergies] = useState("");
  const [
    covid19ScreeningSymptomsFeverOrChills,
    setCovid19ScreeningSymptomsFeverOrChills,
  ] = useState(true);
  const [
    covid19ScreeningSymptomsShortnessOfBreath,
    setCovid19ScreeningSymptomsShortnessOfBreath,
  ] = useState(false);
  const [
    covid19ScreeningSymptomsSoreThroat,
    setCovid19ScreeningSymptomsSoreThroat,
  ] = useState(false);
  const [
    covid19ScreeningSymptomsDiarrhea,
    setCovid19ScreeningSymptomsDiarrhea,
  ] = useState(true);
  const [covid19ScreeningSymptomsCough, setCovid19ScreeningSymptomsCough] =
    useState(true);
  const [
    covid19ScreeningSymptomsBodyAches,
    setCovid19ScreeningSymptomsBodyAches,
  ] = useState(false);
  const [
    covid19ScreeningSymptomsCongestionOrRunnyNose,
    setCovid19ScreeningSymptomsCongestionOrRunnyNose,
  ] = useState(false);
  const [
    covid19ScreeningSymptomsLossOfTasteOrSmell,
    setCovid19ScreeningSymptomsLossOfTasteOrSmell,
  ] = useState(true);
  const [covid19ScreeningSymptomsFatigue, setCovid19ScreeningSymptomsFatigue] =
    useState(true);
  const [
    covid19ScreeningSymptomsHeadache,
    setCovid19ScreeningSymptomsHeadache,
  ] = useState(false);
  const [
    covid19ScreeningSymptomsNauseaOrVomiting,
    setCovid19ScreeningSymptomsNauseaOrVomiting,
  ] = useState(true);
  const [reviewOfSystemsConstitutional, setReviewOfSystemsConstitutional] =
    useState("");
  const [reviewOfSystemsCardiovascular, setReviewOfSystemsCardiovascular] =
    useState("");
  const [reviewOfSystemsEndocrine, setReviewOfSystemsEndocrine] = useState("");
  const [reviewOfSystemsGastrointestinal, setReviewOfSystemsGastrointestinal] =
    useState("");
  const [reviewOfSystemsGenitourinary, setReviewOfSystemsGenitourinary] =
    useState("");
  const [
    reviewOfSystemsHematologyOncology,
    setReviewOfSystemsHematologyOncology,
  ] = useState("");
  const [reviewOfSystemsHeadNeckThroat, setReviewOfSystemsHeadNeckThroat] =
    useState("");
  const [reviewOfSystemsIntegumentary, setReviewOfSystemsIntegumentary] =
    useState("");
  const [reviewOfSystemsMusculoskeletal, setReviewOfSystemsMusculoskeletal] =
    useState("");
  const [reviewOfSystemsPsychiatric, setReviewOfSystemsPsychiatric] =
    useState("");
  const [reviewOfSystemsNeurologic, setReviewOfSystemsNeurologic] =
    useState("");
  const [reviewOfSystemsRespiratory, setReviewOfSystemsRespiratory] =
    useState("");
  const [
    reviewOfSystemsAllergicImmunologic,
    setReviewOfSystemsAllergicImmunologic,
  ] = useState("");
  const [
    suicidalRiskAssessmentDeniesSymptomsBellow,
    setSuicidalRiskAssessmentDeniesSymptomsBellow,
  ] = useState(true);
  const [behavioralSymptoms, setBehavioralSymptoms] = useState("");
  const [physicalSymptoms, setPhysicalSymptoms] = useState("");
  const [psychosocialSymptoms, setPsychosocialSymptoms] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [nutritionDiet, setNutritionDiet] = useState("");
  const [nutritionSpecialDietOrder, setNutritionSpecialDietOrder] =
    useState("");
  const [nutritionFluidRestrictions, setNutritionFluidRestrictions] =
    useState("");
  const [skinCheck, setSkinCheck] = useState("");
  const [residentDeniesSkinConcerns, setResidentDeniesSkinConcerns] =
    useState(true);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [sideLeft, setSideLeft] = useState();
  const [sideRight, setSideRight] = useState();
  const [legFront, setLegFront] = useState();
  const [legBack, setLegBack] = useState();
  const [legLeft, setLegLeft] = useState();
  const [legRight, setLegRight] = useState();
  const [bhtName, setBhtName] = useState("");
  const [bhtSignature, setBhtSignature] = useState("");
  const [rnName, setRnName] = useState("");
  const [rnSignature, setRnSignature] = useState("");

  useEffect(() => {
    setUserId(userDetail?._id);
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

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
            <h1>Initial Nursing Assessment</h1>
          </div>
        </div>
        <form action="">
          <div className="form-section">
            <h2>Resident’s Details</h2>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Today’s Date</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={todayDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setTodayDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Admission Date</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={admissionDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setTodayDate(e.target.value)}
              />
            </div>
            {/* <div className="form-field">
                            <label htmlFor="AHCCCS">Resident Full Name</label>
                            <input
                                type="text"
                                id="AHCCCS"
                                value={admissionDiagnoses}
                                placeholder='Enter full name'
                                required
                                onChange={(e)=>setAdmissionDiagnoses(e.target.value)}
                            />
                        </div> */}
            {/* <div className="form-field">
                            <label htmlFor="admissionDate">Date of Birth</label>
                            <input
                                style={{ color: '#1A9FB2' }}
                                type="date"
                                id="dateOfBirth"
                                value={lastTBScreeningDate}
                                placeholder="DD/MM/YYYY"
                                required
                                onChange={(e)=>setLastTBScreeningDate(e.target.value)}
                            />
                        </div> */}
            {/* <div className="form-field">
                            <label htmlFor="AHCCCS">Age</label>
                            <input
                                type="text"
                                id="AHCCCS"
                                value=''
                                placeholder='Enter age'
                                required
                            />
                        </div> */}
            {/* <div className="form-field">
                            <label htmlFor="AHCCCS">Select Gender</label>
                            <div className='genderdiv'>
                                <div className='genderbox'>
                                    <input type="radio" id="maleRadio" name="gender" className="custom-radio" />
                                    <label htmlFor="maleRadio">Male</label>
                                </div>
                                <div className='genderbox'>
                                    <input type="radio" id="femaleRadio" name="gender" className="custom-radio" />
                                    <label htmlFor="femaleRadio">Female</label>
                                </div>
                            </div>
                        </div> */}
            <div className="form-field">
              <label htmlFor="AHCCCS">Admission Diagnosis</label>
              <textarea
                type="text"
                id="AHCCCS"
                value={admissionDiagnoses}
                rows={5}
                cols={130}
                placeholder="Enter text."
                required
                onChange={(e) => setAdmissionDiagnoses(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Code Status</label>
              <select
                id="gender"
                value={codeStatus}
                required
                onChange={(e) => setCodeStatus(e.target.value)}
              >
                <option value="Sample Code Status">Full Code</option>
                <option value="Full Code">Full Code</option>
                <option value="DNR">DNR</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Date of Last TB Screening</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={lastTBScreeningDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setLastTBScreeningDate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Results of TB Screening</label>
              <select
                id="gender"
                value={tbScreeningResults}
                required
                onChange={(e) => setTbScreeningResults(e.target.value)}
              >
                <option value="Negative">Negative</option>
                <option value="Positive">Positive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="gender">Care to be provided at Devine Care</label>
              <select
                id="gender"
                value={careProvidedPhysicalServices}
                required
                onChange={(e) =>
                  setCareProvidedPhysicalServices(e.target.value)
                }
              >
                <option value="Physical Services">Physical Services</option>
                <option value="Behavioral Health Services">
                  Behavioral Health Services
                </option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="gender">
                Care to be provided at Care Provided Behavioral Health Services
                Care
              </label>
              <input
                type="text"
                placeholder="Care provider"
                value={careProvidedBehavioralHealthServices}
                onChange={(e) =>
                  setCareProvidedBehavioralHealthServices(e.target.value)
                }
              />
            </div>
            <h2>Vitals</h2>
            <div className="form-field">
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Blood Pressure</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsBloodPressure}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsBloodPressure(e.target.value)}
                  />
                </div>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Pulse Rate</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsPulse}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsPulse(e.target.value)}
                  />
                </div>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Respiration Rate</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsRespiratoryRate}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => e.target.value}
                  />
                </div>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Body Temperature</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsRespiratoryRate}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsRespiratoryRate(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="AHCCCS">Blood Oxygen</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsOxygenLevel}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsOxygenLevel(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Weight</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsWeight}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsWeight(e.target.value)}
                  />
                </div>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Height</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsHeightFeet}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsHeightFeet(e.target.value)}
                  />
                </div>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="AHCCCS">Height Inches</label>
                  <input
                    type="number"
                    id="AHCCCS"
                    value={vitalsHeightInches}
                    required
                    style={{ width: "166px", height: "50px" }}
                    onChange={(e) => setVitalsHeightInches(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Allergies:</label>
              <input
                type="text"
                id="AHCCCS"
                value={allergies}
                required
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>

            <div className="formsheading">
              <h6>Covid-19 Screening</h6>
              <p>
                Regardless of your vaccination status, have you experienced any
                of the symptoms bellow in the past 48 hours?
              </p>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">New onset of fever or chills?</label>
              <div>
                <input
                  type="checkbox"
                  id="yesCheckbox"
                  onChange={() => setCovid19ScreeningSymptomsFeverOrChills(true)}
                  checked={covid19ScreeningSymptomsFeverOrChills === true}
                />
                <label htmlFor="yesCheckbox">Yes</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="noCheckbox"
                  onChange={() => setCovid19ScreeningSymptomsFeverOrChills(false)}
                  checked={covid19ScreeningSymptomsFeverOrChills === false}
                />
                <label htmlFor="noCheckbox">No</label>
              </div>
              <label htmlFor="">
                New onset of shortness of breath or difficulty breathing?
              </label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsShortnessOfBreath" checked={covid19ScreeningSymptomsShortnessOfBreath===true} onChange={()=>setCovid19ScreeningSymptomsShortnessOfBreath(true)}/>
                <label htmlFor="covid19ScreeningSymptomsShortnessOfBreath">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsShortnessOfBreathno" checked={covid19ScreeningSymptomsShortnessOfBreath===false} onChange={()=>setCovid19ScreeningSymptomsShortnessOfBreath(false)}/>
                <label htmlFor="covid19ScreeningSymptomsShortnessOfBreathno">No</label>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">New onset of sore throat?</label>
              <div>
                <input type="checkbox"  id="covid19ScreeningSymptomsSoreThroat" checked={covid19ScreeningSymptomsSoreThroat===true} onChange={()=>setCovid19ScreeningSymptomsSoreThroat(true)}/>
                <label htmlFor="covid19ScreeningSymptomsSoreThroat">Yes</label>
              </div>
              <div>
              <input type="checkbox"  id="covid19ScreeningSymptomsSoreThroatno" checked={covid19ScreeningSymptomsSoreThroat===false} onChange={()=>setCovid19ScreeningSymptomsSoreThroat(false)}/>
                <label htmlFor="covid19ScreeningSymptomsSoreThroatno">No</label>
              </div>
              <label htmlFor="">New onset of diarrhea?</label>
              <div>
                <input type="checkbox"  id="covid19ScreeningSymptomsDiarrhea" checked={covid19ScreeningSymptomsDiarrhea===true} onChange={()=>setCovid19ScreeningSymptomsDiarrhea(true)}/>
                <label htmlFor="covid19ScreeningSymptomsDiarrhea">Yes</label>
              </div>
              <div>
              <input type="checkbox"  id="covid19ScreeningSymptomsDiarrheano" checked={covid19ScreeningSymptomsDiarrhea===false} onChange={()=>setCovid19ScreeningSymptomsDiarrhea(false)}/>
                <label htmlFor="covid19ScreeningSymptomsDiarrheano">No</label>
              </div>
            </div>

            <div className="yeschechbox2">
              <label htmlFor="">New onset of cough?</label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsCough" checked={covid19ScreeningSymptomsCough===true} onChange={()=>setCovid19ScreeningSymptomsCough(true)} />
                <label htmlFor="covid19ScreeningSymptomsCough">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsCoughno" checked={covid19ScreeningSymptomsCough===false} onChange={()=>setCovid19ScreeningSymptomsCough(false)} />
                <label htmlFor="covid19ScreeningSymptomsCoughno">No</label>
              </div>
              <label htmlFor=""> New onset of muscle or body aches?</label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsBodyAches" checked={covid19ScreeningSymptomsBodyAches===true} onChange={()=>setCovid19ScreeningSymptomsBodyAches(true)}/>
               <label htmlFor="covid19ScreeningSymptomsBodyAches">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsBodyAchesno" checked={covid19ScreeningSymptomsBodyAches===false} onChange={()=>setCovid19ScreeningSymptomsBodyAches(false)}/>
               <label htmlFor="covid19ScreeningSymptomsBodyAchesno">No</label>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">New onset of congestion or runny nose?</label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsCongestionOrRunnyNose" checked={covid19ScreeningSymptomsCongestionOrRunnyNose===true} onChange={()=>setCovid19ScreeningSymptomsCongestionOrRunnyNose(true)}/>
               <label htmlFor="covid19ScreeningSymptomsCongestionOrRunnyNose">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsCongestionOrRunnyNoseno" checked={covid19ScreeningSymptomsCongestionOrRunnyNose===false} onChange={()=>setCovid19ScreeningSymptomsCongestionOrRunnyNose(false)}/>
               <label htmlFor="covid19ScreeningSymptomsCongestionOrRunnyNoseno">No</label>
              </div>
              <label htmlFor="">New onset of loss of taste or smell?</label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsLossOfTasteOrSmell" checked={covid19ScreeningSymptomsLossOfTasteOrSmell===true} onChange={()=>setCovid19ScreeningSymptomsLossOfTasteOrSmell(true)} />
                <label htmlFor="covid19ScreeningSymptomsLossOfTasteOrSmell">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsLossOfTasteOrSmellno" checked={covid19ScreeningSymptomsLossOfTasteOrSmell===false} onChange={()=>setCovid19ScreeningSymptomsLossOfTasteOrSmell(false)} />
                <label htmlFor="covid19ScreeningSymptomsLossOfTasteOrSmellno">No</label>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">New onset of fatigue? </label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsFatigue" checked={covid19ScreeningSymptomsFatigue===true} onChange={()=>setCovid19ScreeningSymptomsFatigue(true)}/>
               <label htmlFor="covid19ScreeningSymptomsFatigue">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsFatigueno" checked={covid19ScreeningSymptomsFatigue===false} onChange={()=>setCovid19ScreeningSymptomsFatigue(false)}/>
               <label htmlFor="covid19ScreeningSymptomsFatigueno">No</label>
              </div>
              <label htmlFor="">New onset of headache?</label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsHeadache" checked={covid19ScreeningSymptomsHeadache===true} onChange={()=>setCovid19ScreeningSymptomsHeadache(true)}/>
                <label htmlFor="covid19ScreeningSymptomsHeadache">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsHeadacheno" checked={covid19ScreeningSymptomsHeadache===false} onChange={()=>setCovid19ScreeningSymptomsHeadache(false)}/>
                <label htmlFor="covid19ScreeningSymptomsHeadacheno">No</label>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">New onset of nausea or vomiting?</label>
              <div>
                <input type="checkbox" id="covid19ScreeningSymptomsNauseaOrVomiting" checked={covid19ScreeningSymptomsNauseaOrVomiting===true} onChange={()=>setCovid19ScreeningSymptomsNauseaOrVomiting(true)}/>
                <label htmlFor="covid19ScreeningSymptomsNauseaOrVomiting">Yes</label>
              </div>
              <div>
              <input type="checkbox" id="covid19ScreeningSymptomsNauseaOrVomitingno" checked={covid19ScreeningSymptomsNauseaOrVomiting===false} onChange={()=>setCovid19ScreeningSymptomsNauseaOrVomiting(false)}/>
                <label htmlFor="covid19ScreeningSymptomsNauseaOrVomitingno">No</label>
              </div>
            </div>

            <div className="formsheading">
              <h6>Review Of Systems</h6>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Constitutional:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fever</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span> Poor appetite</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Unexplained weight gain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fatigue</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Chills</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Change in appetite</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Night Sweats</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Unexplained weight loss</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Cardiovascular:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Chest pain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Shortness of breath</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Racing Pulse</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Swelling of the feet/hands</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Irregular heartbeat</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Is your blood pressure under control? Yes / No / Unsure
                </span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Endocrine:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Excess thirst</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Excessive urination</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Heat Intolerance</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Cold Intolerance</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Hair loss</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Dry skin Is resident’s blood sugar under control?</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Unsure</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>n/a</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Gastrointestinal:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Abdominal pain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Nausea</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Diarrhea</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Bloody stools</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Stomach Ulcers</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Constipation</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Trouble Swallowing</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Jaundice/yellow skin</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Genitourinary: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Genital sores or ulcers</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Kidney failure/problems</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Kidney stones</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Painful/difficult urination</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Testicular pain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Urinary discharge</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Hematology/Oncology:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Easy bruising</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Prolonged bleeding</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Head, Ease, Nose, Throat: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Hearing loss</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Sore throat</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Runny nose</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Dry mouth</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Jaw Claudication (pain in jaw when chewing)</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Earache</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Missing teeth</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Integumentary:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Rash</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Change in mole</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Skin sores</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Skin cancer</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Sever itching </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Loss of hair</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Musculoskeletal: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Muscle aches</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Difficulty laying flat due to muscle pain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Back pain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Joint pain</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Deformities</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Psychiatric: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Insomnia</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Irritability</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Depression</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Anxiety</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Recurrent bad thoughts</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Mood swings</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Hallucinations</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Compulsions</span>
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

            <div className="yeschechbox2">
              <label htmlFor="">Neurologic: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Weakness</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Headaches</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Scalp tenderness</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Dizziness</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Problems with balance</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Paralysis of extremities</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Tremor</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Stroke</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Numbness or tingling</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Seizures or convulsions</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Fainting</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Problems walking</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Respiratory </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Wheezing</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Cough</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Coughing up blood</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Severe or Frequent colds</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Difficulty breathing</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Allergic/Immunologic: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>DENIES</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Seasonal allergies</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Hay fever symptoms</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Itching </span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span> Frequent infections</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span> Exposure to HIV</span>
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
            <div className="yeschechbox2">
              <label htmlFor="">Suicidal Risk Assessment:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Denies Symptoms Bellow</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Behavioral symptoms: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>self-injuring</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>reckless behavior</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>impulsive behaviors</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>shifts in temperament</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>no longer enjoying previous activities</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>talking or writing about death</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Physical symptoms:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>insomnia</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>hypersomnia</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>changes in appetite</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>weight loss/gain</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>panic attacks</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Psychosocial symptoms:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span> helplessness/hopelessness</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span> worthlessness</span>
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
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>Irritable</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Resident contracts for safety.</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Resident Safety Plan to be completed within 48 hours of
                  admission.
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Current Medications:</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Verified that a list of current medications is present on
                  file.
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Nutrition: Diet: </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>As tolerated</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Special diet ordered: _____________________</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">Fluid restrictions?</label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>no</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <label htmlFor="">
                Skin Check - Areas requiring treatment marked and labeled:{" "}
              </label>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Resident denies skin concerns</span>
              </div>
            </div>
            <div className="form-field">
              <div className="bodydiv">
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body1}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body2}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body3}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body4}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
              </div>
              <div className="bodydiv">
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body5}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body6}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body7}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
                <div className="bodyiamge">
                  <input
                    type="checkbox"
                    style={{
                      width: "22px",
                      height: "22px",
                      padding: "0",
                      marginRight: "10px",
                      color: "#000000",
                    }}
                  />
                  <img
                    src={body8}
                    alt="Selectable Image"
                    style={{ width: "101px", height: "189px" }}
                  />
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">BHT Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
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
              <label htmlFor="AHCCCS">RN Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
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

export default NursingAssessment;
