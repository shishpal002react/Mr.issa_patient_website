import React ,{ useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import {
  user_detail,
  faceSheet_form
} from "../../Api_Collection/Api";
import Draftinmodel from "../Modal/Draftinmodel";
import { useReactToPrint } from "react-to-print";
import SingInUpdateModel from "../Modal/SingInUpdateModel";

const FaceSheet = () => {
  const [showSignature,setShowSignature]=useState(false);
  //draft model
  const [draftModel,setDraftModel]=useState(false);
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint2 = () => {
    var elements = document.getElementsByClassName("hidePrint");

    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    // Trigger the print action
    handlePrint();

    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    }, 1000);
  };

  const [patientName, setPatientName] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dob, setDob] = useState("");
  const [dateOfAdmit, setDateOfAdmit] = useState("");
  const [facilityAddress, setFacilityAddress] = useState("");
  const [facilityPhoneNumber, setFacilityPhoneNumber] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [race,setRace]=useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [identifiableMarks, setIdentifiableMarks] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [courtOrderedTreatment, setCourtOrderedTreatment] = useState();
  const [familyGuardianEmergencyName, setFamilyGuardianEmergencyName] =
    useState("");
  const [familyGuardianEmergencyContact, setFamilyGuardianEmergencyContact] =
    useState("");
  const [facilityEmergencyContact, setFacilityEmergencyContact] = useState("");
  const [medicationAllergies, setMedicationAllergies] = useState("");
  const [otherAllergies, setOtherAllergies] = useState("");
  const [primaryCareProviderName, setPrimaryCareProviderName] = useState("");
  const [primaryCareProviderPhone, setPrimaryCareProviderPhone] = useState("");
  const [primaryCareProviderAddress, setPrimaryCareProviderAddress] =
    useState("");
  const [
    primaryCareProviderOtherSpecialists,
    setPrimaryCareProviderOtherSpecialists,
  ] = useState(""); 
  const [primaryCareProviderArray,setPrimaryCareProviderArray]=useState([])

  const handlePrimaryCareArray=()=>{
    const newData={
      primaryCareProviderOtherSpecialists,
      primaryCareProviderName,
      primaryCareProviderPhone,
      primaryCareProviderAddress,
      preferredHospitalName,
      preferredHospitalPhone,
      preferredHospitalAddress
    }
    setPrimaryCareProviderArray((prev)=> [...prev,newData]);
    setPrimaryCareProviderOtherSpecialists("")
    setPrimaryCareProviderName("");
    setPrimaryCareProviderPhone("");
    setPrimaryCareProviderAddress("");
    setPreferredHospitalName("");
    setPreferredHospitalPhone("");
    setPreferredHospitalAddress("");
  }



  const [psychiatricProviderName, setPsychiatricProviderName] = useState("");
  const [psychiatricProviderPhone, setPsychiatricProviderPhone] = useState("");
  const [psychiatricProviderAddress, setPsychiatricProviderAddress] =
    useState("");
  const [
    psychiatricProviderOtherSpecialists,
    setPsychiatricProviderOtherSpecialists,
  ] = useState("");

  const [psychiatricArray,setPsychiatricArray]=useState([])
  
  const handlePsychiatricArray=()=>{
    const newData={
      psychiatricProviderName,
      psychiatricProviderPhone,
      psychiatricProviderAddress,
      psychiatricProviderOtherSpecialists,
      healthPlan,
      healthPlanId
    }
    setPsychiatricArray((prev)=> [...prev,newData]);
    setPsychiatricProviderName("")
    setPsychiatricProviderPhone("");
    setPsychiatricProviderAddress("");
    setPsychiatricProviderOtherSpecialists("");
    setHealthPlan("");
    setHealthPlanId("");
  }

  const [preferredHospitalName, setPreferredHospitalName] = useState("");
  const [preferredHospitalPhone, setPreferredHospitalPhone] = useState("");
  const [preferredHospitalAddress, setPreferredHospitalAddress] = useState("");
  const [healthPlan, setHealthPlan] = useState("");
  const [healthPlanId, setHealthPlanId] = useState("");
  const [caseManagerName, setCaseManagerName] = useState("");
  const [caseManagerPhone, setCaseManagerPhone] = useState("");
  const [caseManagerEmail, setCaseManagerEmail] = useState("");
  const [
    socialSecurityRepresentativePayeeName,
    setSocialSecurityRepresentativePayeeName,
  ] = useState("");
  const [
    socialSecurityRepresentativePayeePhone,
    setSocialSecurityRepresentativePayeePhone,
  ] = useState("");
  const [
    socialSecurityRepresentativePayeeEmail,
    setSocialSecurityRepresentativePayeeEmail,
  ] = useState("");
  const [mentalHealthDiagnoses, setMentalHealthDiagnoses] = useState("");
  const [medicalDiagnosesHistory, setMedicalDiagnosesHistory] = useState("");
  const [pastSurgeries, setPastSurgeries] = useState("");

  //signature and also date
  const [signature,setSignature]=useState("");
  const [signatureDate,setSignatureDate]=useState("");

  useEffect(() => {
    setPatientId(userDetail?._id);
    setPatientName(userDetail?.fullName);
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

  const initial_Value = () => {
    setResidentName("");
    setDob("");
    setDateOfAdmit("");
    setFacilityAddress("");
    setFacilityPhoneNumber("");
    setPlaceOfBirth("");
    setEyeColor("");
    setHeight("");
    setWeight("");
    setHairColor("");
    setIdentifiableMarks("");
    setPrimaryLanguage("");
    setCourtOrderedTreatment();
    setFamilyGuardianEmergencyName("");
    setFamilyGuardianEmergencyContact("");
    setFacilityEmergencyContact("");
    setMedicationAllergies("");
    setOtherAllergies("");
    setPrimaryCareProviderName("");
    setPrimaryCareProviderPhone("");
    setPrimaryCareProviderAddress("");
    setPrimaryCareProviderOtherSpecialists([]);
    setPsychiatricProviderName("");
    setPsychiatricProviderPhone("");
    setPsychiatricProviderAddress("");
    setPsychiatricProviderOtherSpecialists([]);
    setPreferredHospitalName("");
    setPreferredHospitalPhone("");
    setPreferredHospitalAddress("");
    setHealthPlan("");
    setHealthPlanId("");
    setCaseManagerName("");
    setCaseManagerPhone("");
    setCaseManagerEmail("");
    setSocialSecurityRepresentativePayeeName("");
    setSocialSecurityRepresentativePayeePhone("");
    setSocialSecurityRepresentativePayeeEmail("");
    setMentalHealthDiagnoses("");
    setMedicalDiagnosesHistory("");
    setPastSurgeries("");
  };

  const handleData = (e) => {
    // e.preventDefault();
    const data = {
      patientId,
      residentName,
      dob,
      dateOfAdmit,
      facilityAddress,
      facilityPhoneNumber,
      placeOfBirth,
      eyeColor,
      race,
      height,
      weight,
      hairColor,
      identifiableMarks,
      primaryLanguage,
      courtOrderedTreatment,
      familyGuardianEmergencyName,
      familyGuardianEmergencyContact,
      facilityEmergencyContact,
      medicationAllergies,
      otherAllergies,
      primaryCareProviderName,
      primaryCareProviderPhone,
      primaryCareProviderAddress,
      primaryCareProviderOtherSpecialists,
      psychiatricProviderName,
      psychiatricProviderPhone,
      psychiatricProviderAddress,
      psychiatricProviderOtherSpecialists,
      preferredHospitalName,
      preferredHospitalPhone,
      preferredHospitalAddress,
      healthPlan,
      healthPlanId,
      caseManagerName,
      caseManagerPhone,
      caseManagerEmail,
      socialSecurityRepresentativePayeeName,
      socialSecurityRepresentativePayeePhone,
      socialSecurityRepresentativePayeeEmail,
      mentalHealthDiagnoses,
      medicalDiagnosesHistory,
      pastSurgeries,
    };
    faceSheet_form(data);
    initial_Value();
    navigate("/intake");
  };

  const handlePrimaryCareProviderOtherSpecialists = (e) => {
    const selectedValue = e.target.value;

    if (
      !primaryCareProviderOtherSpecialists.includes(selectedValue) &&
      selectedValue !== ""
    ) {
      setPrimaryCareProviderOtherSpecialists((prev) => [
        ...prev,
        selectedValue,
      ]);
    }
  };

  const handlePsychiatricProviderOtherSpecialists = (e) => {
    const selectedValue = e.target.value;

    if (
      !psychiatricProviderOtherSpecialists.includes(selectedValue) &&
      selectedValue !== ""
    ) {
      setPsychiatricProviderOtherSpecialists((prev) => [
        ...prev,
        selectedValue,
      ]);
    }
  };

  return (
    <>
    <div ref={componentRef}>
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
        <div className="Boss">
        <div className="formheading1">
          <div className="formsheading2">
            <h1>FACE SHEET</h1>
          </div>
        </div>
          <form >
          <div className="form-section">

            <div className="box-image-container">
              <div className="form-field-update">
                <div className="form-field-child">
              <label htmlFor="residentFullName">Resident Name:</label>
              <input
                type="text"
                id="residentFullName"
                value={residentName}
                placeholder="Type Here....."
                required
                onChange={(e) => setResidentName(e.target.value)}
              />
            </div>

                <div className="form-field-child">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input

                type="date"
                id="dateOfBirth"
                value={dob}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDob(e.target.value)}
              />
            </div>


                <div className="form-field-child">
              <label htmlFor="admissionDate">Admit Date:</label>
              <input

                type="date"
                id="dateOfBirth"
                value={dateOfAdmit}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDateOfAdmit(e.target.value)}
              />
            </div>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
              <label htmlFor="AHCCCS">Facility Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value={facilityAddress}
                placeholder="Type Here....."
                required
                onChange={(e) => setFacilityAddress(e.target.value)}
              />
            </div>

                <div className="form-field-child">
              <label htmlFor="AHCCCS">Facility Phone Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value={facilityPhoneNumber}
                placeholder="Type Here....."
                required
                onChange={(e) => setFacilityPhoneNumber(e.target.value)}
              />
            </div>

              </div>

              <div className="form-field-update">
                <div className="form-field-child">
              <label htmlFor="AHCCCS">Place of Birth:</label>
              <input
                type="text"
                id="AHCCCS"
                value={placeOfBirth}
                placeholder="Type Here....."
                required
                onChange={(e) => setPlaceOfBirth(e.target.value)}
              />
            </div>
                <div className="form-field-child">
              <label htmlFor="AHCCCS">Eye Color:</label>
              <input
                type="text"
                id="AHCCCS"
                value={eyeColor}
                placeholder="Type Here....."
                required
                onChange={(e) => setEyeColor(e.target.value)}
              />
            </div>
                <div className="form-field-child">
              <label htmlFor="AHCCCS">Race:</label>
              <input
                type="text"
                id="AHCCCS"
                value={race}
                placeholder="Type Here....."
                required
                onChange={(e) => setRace(e.target.value)}
              />
            </div>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Height:</label>
              <input
                type="text"

                value={height}
                placeholder="Type Here....."
                required
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Weight:</label>
              <input
                type="text"

                value={weight}
                placeholder="Type Here....."
                required
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

                <div className="form-field-child">
                  <label >Hair Color:</label>
              <input
                type="text"

                value={hairColor}
                placeholder="Type Here....."
                required
                onChange={(e) => setHairColor(e.target.value)}
              />
            </div>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
              <label htmlFor="AHCCCS">Identifiable Marks:</label>
              <input
                type="text"
                id="AHCCCS"
                value={identifiableMarks}
                placeholder="Type Here....."
                required
                onChange={(e) => setIdentifiableMarks(e.target.value)}
              />
            </div>

                <div className="form-field-child">
              <label htmlFor="AHCCCS">Primary Language:</label>
              <input
                type="text"
                id="AHCCCS"
                value={primaryLanguage}
                placeholder="Type Here....."
                required
                onChange={(e) => setPrimaryLanguage(e.target.value)}
              />
            </div>

                <div className="form-field-child" style={{ marginTop: "1rem" }}>
              <label htmlFor="AHCCCS">Court Ordered Treatment?</label>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="checkbox"
                  id="courtOrderedTreatment"
                  value={courtOrderedTreatment}
                  checked={courtOrderedTreatment === true}
                  onChange={() => setCourtOrderedTreatment(true)}
                />
                <label htmlFor="courtOrderedTreatment">Yes</label>
              </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="checkbox"
                  id="courtOrderedTreatmentno"
                  value={courtOrderedTreatment}
                  checked={courtOrderedTreatment === false}
                  onChange={(e) => setCourtOrderedTreatment(false)}
                />
                <label htmlFor="courtOrderedTreatmentno">No</label>
              </div>
            </div>
              </div>

              <div className="form-field-single-update">
                <label>
                  Family/Guardian Emergency Name and Contact Number:
                </label>
                <input
                  type="text"

                  value={familyGuardianEmergencyName}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setFamilyGuardianEmergencyName(e.target.value)}
                />
              </div>
              <div className="form-field-single-update">
                <label >Facility Emergency Contact Number:</label>
                <input
                  type="text"

                value={facilityEmergencyContact}
                placeholder="Type Here....."
                required
                onChange={(e) => setFacilityEmergencyContact(e.target.value)}
              />
            </div>
              <div className="form-field-single-update">
                <label >MEDICATION Allergies:</label>
              <input
                type="text"

                value={medicationAllergies}
                placeholder="Type Here....."
                required
                onChange={(e) => setMedicationAllergies(e.target.value)}
              />
            </div>
              <div className="form-field-single-update">
                <label>
                  Other Allergies (animal, food, environment):
              </label>
              <input
                type="text"

                value={otherAllergies}
                placeholder="Type Here....."
                required
                onChange={(e) => setOtherAllergies(e.target.value)}
              />
            </div>
            </div>


            <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Primary Care Provider:</h6>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Name:</label>
              <input
                    type="text"
                value={primaryCareProviderName}
                placeholder="Type Here....."
                
                onChange={(e) => setPrimaryCareProviderName(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
              <input
                type="number"

                value={primaryCareProviderPhone}
                placeholder="Type number....."
                
                onChange={(e) => setPrimaryCareProviderPhone(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Address:</label>
              <input
                type="text"

                value={primaryCareProviderAddress}
                placeholder="Type Here....."
                
                onChange={(e) => setPrimaryCareProviderAddress(e.target.value)}
              />
            </div>

                <div className="form-field-child">
                  <label>Other Specialist - please specify:</label>
                  <input
                    type="text"

                    value={primaryCareProviderOtherSpecialists}
                    placeholder="Type Here....."

                    onChange={(e) => setPrimaryCareProviderOtherSpecialists(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label >Preferred Hospital Name:</label>
                  <input
                    type="text"

                    value={preferredHospitalName}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setPreferredHospitalName(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label >Preferred Hospital Phone Number:</label>
                  <input
                    type="text"

                    value={preferredHospitalPhone}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setPreferredHospitalPhone(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label >Preferred Hospital Address:</label>
                  <input
                    type="text"

                    value={preferredHospitalAddress}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setPreferredHospitalAddress(e.target.value)}
                  />
                </div>



              </div>



              <div className="form-actions hidePrint">
              <button
                type="button"
                className="safetybutton"
                onClick={handlePrimaryCareArray}
              >
                Add
              </button>
            </div>

            <div className="needs-interventions-container">
  <div className="needs-interventions-column3">
    {primaryCareProviderArray.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Other Specify</th>
                          <th>Hospital Name</th>
                          <th>Hospital Phone</th>
                          <th>Hospital Address</th>
          </tr>
        </thead>
        <tbody>
          {primaryCareProviderArray?.map((i, index) => (
            <tr key={index}>
              <td>
                {i?.primaryCareProviderName}
              </td>
         
              <td> {i?.primaryCareProviderPhone} </td>
              <td>  {i?.primaryCareProviderAddress}</td>
              <td>  {i?.primaryCareProviderOtherSpecialists}</td>
              <td>  {i?.preferredHospitalName}</td>
              <td>  {i?.preferredHospitalPhone}</td>
              <td>  {i?.preferredHospitalAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>
            
            <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Psychiatric Provider:</h6>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Name:</label>
              <input
                type="text"

                value={psychiatricProviderName}
                placeholder="Type Here....."
                
                onChange={(e) => setPsychiatricProviderName(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
              <input
                type="number"

                value={psychiatricProviderPhone}
                placeholder="Type number....."
                
                onChange={(e) => setPsychiatricProviderPhone(e.target.value)}
              />
            </div>


                <div className="form-field-child">
                  <label >Address:</label>
              <input
                type="text"

                value={psychiatricProviderAddress}
                placeholder="Type Here....."
                
                onChange={(e) => setPsychiatricProviderAddress(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Other Specialist - please specify:</label>
              <input
                type="text"

                value={psychiatricProviderOtherSpecialists}
                placeholder="Type Here....."
                
                onChange={(e)=>setPsychiatricProviderOtherSpecialists(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Health Plan:</label>
                  <input
                    type="text"

                    value={healthPlan}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setHealthPlan(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label >ID #:</label>
                  <input
                    type="text"

                    value={healthPlanId}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setHealthPlanId(e.target.value)}
                  />
                </div>

              </div>



              <div className="form-actions hidePrint">
              <button
                type="button"
                className="safetybutton"
                onClick={handlePsychiatricArray}
              >
                Add
              </button>
            </div>


            <div className="needs-interventions-container">
  <div className="needs-interventions-column3">
    {psychiatricArray.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Other Specify</th>
                          <th>Health Plane</th>
                          <th>Health Plane Id</th>
          </tr>
        </thead>
        <tbody>
          {psychiatricArray?.map((i, index) => (
            <tr key={index}>
              <td>
                {i?.psychiatricProviderName}
              </td>
              <td> {i?.psychiatricProviderPhone} </td>
              <td>  {i?.psychiatricProviderAddress}</td>
              <td>  {i?.psychiatricProviderOtherSpecialists}</td>
              <td>  {i?.healthPlan}</td>
              <td>  {i?.healthPlanId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>



              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Case Manager:</label>
              <input
                    type="text"

                    value={caseManagerName}
                placeholder="Type Here....."
                required
                    onChange={(e) => setCaseManagerName(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
              <input
                type="text"

                    value={caseManagerPhone}
                placeholder="Type Here....."
                required
                    onChange={(e) => setCaseManagerPhone(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label >E-Mail:</label>
              <input
                    type="email"

                    value={caseManagerEmail}
                placeholder="Type Here....."
                required
                    onChange={(e) => setCaseManagerEmail(e.target.value)}
              />
                </div>
              </div>

              <div className="form-field-update ">

                <div className="form-field-child">
                  <label >
                Social Security Representative Payee:
              </label>
              <input
                type="text"

                value={socialSecurityRepresentativePayeeName}
                placeholder="Type Here....."
                required
                onChange={(e) =>
                  setSocialSecurityRepresentativePayeeName(e.target.value)
                }
              />
            </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
              <input
                type="text"

                value={socialSecurityRepresentativePayeePhone}
                placeholder="Type Here....."
                required
                onChange={(e) =>
                  setSocialSecurityRepresentativePayeePhone(e.target.value)
                }
              />
            </div>
                <div className="form-field-child">
                  <label >E-Mail:</label>
              <input
                type="email"

                value={socialSecurityRepresentativePayeeEmail}
                placeholder="Type Here....."
                required
                onChange={(e) =>
                  setSocialSecurityRepresentativePayeeEmail(e.target.value)
                }
              />
            </div>
              </div>






              <div className="form-field-single-update">
                <label >Mental Health Diagnoses:</label>
              <input
                type="text"

                value={mentalHealthDiagnoses}
                placeholder="Type Here....."
                required
                onChange={(e) => setMentalHealthDiagnoses(e.target.value)}
              />
            </div>
              <div className="form-field-single-update">
                <label >Medical Diagnoses Health:</label>
              <input
                type="text"

                value={medicalDiagnosesHistory}
                placeholder="Type Here....."
                required
                onChange={(e) => setMedicalDiagnosesHistory(e.target.value)}
              />
            </div>
              <div className="form-field-single-update">
                <label >Past Surgeries:</label>
              <input
                type="text"

                value={pastSurgeries}
                placeholder="Type Here....."
                required
                onChange={(e) => setPastSurgeries(e.target.value)}
              />
            </div>
            {/* signature is not add now */}
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
          </div>
            <div class="file-upload-box hidePrint">
              
              <div className="file-upload-box-child">
               <div >
                  <button className="upload-button1" type="button" onClick={() => { setDraftModel(true); handleData() }}>
                  SAVED AS DRAFT
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={() => setShowSignature(true)}>
                  SAVED AND SIGNED
                </button>
                </div>
                <div>
                  <button className="upload-button" type="button" onClick={handlePrint2}>
                  PRINT THIS FORM
                </button>
                </div>
              </div> 
              <div>
                {
                  signature && (
                    <p className="signature_name_print">Digitally Sign by {signature} {signatureDate}</p>
                  )
                }
              </div>
              
            </div>

            {
              showSignature && (<SingInUpdateModel 
                onClose={()=>setShowSignature(false)}
                singin={signature}
                setSingIn={setSignature}
                setDateAndTime={setSignatureDate}
                />)
            }
    
            {/* <div className="form-actions">
              <button type="submit" id="submit_button" style={{ display: "none" }}>
              SUBMIT DETAILS
            </button>
            </div> */}
        </form>
      </div>
      {
        draftModel && (<Draftinmodel onClose={() => setDraftModel(false)}/>)
      }
      </div>
    </>
  );
};

export default FaceSheet;
