import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import { user_detail, faceSheet_form } from "../../Api_Collection/Api";

const FaceSheet = () => {
  
  const [patientName, setPatientName] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("6572c20ed4a09e03c1c57f56");
  const [residentName, setResidentName] = useState("John Doe");
  const [dob, setDob] = useState("1990-01-01");
  const [dateOfAdmit, setDateOfAdmit] = useState("2024-01-19");
  const [facilityAddress, setFacilityAddress] = useState("123 Main St");
  const [facilityPhoneNumber, setFacilityPhoneNumber] = useState("555-1234");
  const [placeOfBirth, setPlaceOfBirth] = useState("City, Country");
  const [eyeColor, setEyeColor] = useState("Brown");
  const [height, setHeight] = useState("6 feet");
  const [weight, setWeight] = useState("160 lbs");
  const [hairColor, setHairColor] = useState("Black");
  const [identifiableMarks, setIdentifiableMarks] = useState("Scar on left hand");
  const [primaryLanguage, setPrimaryLanguage] = useState("English");
  const [courtOrderedTreatment, setCourtOrderedTreatment] = useState(false);
  const [familyGuardianEmergencyName, setFamilyGuardianEmergencyName] = useState("Jane Doe");
  const [familyGuardianEmergencyContact, setFamilyGuardianEmergencyContact] = useState("555-5678");
  const [facilityEmergencyContact, setFacilityEmergencyContact] = useState("555-8765");
  const [medicationAllergies, setMedicationAllergies] = useState("Penicillin");
  const [otherAllergies, setOtherAllergies] = useState("Pollen");
  const [primaryCareProviderName, setPrimaryCareProviderName] = useState("Dr. Smith");
  const [primaryCareProviderPhone, setPrimaryCareProviderPhone] = useState("555-4321");
  const [primaryCareProviderAddress, setPrimaryCareProviderAddress] = useState("456 Medical St");
  const [primaryCareProviderOtherSpecialists, setPrimaryCareProviderOtherSpecialists] = useState([]);
  const [psychiatricProviderName, setPsychiatricProviderName] = useState("Dr. Johnson");
  const [psychiatricProviderPhone, setPsychiatricProviderPhone] = useState("555-9876");
  const [psychiatricProviderAddress, setPsychiatricProviderAddress] = useState("789 Psychiatry Blvd");
  const [psychiatricProviderOtherSpecialists, setPsychiatricProviderOtherSpecialists] = useState([]);
  const [preferredHospitalName, setPreferredHospitalName] = useState("City Hospital");
  const [preferredHospitalPhone, setPreferredHospitalPhone] = useState("555-1111");
  const [preferredHospitalAddress, setPreferredHospitalAddress] = useState("789 Hospital St");
  const [healthPlan, setHealthPlan] = useState("Insurance XYZ");
  const [healthPlanId, setHealthPlanId] = useState("12345");
  const [caseManagerName, setCaseManagerName] = useState("Casey Manager");
  const [caseManagerPhone, setCaseManagerPhone] = useState("555-2222");
  const [caseManagerEmail, setCaseManagerEmail] = useState("casey@example.com");
  const [socialSecurityRepresentativePayeeName, setSocialSecurityRepresentativePayeeName] = useState("SSR Payee");
  const [socialSecurityRepresentativePayeePhone, setSocialSecurityRepresentativePayeePhone] = useState("555-3333");
  const [socialSecurityRepresentativePayeeEmail, setSocialSecurityRepresentativePayeeEmail] = useState("ssrpayee@example.com");
  const [mentalHealthDiagnoses, setMentalHealthDiagnoses] = useState("Depression");
  const [medicalDiagnosesHistory, setMedicalDiagnosesHistory] = useState("Hypertension");
  const [pastSurgeries, setPastSurgeries] = useState("Appendectomy");

  useEffect(() => {
    setPatientId(userDetail?._id);
    setPatientName(userDetail?.fullName);
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

const handlePrimaryCareProviderOtherSpecialists=(e)=>{
  const selectedValue = e.target.value;

  if (!primaryCareProviderOtherSpecialists.includes(selectedValue) && selectedValue !== '') {
    setPrimaryCareProviderOtherSpecialists((prev) => [...prev, selectedValue]);
  }
}

const handlePsychiatricProviderOtherSpecialists=(e)=>{
  const selectedValue = e.target.value;
  
  if (!psychiatricProviderOtherSpecialists.includes(selectedValue) && selectedValue !== '') {
    setPsychiatricProviderOtherSpecialists((prev) => [...prev, selectedValue]);
  }
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
            <h1>FACE SHEET</h1>
          </div>
        </div>
        <form onSubmit="">
          <div className="form-section">
            <div className="form-field">
              <label htmlFor="residentFullName">Resident Name:</label>
              <input
                type="text"
                id="residentFullName"
                value={residentName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setResidentName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={dob}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e)=>setDob(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="admissionDate">Admit Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={dateOfAdmit}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e)=>setDateOfAdmit(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value={facilityAddress}
                placeholder="Type Here....."
                required
                onChange={(e)=>setFacilityAddress(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Phone Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value={facilityPhoneNumber}
                placeholder="Type Here....."
                required
                onChange={(e)=>setFacilityPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Place of Birth:</label>
              <input
                type="text"
                id="AHCCCS"
                value={placeOfBirth}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPlaceOfBirth(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Eye Color:</label>
              <input
                type="text"
                id="AHCCCS"
                value={eyeColor}
                placeholder="Type Here....."
                required
                onChange={(e)=>setEyeColor(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Height:</label>
              <input
                type="text"
                id="AHCCCS"
                value={height}
                placeholder="Type Here....."
                required
                onChange={(e)=>setHeight(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Weight:</label>
              <input
                type="text"
                id="AHCCCS"
                value={weight}
                placeholder="Type Here....."
                required
                onChange={(e)=>setWeight(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Hair Color:</label>
              <input
                type="text"
                id="AHCCCS"
                value={hairColor}
                placeholder="Type Here....."
                required
                onChange={(e)=>setHairColor(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Identifiable Marks:</label>
              <input
                type="text"
                id="AHCCCS"
                value={identifiableMarks}
                placeholder="Type Here....."
                required
                onChange={(e)=>setIdentifiableMarks(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Primary Language:</label>
              <input
                type="text"
                id="AHCCCS"
                value={primaryLanguage}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPrimaryLanguage(e.target.value)}
              />
            </div>
            <div className="yeschechbox2">
              <label htmlFor="AHCCCS">Court Ordered Treatment?</label>
              <div>
                <input type="checkbox"  id="courtOrderedTreatment" value={courtOrderedTreatment} checked={courtOrderedTreatment===true} onChange={()=>setCourtOrderedTreatment(true)}/>
                <label htmlFor="courtOrderedTreatment">Yes</label>
              </div>
              <div>
              <input type="checkbox"  id="courtOrderedTreatmentno" value={courtOrderedTreatment} checked={courtOrderedTreatment===false} onChange={(e)=>setCourtOrderedTreatment(false)}/>
                <label htmlFor="courtOrderedTreatmentno">No</label>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Family/Guardian Emergency Name and Contact:
              </label>
              <input
                type="text"
                id="AHCCCS"
                value={familyGuardianEmergencyName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setFamilyGuardianEmergencyName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Emergency Contact:</label>
              <input
                type="text"
                id="AHCCCS"
                value={familyGuardianEmergencyContact}
                placeholder="Type Here....."
                required
                onChange={(e)=>setFamilyGuardianEmergencyContact(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Facility Emergency Contact:</label>
              <input
                type="text"
                id="AHCCCS"
                value={facilityEmergencyContact}
                placeholder="Type Here....."
                required
                onChange={(e)=>setFacilityEmergencyContact(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">MEDICATION Allergies:</label>
              <input
                type="text"
                id="AHCCCS"
                value={medicationAllergies}
                placeholder="Type Here....."
                required
                onChange={(e)=>setMedicationAllergies(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Other Allergies (animal, food, environment)
              </label>
              <input
                type="text"
                id="AHCCCS"
                value={otherAllergies}
                placeholder="Type Here....."
                required
                onChange={(e)=>setOtherAllergies(e.target.value)}
              />
            </div>
            <div className="formsheading">
              <h6>Primary Care Provider</h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value={primaryCareProviderName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPrimaryCareProviderName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Mobile Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value={primaryCareProviderPhone}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPrimaryCareProviderPhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value={primaryCareProviderAddress}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPrimaryCareProviderAddress(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <select
        required
        onChange={handlePrimaryCareProviderOtherSpecialists}
      >
        <option value="">Select Option</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Cardiologist">Cardiologist</option>
        
      </select>
            </div>
            {/* <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div> */}
            <div className="formsheading">
              <h6>Psychiatric Provider</h6>
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value={psychiatricProviderName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPsychiatricProviderName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Mobile Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value={psychiatricProviderPhone}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPsychiatricProviderPhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value={psychiatricProviderAddress}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPsychiatricProviderAddress(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <select
        required
        onChange={handlePsychiatricProviderOtherSpecialists}
      >
        <option value="">Select Option</option>
        <option value="Therapist">Therapist</option>
        <option value="Neuropsychiatrist">Neuropsychiatrist</option>
        
      </select>
            </div>
            {/* <div className="form-field">
              <label htmlFor="AHCCCS">Other Specialist - please specify:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Type Here....."
                required
              />
            </div> */}
            <div className="form-field">
              <label htmlFor="AHCCCS">Preferred Hospital Phone:</label>
              <input
                type="text"
                id="AHCCCS"
                value={preferredHospitalName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPreferredHospitalName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Preferred Hospital Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value={preferredHospitalAddress}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPreferredHospitalAddress(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Health Plan:</label>
              <input
                type="text"
                id="AHCCCS"
                value={healthPlan}
                placeholder="Type Here....."
                required
                onChange={(e)=>setHealthPlan(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">ID #:</label>
              <input
                type="text"
                id="AHCCCS"
                value={healthPlanId}
                placeholder="Type Here....."
                required
                onChange={(e)=>setHealthPlanId(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Case Manager:</label>
              <input
                type="text"
                id="AHCCCS"
                value={caseManagerName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setCaseManagerName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Phone Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value={caseManagerPhone}
                placeholder="Type Here....."
                required
                onChange={(e)=>setCaseManagerPhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">E-Mail:</label>
              <input
                type="text"
                id="AHCCCS"
                value={caseManagerEmail}
                placeholder="Type Here....."
                required
                onChange={(e)=>setCaseManagerEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">
                Social Security Representative Payee:
              </label>
              <input
                type="text"
                id="AHCCCS"
                value={socialSecurityRepresentativePayeeName}
                placeholder="Type Here....."
                required
                onChange={(e)=>setSocialSecurityRepresentativePayeeName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Phone Number:</label>
              <input
                type="text"
                id="AHCCCS"
                value={socialSecurityRepresentativePayeePhone}
                placeholder="Type Here....."
                required
                onChange={(e)=>setSocialSecurityRepresentativePayeePhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">E-Mail:</label>
              <input
                type="text"
                id="AHCCCS"
                value={socialSecurityRepresentativePayeeEmail}
                placeholder="Type Here....."
                required
                onChange={(e)=>setSocialSecurityRepresentativePayeeEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Mental Health Diagnoses:</label>
              <input
                type="text"
                id="AHCCCS"
                value={mentalHealthDiagnoses}
                placeholder="Type Here....."
                required
                onChange={(e)=>setMentalHealthDiagnoses(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Medical Diagnoses Health:</label>
              <input
                type="text"
                id="AHCCCS"
                value={medicalDiagnosesHistory}
                placeholder="Type Here....."
                required
                onChange={(e)=>setMedicalDiagnosesHistory(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Past Surgeries:</label>
              <input
                type="text"
                id="AHCCCS"
                value={pastSurgeries}
                placeholder="Type Here....."
                required
                onChange={(e)=>setPastSurgeries(e.target.value)}
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

export default FaceSheet;
