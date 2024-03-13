import React ,{ useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import {
  user_detail,
  faceSheet_form,faceSheet_form_get
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

//  get data api
  const [getApiData,setGetApiData]=useState("")

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
  // primary care provider
  const [primaryCareProviderName, setPrimaryCareProviderName] = useState("");
  const [primaryCareProviderPhone, setPrimaryCareProviderPhone] = useState("");
  const [primaryCareProviderAddress, setPrimaryCareProviderAddress] =
    useState("");
  const [
    primaryCareProviderOtherSpecialists,
    setPrimaryCareProviderOtherSpecialists,
  ] = useState(""); 
  const [preferredHospitalName, setPreferredHospitalName] = useState("");
  const [preferredHospitalPhone, setPreferredHospitalPhone] = useState("");
  const [preferredHospitalAddress, setPreferredHospitalAddress] = useState("");


  // const handlePrimaryCareArray=()=>{
  //   const newData={
  //     primaryCareProviderOtherSpecialists,
  //     primaryCareProviderName,
  //     primaryCareProviderPhone,
  //     primaryCareProviderAddress,
  //     preferredHospitalName,
  //     preferredHospitalPhone,
  //     preferredHospitalAddress
  //   }
  //   setPrimaryCareProviderArray((prev)=> [...prev,newData]);
  //   setPrimaryCareProviderOtherSpecialists("")
  //   setPrimaryCareProviderName("");
  //   setPrimaryCareProviderPhone("");
  //   setPrimaryCareProviderAddress("");
  //   setPreferredHospitalName("");
  //   setPreferredHospitalPhone("");
  //   setPreferredHospitalAddress("");
  // }
  console.log("patientId face sheet",patientId );



  const [psychiatricProviderName, setPsychiatricProviderName] = useState("");
  const [psychiatricProviderPhone, setPsychiatricProviderPhone] = useState("");
  const [psychiatricProviderAddress, setPsychiatricProviderAddress] =
    useState("");
  const [
    psychiatricProviderOtherSpecialists,
    setPsychiatricProviderOtherSpecialists,
  ] = useState("");
  
  const [healthPlan, setHealthPlan] = useState("");
  const [healthPlanId, setHealthPlanId] = useState("");


  
  // const handlePsychiatricArray=()=>{
  //   const newData={
  //     psychiatricProviderName,
  //     psychiatricProviderPhone,
  //     psychiatricProviderAddress,
  //     psychiatricProviderOtherSpecialists,
  //     healthPlan,
  //     healthPlanId
  //   }
  //   setPsychiatricArray((prev)=> [...prev,newData]);
  //   setPsychiatricProviderName("")
  //   setPsychiatricProviderPhone("");
  //   setPsychiatricProviderAddress("");
  //   setPsychiatricProviderOtherSpecialists("");
  //   setHealthPlan("");
  //   setHealthPlanId("");
  // }

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
  const [signatureTime,setSegnatureTime]=useState("");

  useEffect(()=>{

// date format
const getApiDataDob = getApiData?.dob;
const getApiDataAdmit = getApiData?.dateOfAdmit;

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  
  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDay = day < 10 ? '0' + day : day;

  return `${year}-${formattedMonth}-${formattedDay}`;
};

if (getApiDataDob) {
  // Parse the date string into a Date object
  const date1 = new Date(getApiDataDob);
  
  // Format the date as MM/DD/YYYY
  const formattedDate1 = formatDate(date1);
  
  // Set the formatted date in the state
  setDob(formattedDate1);
}

if (getApiDataAdmit) {
  // Parse the date string into a Date object
  const date2 = new Date(getApiDataAdmit);
  
  // Format the date as MM/DD/YYYY
  const formattedDate2 = formatDate(date2);
  
  // Set the formatted date in the state
  setDateOfAdmit(formattedDate2);
}


    setResidentName(getApiData?.residentName);
    // setDob(getApiData?.dob);
    // setDateOfAdmit(getApiData?.dateOfAdmit);
    setFacilityAddress(getApiData?.facilityAddress);
    setFacilityPhoneNumber(getApiData?.facilityPhoneNumber);
    setPlaceOfBirth(getApiData?.placeOfBirth);
    setEyeColor(getApiData?.eyeColor);
    setRace(getApiData?.race);
    setHeight(getApiData?.height);
    setWeight(getApiData?.weight);
    setHairColor(getApiData?.hairColor);
    setIdentifiableMarks(getApiData?.identifiableMarks);
    setPrimaryLanguage(getApiData?.primaryLanguage);
    // true false value
    setCourtOrderedTreatment(getApiData?.courtOrderedTreatment);
    setFamilyGuardianEmergencyName(getApiData?.familyGuardianEmergencyName);
    setFamilyGuardianEmergencyContact(getApiData?.familyGuardianEmergencyContact);
    setFacilityEmergencyContact(getApiData?.facilityEmergencyContact);
    setMedicationAllergies(getApiData?.medicationAllergies);
    setOtherAllergies(getApiData?.otherAllergies);

    // primary provider
    setPrimaryCareProviderName(getApiData?.primaryCareProvider?.[0]?.name);
    setPrimaryCareProviderPhone(getApiData?.primaryCareProvider?.[0]?.phone);
    setPrimaryCareProviderAddress(getApiData?.primaryCareProvider?.[0]?.address);
    setPrimaryCareProviderOtherSpecialists(getApiData?.primaryCareProvider?.[0]?.OtherSpecialists)
    setPreferredHospitalName(getApiData?.primaryCareProvider?.[0]?.preferredHospitalName);
    setPreferredHospitalPhone(getApiData?.primaryCareProvider?.[0]?.preferredHospitalPhone);
    setPreferredHospitalAddress(getApiData?.primaryCareProvider?.[0]?.preferredHospitalAddress);
  
 //shycrometric provider
    setPsychiatricProviderName(getApiData?.psychiatricProvider?.[0]?.name);
    setPsychiatricProviderPhone(getApiData?.psychiatricProvider?.[0]?.phone);
    setPsychiatricProviderAddress(getApiData?.psychiatricProvider?.[0]?.address);
    setPsychiatricProviderOtherSpecialists(getApiData?.psychiatricProvider?.[0]?.OtherSpecialists);
    // set data 2 state is pending
    setHealthPlan(getApiData?.psychiatricProvider?.[0]?.name);
    setHealthPlanId(getApiData?.psychiatricProvider?.[0]?.name);

    setCaseManagerName(getApiData?.caseManagerName);
    setCaseManagerPhone(getApiData?.caseManagerPhone);
    setCaseManagerEmail(getApiData?.caseManagerEmail);
    setSocialSecurityRepresentativePayeeName(getApiData?.socialSecurityRepresentativePayeeName);
    setSocialSecurityRepresentativePayeePhone(getApiData?.socialSecurityRepresentativePayeePhone);
    setSocialSecurityRepresentativePayeeEmail(getApiData?.socialSecurityRepresentativePayeeEmail);
    setMentalHealthDiagnoses(getApiData?.mentalHealthDiagnoses);
    setMedicalDiagnosesHistory(getApiData?.medicalDiagnosesHistory);
    setPastSurgeries(getApiData?.pastSurgeries);
    setSignature(getApiData?.bhpSignature);
    setSignatureDate(getApiData?.residentName);
    setSegnatureTime(getApiData?.time);
  },[getApiData])

  useEffect(()=>{
    faceSheet_form_get(patientId,setGetApiData);
  },[patientId])


  useEffect(() => {
    setPatientId(userDetail?._id);
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
    setRace("");
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

    setPrimaryCareProviderName("")
    setPrimaryCareProviderPhone("")
    setPrimaryCareProviderAddress("")
    setPrimaryCareProviderOtherSpecialists("")
    setPreferredHospitalName("");
    setPreferredHospitalPhone("");
    setPreferredHospitalAddress("");
  
    setPsychiatricProviderName("");
    setPsychiatricProviderPhone("");
    setPsychiatricProviderAddress("");
    setPsychiatricProviderOtherSpecialists("")
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
    setSignature("");
    setSignatureDate("");
    setSegnatureTime("")
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
      primaryCareProvider: [
        {
          name: primaryCareProviderName,
          phone: primaryCareProviderPhone,
          address: primaryCareProviderAddress,
          OtherSpecialists: primaryCareProviderOtherSpecialists,
          preferredHospitalName: preferredHospitalName,
          preferredHospitalPhone: preferredHospitalPhone,
          preferredHospitalAddress: preferredHospitalAddress
        }
      ],
      psychiatricProvider:[
        {
          name: psychiatricProviderName,
          phone: psychiatricProviderPhone,
          address: psychiatricProviderAddress,
          OtherSpecialists: psychiatricProviderOtherSpecialists,
          preferredHospitalName: healthPlan,
          preferredHospitalPhone: healthPlanId,
        }
      ],
      caseManagerName,
      caseManagerPhone,
      caseManagerEmail,
      socialSecurityRepresentativePayeeName,
      socialSecurityRepresentativePayeePhone,
      socialSecurityRepresentativePayeeEmail,
      mentalHealthDiagnoses,
      medicalDiagnosesHistory,
      pastSurgeries,
      bhpSignature:signature,
      bhpDate:signatureDate,
      time:signatureTime
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
            <h1>Face sheet/Resident Emergency Information</h1>
          </div>
        </div>
          <form onSubmit={handleData}>
          <div className="form-section">

            <div className="box-image-container">
              <div className="form-field-update">
                <div className="form-field-child">
              <label htmlFor="residentFullName">Resident Name:</label>
              <input
                type="text"
                id="residentFullName"
                value={residentName}
                placeholder="Type Here"
                required
                onChange={(e) => setResidentName(e.target.value)}
              />
            </div>

                <div className="form-field-child">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input

                type="date"
                id="dateOfBirth"
                value={dob?.slice(0,10)}
                placeholder={dob?.slice(0,10)}
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
                placeholder="MM/DD/YYYY"
                required
                onChange={(e) => setDateOfAdmit(e.target.value)}
              />
            </div>
              </div>
              <div className="border-bootom-line"></div>
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

              <div className="border-bootom-line"></div>
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
              <div className="border-bootom-line"></div>
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
              <div className="border-bootom-line"></div>
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
              <div className="border-bootom-line"></div>
              <div className="form-field-single-update">
                <label >
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
            <div className="border-bootom-line"></div>
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

            <div className="box-image-container face_sheet_table" >
                <div className="face_sheet_table_child_left">
                <div className="formsheading">
                <h6 style={{ fontWeight: "bold",padding:"10px" }}>Primary Care Provider:</h6>
              </div>

              <div className="form-field-child-face-sheet-table table_inner_padding" >
                  <label >Name:</label>
              <input
                    type="text"
                value={primaryCareProviderName}
                placeholder="Type Here....."
                required
                onChange={(e) => setPrimaryCareProviderName(e.target.value)}
              />
            </div>
            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Phone Number:</label>
              <input
                type="number"
                required
                value={primaryCareProviderPhone}
                placeholder="Type number....."
                
                onChange={(e) => setPrimaryCareProviderPhone(e.target.value)}
              />
            </div>
            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Address:</label>
              <input
                type="text"
                required
                value={primaryCareProviderAddress}
                placeholder="Type Here....."
                
                onChange={(e) => setPrimaryCareProviderAddress(e.target.value)}
              />
            </div>
            <div className="border-bootom-line"></div>

            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label>Other Specialist - please specify:</label>
                  <input
                    type="text"
                    required
                    value={primaryCareProviderOtherSpecialists}
                    placeholder="Type Here....."

                    onChange={(e) => setPrimaryCareProviderOtherSpecialists(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line "></div>
                <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Preferred Hospital:</label>
                  <input
                    type="text"
                    required
                    value={preferredHospitalName}
                    placeholder="Type Here....."
                    
                    onChange={(e) => setPreferredHospitalName(e.target.value)}
                  />
                </div>

                <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Phone Number:</label>
                  <input
                    type="number"

                    value={preferredHospitalPhone}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setPreferredHospitalPhone(e.target.value)}
                  />
                </div>
              
                <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Preferred Hospital Address:</label>
                  <input
                    type="text"
                    required
                    value={preferredHospitalAddress}
                    placeholder="Type Here....."
                    
                    onChange={(e) => setPreferredHospitalAddress(e.target.value)}
                  />
                </div>
                </div>
                <div className="face_sheet_table_child_right">
                <div className="formsheading">
                <h6 style={{ fontWeight: "bold",padding:"10px" }}>Psychiatric Provider:</h6>
              </div> 
              <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Name:</label>
              <input
                type="text"
                required
                value={psychiatricProviderName}
                placeholder="Type Here....."
                
                onChange={(e) => setPsychiatricProviderName(e.target.value)}
              />
            </div>

            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Phone Number:</label>
              <input
                type="number"
                required
                value={psychiatricProviderPhone}
                placeholder="Type number....."
                
                onChange={(e) => setPsychiatricProviderPhone(e.target.value)}
              />
            </div>

            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Address:</label>
              <input
                type="text"
                required
                value={psychiatricProviderAddress}
                placeholder="Type Here....."
                
                onChange={(e) => setPsychiatricProviderAddress(e.target.value)}
              />
            </div>

            <div className="border-bootom-line"></div>

            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Other Specialist - please specify:</label>
              <input
                type="text"
                required
                value={psychiatricProviderOtherSpecialists}
                placeholder="Type Here....."
                
                onChange={(e)=>setPsychiatricProviderOtherSpecialists(e.target.value)}
              />
            </div>

            <div className="border-bootom-line"></div>

            <div className="form-field-child-face-sheet-table table_inner_padding">
                  <label >Health Plan:</label>
                  <input
                    type="text"

                    value={healthPlan}
                    placeholder="Type Here....."
                    required
                    onChange={(e) => setHealthPlan(e.target.value)}
                  />
                </div>

                <div className="form-field-child-face-sheet-table table_inner_padding">
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
            </div>


            {/* <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Primary Care Provider:</h6>
              </div> */}

              {/* <div className="form-field-update">
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



              </div> */}



              {/* <div className="form-actions hidePrint">
              <button
                type="button"
                className="safetybutton"
                onClick={handlePrimaryCareArray}
              >
                Add
              </button>
            </div> */}

            {/* <div className="needs-interventions-container">
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
</div> */}
            
            {/* <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Psychiatric Provider:</h6>
              </div> */}

              {/* <div className="form-field-update">
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

              </div> */}



              {/* <div className="form-actions hidePrint">
              <button
                type="button"
                className="safetybutton"
                onClick={handlePsychiatricArray}
              >
                Add
              </button>
            </div> */}


            {/* <div className="needs-interventions-container">
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
</div> */}


<div className="box-image-container">
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

              <div className="border-bootom-line"></div>

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

              <div className="border-bootom-line"></div>

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
                <label >Medical Diagnoses /History:</label>
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
                  <button className="upload-button1" type="button" onClick={() => { setDraftModel(true) }}>
                  SAVED AS DRAFT
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={() => setShowSignature(true)}>
                  SAVED AND SIGNED
                </button>
                </div>
                <div>
                  <button className="upload-button signature_shift_margin" type="button" onClick={handlePrint2} >
                  PRINT THIS FORM
                </button>
                </div>
              </div> 
              <div>
                {
                  signature && (
                    <p className="signature_name_print">Digitally Sign by {signature} {signatureDate} {signatureTime}</p>
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
                setSegnatureTime={setSegnatureTime}
                />)
            }
    
            <div className="form-actions">
              <button type="submit" className="hidePrint" style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem"}} >
              SUBMIT DETAILS
            </button>
            </div>
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
