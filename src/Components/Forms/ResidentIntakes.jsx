import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import formupload from "../../img/formupload.png";
import { user_detail, Resident_form } from "../../Api_Collection/Api";

const ResidentIntakes = () => {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState("");
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [residentName, setResidentName] = useState("");
  const [residentSignature, setResidentSignature] = useState("");
  const [residentDate, setResidentDate] = useState("");
  const [guardianRepresentativeName, setGuardianRepresentativeName] =
    useState("");
  const [guardianRepresentativeSignature, setGuardianRepresentativeSignature] =
    useState("");
  const [guardianRepresentativeDate, setGuardianRepresentativeDate] =
    useState("");
  const [staffName, setStaffName] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffDate, setStaffDate] = useState("");
  const [internalDisclosureList, setInternalDisclosureList] = useState("");
  const [internalDisclosureListExpire, setInternalDisclosureListExpire] =
    useState("");
  const [
    internalDisclosureListResidentName,
    setInternalDisclosureListResidentName,
  ] = useState("");
  const [
    internalDisclosureListResidentSignature,
    setInternalDisclosureListResidentSignature,
  ] = useState("");
  const [
    internalDisclosureListResidentDate,
    setInternalDisclosureListResidentDate,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeName,
    setInternalDisclosureListGuardianRepresentativeName,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeSignature,
    setInternalDisclosureListGuardianRepresentativeSignature,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeDate,
    setInternalDisclosureListGuardianRepresentativeDate,
  ] = useState("");
  const [internalDisclosureListStaffName, setInternalDisclosureListStaffName] =
    useState("");
  const [
    internalDisclosureListStaffSignature,
    setInternalDisclosureListStaffSignature,
  ] = useState("");
  const [internalDisclosureListStaffDate, setInternalDisclosureListStaffDate] =
    useState("");
  const [residentRightsResidentName, setResidentRightsResidentName] =
    useState("");
  const [residentRightsResidentSignature, setResidentRightsResidentSignature] =
    useState();

  const [residentRightsResidentDate, setResidentRightsResidentDate] =
    useState("");
  const [photoVideoConsentResidentName, setPhotoVideoConsentResidentName] =
    useState("");
  const [photoVideoConsentDateOfBirth, setPhotoVideoConsentDateOfBirth] =
    useState("");
  const [photoVideoConsentAdmissionDate, setPhotoVideoConsentAdmissionDate] =
    useState("");
  const [photoVideoConsentConsentGiven, setPhotoVideoConsentConsentGiven] =
    useState("");
  const [
    photoVideoConsentConsentWithdrawn,
    setPhotoVideoConsentConsentWithdrawn,
  ] = useState("");
  const [
    photoVideoConsentResidentSignature,
    setPhotoVideoConsentResidentSignature,
  ] = useState("");
  const [photoVideoConsentResidentDate, setPhotoVideoConsentResidentDate] =
    useState("");
  const [
    photoVideoConsentGuardianRepresentativeName,
    setPhotoVideoConsentGuardianRepresentativeName,
  ] = useState("");
  const [
    photoVideoConsentGuardianRepresentativeSignature,
    setPhotoVideoConsentGuardianRepresentativeSignature,
  ] = useState("");
  const [
    photoVideoConsentGuardianRepresentativeDate,
    setPhotoVideoConsentGuardianRepresentativeDate,
  ] = useState("");
  const [advanceDirectivesResidentName, setAdvanceDirectivesResidentName] =
    useState("");
  const [advanceDirectivesResidentGender, setAdvanceDirectivesResidentGender] =
    useState("");
  const [
    advanceDirectivesResidentDateOfBirth,
    setAdvanceDirectivesResidentDateOfBirth,
  ] = useState("");
  const [
    advanceDirectivesResidentAddress,
    setAdvanceDirectivesResidentAddress,
  ] = useState("");
  const [advanceDirectivesResidentDate, setAdvanceDirectivesResidentDate] =
    useState("");
  const [
    advanceDirectivesProvidedInfoInitials,
    setAdvanceDirectivesProvidedInfoInitials,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoDate,
    setAdvanceDirectivesProvidedInfoDate,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoRefusingInitials,
    setAdvanceDirectivesProvidedInfoRefusingInitials,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoRefusingDate,
    setAdvanceDirectivesProvidedInfoRefusingDate,
  ] = useState();
  const [advanceDirectivesDeveloped, setAdvanceDirectivesDeveloped] =
    useState();
  const [
    advanceDirectivesDevelopedComment,
    setAdvanceDirectivesDevelopedComment,
  ] = useState("");
  const [
    advanceDirectivesExecutedInRecord,
    setAdvanceDirectivesExecutedInRecord,
  ] = useState("");
  const [
    advanceDirectivesExecutedInRecordComment,
    setAdvanceDirectivesExecutedInRecordComment,
  ] = useState("");
  const [
    advanceDirectivesFilingStatusWishNotFiled,
    setAdvanceDirectivesFilingStatusWishNotFiled,
  ] = useState("");
  const [
    advanceDirectivesFilingStatusAskedForCopyNotProvided,
    setAdvanceDirectivesFilingStatusAskedForCopyNotProvided,
  ] = useState("");
  const [
    advanceDirectivesFilingStatusOther,
    setAdvanceDirectivesFilingStatusOther,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareCopySentToPCP,
    setAdvanceDirectivesCoordinationOfCareCopySentToPCP,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareActedOn,
    setAdvanceDirectivesCoordinationOfCareActedOn,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotified,
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment,
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment,
  ] = useState("");
  const [
    complaintProcessAcknowledgementCompany,
    setComplaintProcessAcknowledgementCompany,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentName,
    setComplaintProcessAcknowledgementResidentName,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentSignature,
    setComplaintProcessAcknowledgementResidentSignature,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentDate,
    setComplaintProcessAcknowledgementResidentDate,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeName,
    setComplaintProcessAcknowledgementGuardianRepresentativeName,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeSignature,
    setComplaintProcessAcknowledgementGuardianRepresentativeSignature,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeDate,
    setComplaintProcessAcknowledgementGuardianRepresentativeDate,
  ] = useState("");
  const [orientationToAgencyCompany, setOrientationToAgencyCompany] =
    useState("");
  const [orientationToAgencyResidentName, setOrientationToAgencyResidentName] =
    useState("");
  const [
    orientationToAgencyResidentSignature,
    setOrientationToAgencyResidentSignature,
  ] = useState("");
  const [orientationToAgencyResidentDate, setOrientationToAgencyResidentDate] =
    useState("");
  const [
    orientationToAgencyGuardianRepresentativeName,
    setOrientationToAgencyGuardianRepresentativeName,
  ] = useState("");
  const [
    orientationToAgencyGuardianRepresentativeSignature,
    setOrientationToAgencyGuardianRepresentativeSignature,
  ] = useState("");
  const [
    orientationToAgencyGuardianRepresentativeDate,
    setOrientationToAgencyGuardianRepresentativeDate,
  ] = useState("");
  const [promotionTalkStrategicApproach, setPromotionTalkStrategicApproach] =
    useState("");
  const [
    lockBoxKeyIssueReturnDateKeyIssued,
    setLockBoxKeyIssueReturnDateKeyIssued,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnDateKeyReturned,
    setLockBoxKeyIssueReturnDateKeyReturned,
  ] = useState("");
  const [lockBoxKeyIssueReturnAddress, setLockBoxKeyIssueReturnAddress] =
    useState("");
  const [
    lockBoxKeyIssueReturnResponsibleFor,
    setLockBoxKeyIssueReturnResponsibleFor,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResponsibleForCorporation,
    setLockBoxKeyIssueReturnResponsibleForCorporation,
  ] = useState("");
  const [lockBoxKeyIssueReturnCharged, setLockBoxKeyIssueReturnCharged] =
    useState("");
  const [
    lockBoxKeyIssueReturnResidentName,
    setLockBoxKeyIssueReturnResidentName,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResidentSignature,
    setLockBoxKeyIssueReturnResidentSignature,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResidentDate,
    setLockBoxKeyIssueReturnResidentDate,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeName,
    setLockBoxKeyIssueReturnGuardianRepresentativeName,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeSignature,
    setLockBoxKeyIssueReturnGuardianRepresentativeSignature,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeDate,
    setLockBoxKeyIssueReturnGuardianRepresentativeDate,
  ] = useState("");
  const [lockBoxKeyIssueReturnStaffName, setLockBoxKeyIssueReturnStaffName] =
    useState("");
  const [
    lockBoxKeyIssueReturnStaffSignature,
    setLockBoxKeyIssueReturnStaffSignature,
  ] = useState("");
  const [lockBoxKeyIssueReturnStaffDate, setLockBoxKeyIssueReturnStaffDate] =
    useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderName,
    setInsuranceInformationPrimaryInsurancePolicyholderName,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderDateOfBirth,
    setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderAddress,
    setInsuranceInformationPrimaryInsurancePolicyholderAddress,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderCity,
    setInsuranceInformationPrimaryInsurancePolicyholderCity,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderState,
    setInsuranceInformationPrimaryInsurancePolicyholderState,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderZip,
    setInsuranceInformationPrimaryInsurancePolicyholderZip,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderPhone,
    setInsuranceInformationPrimaryInsurancePolicyholderPhone,
  ] = useState("");

  useEffect(() => {
    setUserId(userDetail?._id);
    setUser(userDetail?.fullName);
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
            <h1>RESIDENT INTAKES</h1>
          </div>
        </div>
        <form action="">
          <div className="residentdiv">
            <h6
              style={{
                fontWeight: "500",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Consent for Treatment
            </h6>
            <p>
              Please read the following Terms & Conditions properly & provide
              all the necessary details
            </p>
            <h6>
              I voluntarily apply for evaluation/behavioral health treatment at
              COMPANY NAME and understand, consent and agree as follows (to be
              executed by legally authorized person if the Resident is incapable
              of giving informed consent):
            </h6>
            <ul>
              <li>
                I agree to participate in my treatment to the best of my ability
                and will let my provider know if situations occur that prevent
                me from participating in treatment.
              </li>
              <li>
                I understand that this consent will remain valid so long as I am
                admitted in this facility, or until I withdraw consent.
              </li>
              <li>
                Information developed as part of evaluation/treatment and your
                psychiatric record is confidential but may be released to those
                parties as required by law such as (information may be released
                without my consent) in cases of medical emergency, abuse or
                neglect, court order, insurance billing claims requirements,
                audit and program evaluation and where otherwise legally
                required. Additionally, I understand that by signing this
                consent I am giving permission for ADHS/DBHS to access my
                information and records maintained by the T/RBHA, COMPANY NAME
                and/or it’s subcontracted providers concerning the provision of
                covered services.
              </li>
              <li>
                I consent to the use and disclosure of my protected health
                information (PHI) by COMPANY NAME, it’s staff members and it’s
                contractors / interns for the purpose of treatment, payment and
                health care operations. This is a joint consent form between
                COMPANY NAME and it’s staff members. I understand the following:
                My signature on the consent is required in order for me to
                receive care from COMPANY NAME, I have the right to revoke this
                consent, in writing, at any time, except to the extent that
                COMPANY NAME has taken action in reliance upon this consent.
              </li>
              <li>
                I understand that all the information gathered during my
                treatment is confidential.
              </li>
              <li>
                However, confidential information may be disclosed without my
                consent in accordance with state and federal law.
              </li>
              <li>
                I understand that this Consent to treatment is voluntary, and I
                may decline at any time.
              </li>
            </ul>
          </div>
          <div className="yeschechbox2">
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I Agree to the Terms & Conditions</label>
            </div>
          </div>
          <div className="form-section">
            <h2
              style={{ fontWeight: "500", fontSize: "20px", color: "#0C5C75" }}
            >
              Resident’s Details
            </h2>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h2
              style={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#0C5C75",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Guardian/Representative Details
            </h2>
            <div className="form-field">
              <label htmlFor="admissionDate">
                Guardian/Representative Full Name
              </label>
              <input
                type="text"
                id="admissionDate"
                value=""
                placeholder="Enter full name"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian / Representative Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h2
              style={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#0C5C75",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Staff Details
            </h2>
            <div className="form-field">
              <label htmlFor="AHCCCS">Staff Full Name</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter full name"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Staff Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "500",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Internal Resident Disclosure List
            </h6>
            <p>
              I authorize and agree that Company Name may verbally disclose my
              protected health information (PHI) to the following family
              members, individuals and / or significant others in my life each
              of whom is directly involved in my care and are concerned about my
              well being specifically for the purpose of coordinating care
              issues either in person or on the telephone.
            </p>
            <p>
              I authorize and agree that Company Name may acknowledge and accept
              telephone calls from the following family members, individuals and
              / or significant others in my life each of whom is directly
              involved in my care and are concerned about my well being who may
              want to talk to me while at Company Name
            </p>
            <div className="safetyplandiv">
              <div className="form-field">
                <label htmlFor="AHCCCS">Name of Person</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Relationship</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Contact</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="safetybutton">
                  SAVE
                </button>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="safetybutton1">
                <CiCirclePlus style={{ width: "30px", height: "30px" }} /> ADD
                MORE PEOPLE
              </button>
            </div>
            <p>
              I acknowledge and agree that Company Name may disclose my
              protected health information to the person(s) set forth in this
              form. I understand that I can revoke this authorization in
              writing, except to the extent that action has already been taken,
              at any time and it will expire on provided date or one year from
              the date of my signature.{" "}
            </p>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Please Provide the Expiry Date Below :
            </h6>

            <div className="form-field">
              <label htmlFor="dateOfBirth">Expiry Date</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Full Name</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian / Representative Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Staff Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              R9-10-711. Resident Rights
            </h6>
            <div className="Residentrights">
              <p>A. An administrator shall ensure that:</p>
              <p>
                1. The requirements in subsection (B) and the resident rights in
                subsection (E) are conspicuously posted on the premises;
              </p>
              <p>
                2. At the time of admission, a resident or the resident 's
                representative receives a written copy of the requirements in
                subsection (B) and the resident rights in subsection (E); and
              </p>
              <p>3. Policies and procedures include:</p>
              <p>
                a. How and when a resident or the resident’s representative is
                informed of the resident rights in subsection (E), and
              </p>
              <p>
                b. Where resident rights are posted as required in subsection
                (A)(1).
              </p>
              <p>B. An administrator shall ensure that:</p>
              <p>
                1. A resident is treated with dignity, respect, and
                consideration;
              </p>
              <p>2. A resident is not subjected to:</p>
              <p>a. Abuse;</p>
              <p>b. Neglect;</p>
              <p>c. Exploitation;</p>
              <p>d. Coercion;</p>
              <p>e. Manipulation;</p>
              <p>f. Sexual abuse;</p>
              <p>g. Sexual assault;</p>
              <p>h. Seclusion;</p>
              <p>i. Restraint;</p>
              <p>
                j. Retaliation for submitting a complaint to the Department or
                another entity;
              </p>
              <p>
                k. Misappropriation of personal and private property by the
                behavioral health residential facility’s personnel members,
                employees, volunteers, or students;
              </p>
              <p>
                l. Discharge or transfer, or threat of discharge or transfer,
                for reasons unrelated to the resident’s treatment needs, except
                as established in a fee agreement signed by the resident or the
                resident 's representative; or
              </p>
              <p>m. Treatment that involves the denial of:</p>
              <p>i. Food,</p>
              <p>ii. The opportunity to sleep, or</p>
              <p>iii. The opportunity to use the toilet;</p>
              <p>
                3. Except as provided in subsection (C) or (D), and unless
                restricted by the resident’s representative, is allowed to:
              </p>
              <p>
                a. Associate with individuals of the resident’s choice, receive
                visitors, and make telephone calls during the hours established
                by the behavioral health residential facility;
              </p>
              <p>
                b. Have privacy in correspondence, communication, visitation,
                financial affairs, and personal hygiene; and
              </p>
              <p>
                c. Unless restricted by a court order, send and receive
                uncensored and unopened mail; and
              </p>
              <p>4. A resident or the resident's representative:</p>
              <p>
                a. Except in an emergency, either consents to or refuses
                treatment;
              </p>
              <p>
                b. May refuse or withdraw consent for treatment before treatment
                is initiated, unless the treatment is ordered by a ourt
                according to A.R.S. Title 36, Chapter;
              </p>
              <p>
                5 or A.R.S. 8-341.01; is necessary to save the resident’s life
                or physical health; or is provided according to A.R.S. § 36-512;
              </p>
              <p>
                c. Except in an emergency, is informed of proposed treatment
                alternatives, associated risks, and possible complications;
              </p>
              <p>d. Is informed of the following:</p>
              <p>
                i. The behavioral health residential facility’s policy on health
                care directives, and
              </p>
              <p>ii. The resident complaint process; and</p>
              <p>
                e. Except as otherwise permitted by law, provides written
                consent to the release of information in the resident’s:
              </p>
              <p>i. Medical record, or</p>
              <p>ii. Financial records.</p>
              <p>
                C. For a behavioral health residential facility with licensed
                capacity of less than 10 residents, if a behavioral health
                professional determines that a resident’s treatment requires the
                behavioral health residential facility to restrict the
                resident’s ability to participate in the activities in
                subsection (B)(3), the behavioral health professional shall:
              </p>
              <p>
                1. Document a specific treatment purpose in the resident’s
                medical record that justifies restricting the resident from the
                activity,
              </p>
              <p>
                2. Inform the resident or resident’s representative of the
                reason why the activity is being restricted, and
              </p>
              <p>
                3. Inform the resident or resident’s representative of the
                resident’s right to file a complaint and the procedure for
                filing a complaint.
              </p>
              <p>
                D. For a behavioral health residential facility with a licensed
                capacity of 10 or more residents, if a clinical director
                determines that a resident’s treatment requires the behavioral
                health residential facility to restrict the resident’s ability
                to participate in the activities in subsection (B)(3), the
                clinical director shall comply with the requirements in
                subsections (C)(1) through (3).
              </p>
              <p>E. A resident has the following rights:</p>
              <p>
                1. Not to be discriminated against based on race, national
                origin, religion, gender, sexual orientation, age, disability,
                marital status, or diagnosis;
              </p>
              <p>2. To receive treatment that:</p>
              <p>
                a. Supports and respects the resident’s individuality, choices,
                strengths, and abilities;
              </p>
              <p>
                b. Supports the resident’s personal liberty and only restricts
                the resident’s personal liberty according to a court order, by
                the resident’s or the resident’s representative’s general
                consent, or as permitted in this Chapter; and
              </p>
              <p>
                c. Is provided in the least restrictive environment that meets
                the resident’s treatment needs;
              </p>
              <p>
                3. To receive privacy in treatment and care for personal needs,
                including the right not to be fingerprinted, photographed, or
                recorded without consent, except:
              </p>
              <p>
                a. A resident may be photographed when admitted to a behavioral
                health residential facility for identification and
                administrative purposes
              </p>
              <p>
                b. For a resident receiving treatment according to A.R.S. Title
                36, Chapter 37; or
              </p>
              <p>
                c. For video recordings used for security purposes that are
                maintained only on a temporary basis;
              </p>
              <p>
                4. Not to be prevented or impeded from exercising the resident’s
                civil rights unless the resident has been adjudicated
                incompetent or a court of competent jurisdiction has found that
                the resident is not able to exercise a specific right or
                category of rights;
              </p>
              <p>
                5. To review, upon written request, the resident’s own medical
                record according to A.R.S. §§12-2293, 12-2294, and 12-2294.01;
              </p>
              <p>
                6. To be provided locked storage space for the resident’s
                belongings while the resident receives treatment;
              </p>
              <p>
                7. To have opportunities for social contact and daily social,
                recreational, or rehabilitative activities;
              </p>
              <p>
                8. To be informed of the requirements necessary for the
                resident’s discharge or transfer to a less restrictive physical
                environment;
              </p>
              <p>
                9. To receive a referral to another health care institution if
                the behavioral health residential facility is not authorized or
                not able to provide physical health services or behavioral
                health services needed by the resident;
              </p>
              <p>
                10. To participate or have the resident's representative
                participate in the development of a treatment plan or decisions
                concerning treatment;
              </p>
              <p>
                11. To participate or refuse to participate in research or
                experimental treatment; and
              </p>
              <p>
                12. To receive assistance from a family member, the resident’s
                representative, or other individual in understanding,
                protecting, or exercising the resident’s right
              </p>
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian/Representative Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              PHOTO/VIDEO CONSENT FORM
            </h6>
            <p>
              Consent to appear in photographs and videotapes. Internal use
              only.
            </p>
            <div className="form-field">
              <label htmlFor="AHCCCS">Resident Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of Birth</label>
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
              <label htmlFor="dateOfBirth">Admission Date:</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <p style={{ color: "#000000" }}>
              Agree to give COMPANY NAME the consent to appear in photographs
              and videotapes for the purpose of identification and capturing
              memories from activities. I understand that the photographs and
              videos will only be displayed within the home if will never be
              made or displayed in public. I understand that the photographs and
              videos are for internal purposes only, meaning that staff members
              and residents are the only individuals who will see the
              photographs and videotapes.
            </p>
            <p style={{ color: "#000000" }}>
              ☒I DO give consent to appear in photographs and videotapes.
            </p>
            <p style={{ color: "#000000" }}>
              ☒ I DO NOT give consent to appear in photographs and videotapes.
            </p>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian/Representative Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              ADVANCED DIRECTIVE FORM
            </h6>
            <h6
              style={{
                fontWeight: "400",
                fontSize: "18px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              THIS FORM MUST BE COMPLETED AND PROMINENTLY DISPLAYED IN THE
              MEMBER MEDICAL RECORD
            </h6>
            <div className="form-field">
              <label htmlFor="AHCCCS">Resident Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="">Select Gender</label>
              <div className="genderdiv">
                <div className="genderbox">
                  <input
                    type="radio"
                    id="maleRadio"
                    name="gender"
                    className="custom-radio"
                  />
                  <label htmlFor="maleRadio">Male</label>
                </div>
                <div className="genderbox">
                  <input
                    type="radio"
                    id="femaleRadio"
                    name="gender"
                    className="custom-radio"
                  />
                  <label htmlFor="femaleRadio">Female</label>
                </div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date of Birth</label>
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
              <label htmlFor="dateOfBirth">Date</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <div className="formsheading">
              <h6>Advance Directives Information</h6>
              <p>
                I have been provided information and verbal explanation about
                Advance Directive. Member initials ______Date _____ Resident is
                refusing advance directives. Member initials ______Date ______
              </p>
            </div>
            <div className="formsheading">
              <h6>Advance Directives Development</h6>
            </div>
            <div className="yeschechbox2">
              <span>Resident has developed an Advanced Directive:</span>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <span>
                - If No, stop and let Resident know that assistance in
                developing an Advanced Directive is available.
              </span>
            </div>
            <div className="yeschechbox2">
              <span>
                If the Advanced Directive has been executed (developed), is it
                in the BHRF medical record?
              </span>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <span>
                If the Advanced Directive has been executed, but not filed in
                the BHRF medical record, please check the applicable box below:
              </span>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Resident does not wish to have it filed in his/her medical
                  record.
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  BHRF has asked for a copy, but it has not been provided.
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Other:________________________________________________{" "}
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>To facilitate coordination of care:</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>
                  Has a copy of an executed Advanced Directive or refusal been
                  sent to the Member’s PCP?
                </span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>
                  Has the Advance Directive document ever been acted on?
                </span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>If Yes, have all appropriate parties been notified?</span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>Yes</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  (Specify who)________________________________________________{" "}
                </span>
              </div>
            </div>
            <div className="yeschechbox2">
              <div>
                <span>No</span>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  (Describe why)________________________________________________{" "}
                </span>
              </div>
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Acknowledgement Of Complaint Process
            </h6>
            <p style={{ color: "#000000" }}>
              I,________________________________________________ have been
              explained by facility staff of the facility resident complaint
              process. Resident/Guardian understands that they have the right to
              file complaint with the facility, and with the Arizona Department
              of Residential Licensing when complaint can not be resolved with
              the facility.
            </p>
            <p style={{ color: "#000000" }}>
              Licensing Services Division: 150 N 18th Ave #450, Phoenix, AZ
              85007 Phone: 602-364-3030
            </p>
            <p style={{ color: "#000000" }}>
              https://azdhs.gov/licensing/index.php?
            </p>
            <p style={{ color: "#000000" }}>
              By signing below, resident acknowledge to have been informed of
              the complaint process.
            </p>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian/Representative Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              ORIENTATION TO AGENCY
            </h6>
            <div className="Residentrights">
              <p>
                I, _______________________________________________ received an
                orientation by facility by staff. The orientation included but
                not limited to the following:
              </p>
              <p>
                1. An explanation of the behavioral health services the agency
                provides;
              </p>
              <p>
                2. A description of the expectations for resident behavior and
                program rules;
              </p>
              <p>
                3. A tour of the premises and identification of the evacuation
                path;
              </p>
              <p>4. A schedule of planned activities for residents; and</p>
              <p>5. Introductions to staff members and employees.</p>
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian/Representative Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Resident Lock Box Key Issue and Return
            </h6>
            <div className="form-field">
              <label htmlFor="AHCCCS">Resident’s Name</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Date Key Issued:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Date Key Returned:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="AHCCCS">Address</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="Residentrights">
              <p>
                I, ______________________________________ will be responsible
                for my individual lock box key to ____________ Corporation lock
                box located in my room. I will not give my key to anyone except
                to staff upon request. I understand that if I loose my key I
                will be charged a $_____ re-key fee. I understand that upon my
                discharge from this program I will return my key to the program.
              </p>
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter text"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian/Representative Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Staff Witness</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="dateOfBirth">Date</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value=""
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
            <h6
              style={{
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              INSURANCE INFORMATION
            </h6>
            <div className="Residentrights">
              <p>Primary Insurance:</p>
              <p>
                Name of Policyholder ______________________________ Policy
                holder Date of Birth ___________________
              </p>
              <p>
                Policyholder Address (if different than Resident)
                __________________________________________________
              </p>
              <p>
                City, State, Zip
                ______________________________________________________
              </p>
              <p>
                Phone Number
                ______________________________________________________
              </p>
              <p>
                Policyholder Relationship to Resident
                _________________________________
              </p>
              <p>
                Insurance Company Name _________________________________________
              </p>
              <p>
                Customer Service Phone Number
                ____________________________________
              </p>
              <p>
                Subscriber # _____________________ Group# _______________
                Effective Date _____________________
              </p>
              <p>
                Secondary Insurance Name of Policyholder ____________________
                Policy holder Date of Birth __________
              </p>
              <p>
                Policyholder Address (if different than Resident)
                ___________________________
              </p>
              <p>
                City, State, Zip
                ______________________________________________________
              </p>
              <p>
                Phone Number
                ______________________________________________________
              </p>
              <p>
                Policyholder Relationship to Resident
                _________________________________
              </p>
              <p>
                Insurance Company Name _________________________________________
              </p>
              <p>
                Customer Service Phone Number
                ____________________________________
              </p>
              <p>
                Subscriber # _____________________ Group# _______________
                Effective Date ______________________
              </p>
              <p>
                OBLIGATIONS OF RESPONSIBLE PARTY: Our facility files for
                reimbursement with your insurance company. However, the ultimate
                responsibility for your account is yours. Insurance billing is a
                courtesy, and the facility does not accept the responsibility
                for collection of your claim or of negotiating a settlement on a
                disputed claim. If the Resident is responsible for a balance
                due, you will receive monthly statements.
              </p>
              <p>
                ASSIGNMENT OF BENEFITS: I hereby authorize this facility to
                release the minimum medical
              </p>
              <p>
                information necessary to process my insurance claims. I further
                authorize the above insurance company(s) to make payment
                directly to the provider for the benefits herein and otherwise
                payable to me.
              </p>
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Resident Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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
              <label htmlFor="AHCCCS">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value=""
                placeholder="Enter Name"
                required
              />
            </div>
            <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Guardian/Representative Signature:
            </label>
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
              <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
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

export default ResidentIntakes;
