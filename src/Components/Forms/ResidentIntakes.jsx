import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import formupload from "../../img/formupload.png";
import { user_detail, Resident_form } from "../../Api_Collection/Api";
import AutosizeInput from "react-input-autosize";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import Draftinmodel from "../Modal/Draftinmodel";


const ResidentIntakes = () => {
  const navigate = useNavigate();

  //page state
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    if (page <= 7) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };

  //singin model
  const [draftModel, setDraftModel] = useState(false);
  //  all model
  const [signInModel1, setSigInModel1] = useState(false);
  const [signInModel2, setSigInModel2] = useState(false);
  const [signInModel3, setSigInModel3] = useState(false);
  const [signInModel4, setSigInModel4] = useState(false);
  const [signInModel5, setSigInModel5] = useState(false);
  const [signInModel6, setSigInModel6] = useState(false);
  const [signInModel7, setSigInModel7] = useState(false);

  //state
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
  const [internalResidentDate, setInternalResidentDate] = useState("");
  const [internalName, setInternalName] = useState("");
  const [internalRelationship, setInternalRelationship] = useState("");
  const [internalContect, setInternalContect] = useState("");
  const [internalDisclosureList, setInternalDisclosureList] = useState([]);
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
  //add some patemeter
  const [
    residentRightsResidentSignatureValue,
    setResidentRightsResidentSignatureValue,
  ] = useState("");
  const [
    residentRightsResidentSignatureValueDate,
    setResidentRightsResidentSignatureValueDate,
  ] = useState("");

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
    useState(false);
  const [
    photoVideoConsentConsentWithdrawn,
    setPhotoVideoConsentConsentWithdrawn,
  ] = useState(false);
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
  ] = useState(false);
  const [
    advanceDirectivesFilingStatusAskedForCopyNotProvided,
    setAdvanceDirectivesFilingStatusAskedForCopyNotProvided,
  ] = useState(false);
  const [
    advanceDirectivesFilingStatusOther,
    setAdvanceDirectivesFilingStatusOther,
  ] = useState(false);
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
  const [
    insuranceInformationPrimaryInsurancePolicyholderRelationship,
    setInsuranceInformationPrimaryInsurancePolicyholderRelationship,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceCompany,
    setInsuranceInformationPrimaryInsuranceCompany,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceCustomerServicePhone,
    setInsuranceInformationPrimaryInsuranceCustomerServicePhone,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceSubscriberNumber,
    setInsuranceInformationPrimaryInsuranceSubscriberNumber,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceSubscriberGroup,
    setInsuranceInformationPrimaryInsuranceSubscriberGroup,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceSubscriberEffectiveDate,
    setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderName,
    setInsuranceInformationSecondaryInsurancePolicyholderName,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderDateOfBirth,
    setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderAddress,
    setInsuranceInformationSecondaryInsurancePolicyholderAddress,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderCity,
    setInsuranceInformationSecondaryInsurancePolicyholderCity,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderState,
    setInsuranceInformationSecondaryInsurancePolicyholderState,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderZip,
    setInsuranceInformationSecondaryInsurancePolicyholderZip,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderPhone,
    setInsuranceInformationSecondaryInsurancePolicyholderPhone,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderRelationship,
    setInsuranceInformationSecondaryInsurancePolicyholderRelationship,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceCompany,
    setInsuranceInformationSecondaryInsuranceCompany,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceCustomerServicePhone,
    setInsuranceInformationSecondaryInsuranceCustomerServicePhone,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceSubscriberNumber,
    setInsuranceInformationSecondaryInsuranceSubscriberNumber,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsuranceSubscriberGroup,
    setInsuranceInformationSecondaryInsuranceSubscriberGroup,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceSubscriberEffectiveDate,
    setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentName,
    setObligationsAndAuthorizationResidentName,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentSignature,
    setObligationsAndAuthorizationResidentSignature,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentDate,
    setObligationsAndAuthorizationResidentDate,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeName,
    setObligationsAndAuthorizationGuardianRepresentativeName,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeSignature,
    setObligationsAndAuthorizationGuardianRepresentativeSignature,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeDate,
    setObligationsAndAuthorizationGuardianRepresentativeDate,
  ] = useState("");

  useEffect(() => {
    setUserId(userDetail?._id);
    setUser(userDetail?.fullName);
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

  // handle internal list
  const handleinternalData = () => {
    setInternalDisclosureList((prev) => [
      ...prev,
      { internalContect, internalName, internalRelationship },
    ]);
    setInternalContect("");
    setInternalRelationship("");
    setInternalName("");
  };

  const initializeValues = () => {
    setUser("");
    setUserId("");
    setCompanyName("");
    setResidentName("");
    setResidentSignature("");
    setResidentDate("");
    setGuardianRepresentativeName("");
    setGuardianRepresentativeSignature("");
    setGuardianRepresentativeDate("");
    setStaffName("");
    setStaffSignature("");
    setStaffDate("");
    setInternalName("");
    setInternalRelationship("");
    setInternalContect("");
    setInternalDisclosureList([]);
    setInternalDisclosureListExpire("");
    setInternalDisclosureListResidentName("");
    setInternalDisclosureListResidentSignature("");
    setInternalDisclosureListResidentDate("");
    setInternalDisclosureListGuardianRepresentativeName("");
    setInternalDisclosureListGuardianRepresentativeSignature("");
    setInternalDisclosureListGuardianRepresentativeDate("");
    setInternalDisclosureListStaffName("");
    setInternalDisclosureListStaffSignature("");
    setInternalDisclosureListStaffDate("");
    setResidentRightsResidentSignatureValue("");
    setResidentRightsResidentSignatureValueDate("");
    setResidentRightsResidentName("");
    setResidentRightsResidentSignature("");
    setResidentRightsResidentDate("");
    setPhotoVideoConsentResidentName("");
    setPhotoVideoConsentDateOfBirth("");
    setPhotoVideoConsentAdmissionDate("");
    setPhotoVideoConsentConsentGiven("");
    setPhotoVideoConsentConsentWithdrawn("");
    setPhotoVideoConsentResidentSignature("");
    setPhotoVideoConsentResidentDate("");
    setPhotoVideoConsentGuardianRepresentativeName("");
    setPhotoVideoConsentGuardianRepresentativeSignature("");
    setPhotoVideoConsentGuardianRepresentativeDate("");
    setAdvanceDirectivesResidentName("");
    setAdvanceDirectivesResidentGender("");
    setAdvanceDirectivesResidentDateOfBirth("");
    setAdvanceDirectivesResidentAddress("");
    setAdvanceDirectivesResidentDate("");
    setAdvanceDirectivesProvidedInfoInitials("");
    setAdvanceDirectivesProvidedInfoDate("");
    setAdvanceDirectivesProvidedInfoRefusingInitials("");
    setAdvanceDirectivesProvidedInfoRefusingDate(undefined);
    setAdvanceDirectivesDeveloped(undefined);
    setAdvanceDirectivesDevelopedComment("");
    setAdvanceDirectivesExecutedInRecord("");
    setAdvanceDirectivesExecutedInRecordComment("");
    setAdvanceDirectivesFilingStatusWishNotFiled(false);
    setAdvanceDirectivesFilingStatusAskedForCopyNotProvided(false);
    setAdvanceDirectivesFilingStatusOther(false);
    setAdvanceDirectivesCoordinationOfCareCopySentToPCP("");
    setAdvanceDirectivesCoordinationOfCareActedOn("");
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified("");
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment("");
    setComplaintProcessAcknowledgementCompany("");
    setComplaintProcessAcknowledgementResidentName("");
    setComplaintProcessAcknowledgementResidentSignature("");
    setComplaintProcessAcknowledgementResidentDate("");
    setComplaintProcessAcknowledgementGuardianRepresentativeName("");
    setComplaintProcessAcknowledgementGuardianRepresentativeSignature("");
    setComplaintProcessAcknowledgementGuardianRepresentativeDate("");
    setOrientationToAgencyCompany("");
    setOrientationToAgencyResidentName("");
    setOrientationToAgencyResidentSignature("");
    setOrientationToAgencyResidentDate("");
    setOrientationToAgencyGuardianRepresentativeName("");
    setOrientationToAgencyGuardianRepresentativeSignature("");
    setOrientationToAgencyGuardianRepresentativeDate("");
    setPromotionTalkStrategicApproach("");
    setLockBoxKeyIssueReturnDateKeyIssued("");
    setLockBoxKeyIssueReturnDateKeyReturned("");
    setLockBoxKeyIssueReturnAddress("");
    setLockBoxKeyIssueReturnResponsibleFor("");
    setLockBoxKeyIssueReturnResponsibleForCorporation("");
    setLockBoxKeyIssueReturnCharged("");
    setLockBoxKeyIssueReturnResidentName("");
    setLockBoxKeyIssueReturnResidentSignature("");
    setLockBoxKeyIssueReturnResidentDate("");
    setLockBoxKeyIssueReturnGuardianRepresentativeName("");
    setLockBoxKeyIssueReturnGuardianRepresentativeSignature("");
    setLockBoxKeyIssueReturnGuardianRepresentativeDate("");
    setLockBoxKeyIssueReturnStaffName("");
    setLockBoxKeyIssueReturnStaffSignature("");
    setLockBoxKeyIssueReturnStaffDate("");
    setInsuranceInformationPrimaryInsurancePolicyholderName("");
    setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth("");
    setInsuranceInformationPrimaryInsurancePolicyholderAddress("");
    setInsuranceInformationPrimaryInsurancePolicyholderCity("");
    setInsuranceInformationPrimaryInsurancePolicyholderState("");
    setInsuranceInformationPrimaryInsurancePolicyholderZip("");
    setInsuranceInformationPrimaryInsurancePolicyholderPhone("");
    setInsuranceInformationPrimaryInsurancePolicyholderRelationship("");
    setInsuranceInformationPrimaryInsuranceCompany("");
    setInsuranceInformationPrimaryInsuranceCustomerServicePhone("");
    setInsuranceInformationPrimaryInsuranceSubscriberNumber("");
    setInsuranceInformationPrimaryInsuranceSubscriberGroup("");
    setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate("");
    setInsuranceInformationSecondaryInsurancePolicyholderName("");
    setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth("");
    setInsuranceInformationSecondaryInsurancePolicyholderAddress("");
    setInsuranceInformationSecondaryInsurancePolicyholderCity("");
    setInsuranceInformationSecondaryInsurancePolicyholderState("");
    setInsuranceInformationSecondaryInsurancePolicyholderZip("");
    setInsuranceInformationSecondaryInsurancePolicyholderPhone("");
    setInsuranceInformationSecondaryInsurancePolicyholderRelationship("");
    setInsuranceInformationSecondaryInsuranceCompany("");
    setInsuranceInformationSecondaryInsuranceCustomerServicePhone("");
    setInsuranceInformationSecondaryInsuranceSubscriberNumber("");
    setInsuranceInformationSecondaryInsuranceSubscriberGroup("");
    setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate("");
    setObligationsAndAuthorizationResidentName("");
    setObligationsAndAuthorizationResidentSignature("");
    setObligationsAndAuthorizationResidentDate("");
    setObligationsAndAuthorizationGuardianRepresentativeName("");
    setObligationsAndAuthorizationGuardianRepresentativeSignature("");
    setObligationsAndAuthorizationGuardianRepresentativeDate("");
  };

  const data = {
    patientId: userId,
    companyName,
    residentName,
    residentSignature,
    residentDate,
    guardianRepresentativeName,
    guardianRepresentativeSignature,
    guardianRepresentativeDate,
    staffName,
    staffSignature,
    staffDate,
    internalDisclosureList,
    internalDisclosureListExpire,
    internalDisclosureListResidentName,
    internalDisclosureListResidentSignature,
    internalDisclosureListResidentDate,
    internalDisclosureListGuardianRepresentativeName,
    internalDisclosureListGuardianRepresentativeSignature,
    internalDisclosureListGuardianRepresentativeDate,
    internalDisclosureListStaffName,
    internalDisclosureListStaffSignature,
    internalDisclosureListStaffDate,
    residentRightsResidentSignatureValue,
    residentRightsResidentSignatureValueDate,
    residentRightsResidentName,
    residentRightsResidentSignature,
    residentRightsResidentDate,
    photoVideoConsentResidentName,
    photoVideoConsentDateOfBirth,
    photoVideoConsentAdmissionDate,
    photoVideoConsentConsentGiven,
    photoVideoConsentConsentWithdrawn,
    photoVideoConsentResidentSignature,
    photoVideoConsentResidentDate,
    photoVideoConsentGuardianRepresentativeName,
    photoVideoConsentGuardianRepresentativeSignature,
    photoVideoConsentGuardianRepresentativeDate,
    advanceDirectivesResidentName,
    advanceDirectivesResidentGender,
    advanceDirectivesResidentDateOfBirth,
    advanceDirectivesResidentAddress,
    advanceDirectivesResidentDate,
    advanceDirectivesProvidedInfoInitials,
    advanceDirectivesProvidedInfoDate,
    advanceDirectivesProvidedInfoRefusingInitials,
    advanceDirectivesProvidedInfoRefusingDate,
    advanceDirectivesDeveloped,
    advanceDirectivesDevelopedComment,
    advanceDirectivesExecutedInRecord,
    advanceDirectivesExecutedInRecordComment,
    advanceDirectivesFilingStatusWishNotFiled,
    advanceDirectivesFilingStatusAskedForCopyNotProvided,
    advanceDirectivesFilingStatusOther,
    advanceDirectivesCoordinationOfCareCopySentToPCP,
    advanceDirectivesCoordinationOfCareActedOn,
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotified,
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment,
    complaintProcessAcknowledgementCompany,
    complaintProcessAcknowledgementResidentName,
    complaintProcessAcknowledgementResidentSignature,
    complaintProcessAcknowledgementResidentDate,
    complaintProcessAcknowledgementGuardianRepresentativeName,
    complaintProcessAcknowledgementGuardianRepresentativeSignature,
    complaintProcessAcknowledgementGuardianRepresentativeDate,
    orientationToAgencyCompany,
    orientationToAgencyResidentName,
    orientationToAgencyResidentSignature,
    orientationToAgencyResidentDate,
    orientationToAgencyGuardianRepresentativeName,
    orientationToAgencyGuardianRepresentativeSignature,
    orientationToAgencyGuardianRepresentativeDate,
    promotionTalkStrategicApproach,
    lockBoxKeyIssueReturnDateKeyIssued,
    lockBoxKeyIssueReturnDateKeyReturned,
    lockBoxKeyIssueReturnAddress,
    lockBoxKeyIssueReturnResponsibleFor,
    lockBoxKeyIssueReturnResponsibleForCorporation,
    lockBoxKeyIssueReturnCharged,
    lockBoxKeyIssueReturnResidentName,
    lockBoxKeyIssueReturnResidentSignature,
    lockBoxKeyIssueReturnResidentDate,
    lockBoxKeyIssueReturnGuardianRepresentativeName,
    lockBoxKeyIssueReturnGuardianRepresentativeSignature,
    lockBoxKeyIssueReturnGuardianRepresentativeDate,
    lockBoxKeyIssueReturnStaffName,
    lockBoxKeyIssueReturnStaffSignature,
    lockBoxKeyIssueReturnStaffDate,
    insuranceInformationPrimaryInsurancePolicyholderName,
    insuranceInformationPrimaryInsurancePolicyholderDateOfBirth,
    insuranceInformationPrimaryInsurancePolicyholderAddress,
    insuranceInformationPrimaryInsurancePolicyholderCity,
    insuranceInformationPrimaryInsurancePolicyholderState,
    insuranceInformationPrimaryInsurancePolicyholderZip,
    insuranceInformationPrimaryInsurancePolicyholderPhone,
    insuranceInformationPrimaryInsurancePolicyholderRelationship,
    insuranceInformationPrimaryInsuranceCompany,
    insuranceInformationPrimaryInsuranceCustomerServicePhone,
    insuranceInformationPrimaryInsuranceSubscriberNumber,
    insuranceInformationPrimaryInsuranceSubscriberGroup,
    insuranceInformationPrimaryInsuranceSubscriberEffectiveDate,
    insuranceInformationSecondaryInsurancePolicyholderName,
    insuranceInformationSecondaryInsurancePolicyholderDateOfBirth,
    insuranceInformationSecondaryInsurancePolicyholderAddress,
    insuranceInformationSecondaryInsurancePolicyholderCity,
    insuranceInformationSecondaryInsurancePolicyholderState,
    insuranceInformationSecondaryInsurancePolicyholderZip,
    insuranceInformationSecondaryInsurancePolicyholderPhone,
    insuranceInformationSecondaryInsurancePolicyholderRelationship,
    insuranceInformationSecondaryInsuranceCompany,
    insuranceInformationSecondaryInsuranceCustomerServicePhone,
    insuranceInformationSecondaryInsuranceSubscriberNumber,
    insuranceInformationSecondaryInsuranceSubscriberGroup,
    insuranceInformationSecondaryInsuranceSubscriberEffectiveDate,
    obligationsAndAuthorizationResidentName,
    obligationsAndAuthorizationResidentSignature,
    obligationsAndAuthorizationResidentDate,
    obligationsAndAuthorizationGuardianRepresentativeName,
    obligationsAndAuthorizationGuardianRepresentativeSignature,
    obligationsAndAuthorizationGuardianRepresentativeDate,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Resident_form(data);
    initializeValues();
    navigate("/intake");
  };

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

      {/* ======================================================== */}
      <div className="form-container">
        <div className="formheading1">
          <div className="formsheading2">
            <h1>RESIDENT INTAKES</h1>
          </div>
        </div>

        <form onSubmit={submitHandler}>
          {page === 1 && (
            <>
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
                  Please read the following Terms & Conditions properly &
                  provide all the necessary details
                </p>
                <h6>
                  I voluntarily apply for evaluation/behavioral health treatment
                  at
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      placeholder="COMPANY NAME"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </span>{" "}
                  and understand, consent and agree as follows (to be executed
                  by legally authorized person if the Resident is incapable of
                  giving informed consent):
                </h6>
                <ul>
                  <li>
                    I agree to participate in my treatment to the best of my
                    ability and will let my provider know if situations occur
                    that prevent me from participating in treatment.
                  </li>
                  <li>
                    I understand that this consent will remain valid so long as
                    I am admitted in this facility, or until I withdraw consent.
                  </li>
                  <li>
                    Information developed as part of evaluation/treatment and
                    your psychiatric record is confidential but may be released
                    to those parties as required by law such as (information may
                    be released without my consent) in cases of medical
                    emergency, abuse or neglect, court order, insurance billing
                    claims requirements, audit and program evaluation and where
                    otherwise legally required. Additionally, I understand that
                    by signing this consent I am giving permission for ADHS/DBHS
                    to access my information and records maintained by the
                    T/RBHA,{" "}
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        placeholder="COMPANY NAME"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </span>
                    and/or it’s subcontracted providers concerning the provision
                    of covered services.
                  </li>
                  <li>
                    I consent to the use and disclosure of my protected health
                    information (PHI) by
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        placeholder="COMPANY NAME"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </span>
                    , it’s staff members and it’s contractors / interns for the
                    purpose of treatment, payment and health care operations.
                    This is a joint consent form between
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        placeholder="COMPANY NAME"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </span>{" "}
                    and it’s staff members. I understand the following: My
                    signature on the consent is required in order for me to
                    receive care from{" "}
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        placeholder="COMPANY NAME"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </span>
                    , I have the right to revoke this consent, in writing, at
                    any time, except to the extent that
                    <span>
                      <AutosizeInput
                        type="text"
                        inputStyle={{ border: "none", outline: "none" }}
                        placeholder="COMPANY NAME"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </span>{" "}
                    has taken action in reliance upon this consent.
                  </li>
                  <li>
                    I understand that all the information gathered during my
                    treatment is confidential.
                  </li>
                  <li>
                    However, confidential information may be disclosed without
                    my consent in accordance with state and federal law.
                  </li>
                  <li>
                    I understand that this Consent to treatment is voluntary,
                    and I may decline at any time.
                  </li>
                </ul>
              </div>
              <div className="yeschechbox2">
                {/* key is require to add */}
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">I Agree to the Terms & Conditions</label>
                </div>
              </div>

              <h2
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#0C5C75",
                }}
              >
                Resident’s Details
              </h2>
              {/* <label
              htmlFor=""
              className="label-review-resitent"
            >
              Company Name
            </label> */}

              {/* <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            /> */}
              {/* <label
              htmlFor=""
              className="label-review-resitent"
            >
              Resident residentName
            </label> */}

              {/* <input
              type="text"
              value={residentName}
              onChange={(e) => setResidentName(e.target.value)}
            /> */}
              <label htmlFor="" className="label-review-resitent">
                Resident Signature
              </label>

              <div class="file-upload-box"> 
                <div className="file-upload-box-child">
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" type="button" onClick={() => setSigInModel1(true)}>
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {
                  residentSignature  && (
                    <p className="signature_name_print">Digitally Sign by {residentSignature}</p>
                  )
                }
              </div>
            </div>

            {
              signInModel1 && (<SingInUpdateModel 
                onClose={()=>setSigInModel1(false)}
                singin={residentSignature}
                setSingIn={setResidentSignature}
                
                />)
            }
              {/* <div class="file-upload-box">
                <div style={{ display: "block" }}>
                  <button
                    className="upload-button1"
                    type="button"
                    onClick={() => setDraftModel(true)}
                  >
                    SAVED AS DRAFT
                  </button>
                  <button
                    className="upload-button"
                    type="button"
                    onClick={() => setSigInModel1(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
              </div> */}

              {/* {signInModel1 && (
                <SingInUpdateModel
                  onClose={() => setSigInModel1(false)}
                  singin={residentSignature}
                  setSingIn={setResidentSignature}
                />
              )} */}

              {/* <input
              type="text"
              value={residentSignature}
              onChange={(e) => setResidentSignature(e.target.value)}
            /> */}
              <div className="form-field">
                {/* <label htmlFor="dateOfBirth" className="label-review-resitent">
                  Date:
                </label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value={residentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) => setResidentDate(e.target.value)}
                /> */}
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
                <label
                  htmlFor="admissionDate"
                  className="label-review-resitent"
                >
                  Guardian/Representative Full Name
                </label>
                <input
                  type="text"
                  id="admissionDate"
                  value={guardianRepresentativeName}
                  placeholder="Enter full name"
                  required
                  onChange={(e) =>
                    setGuardianRepresentativeName(e.target.value)
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian / Representative Signature
              </label>
              <div class="file-upload-box"> 
                <div className="file-upload-box-child">
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" type="button" onClick={() => setSigInModel2(true)}>
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {
                  guardianRepresentativeSignature  && (
                    <p className="signature_name_print">Digitally Sign by {guardianRepresentativeSignature}</p>
                  )
                }
              </div>
            </div>

            {
              signInModel2 && (<SingInUpdateModel 
                onClose={()=>setSigInModel2(false)}
                singin={guardianRepresentativeSignature}
                setSingIn={setGuardianRepresentativeSignature}
                
                />)
            }
         

              {/* <input
              type="text"
              value={guardianRepresentativeSignature}
              onChange={(e) =>
                setGuardianRepresentativeSignature(e.target.value)
              }
            /> */}

              {/* <div className="form-field">
                <label htmlFor="dateOfBirth" className="label-review-resitent">
                  Date:{" "}
                </label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value={guardianRepresentativeDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setGuardianRepresentativeDate(e.target.value)
                  }
                />
              </div> */}
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
                <label className="label-review-resitent">Staff Full Name</label>
                <input
                  type="text"
                  value={staffName}
                  placeholder="Enter full name"
                  required
                  onChange={(e) => setStaffName(e.target.value)}
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Staff Signature
              </label>
              <div class="file-upload-box">
                <div style={{ display: "block" }}>
                  <button
                    className="upload-button1"
                    type="button"
                    onClick={() => setDraftModel(true)}
                  >
                    SAVED AS DRAFT
                  </button>
                  <button
                    className="upload-button"
                    type="button"
                    onClick={() => setSigInModel3(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
              </div>

              {signInModel3 && (
                <SingInUpdateModel
                  onClose={() => setSigInModel3(false)}
                  singin={staffSignature}
                  setSingIn={setStaffSignature}
                />
              )}
              {/* <input
              type="text"
              value={staffSignature}
              onChange={(e) => setStaffSignature(e.target.value)}
            /> */}
              <div className="form-field">
                <label className="label-review-resitent">Date:</label>
                <input
                  type="date"
                  value={staffDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) => setStaffDate(e.target.value)}
                />
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* second session2 */}
          {page === 2 && (
            <>
              <h6
                style={{
                  fontWeight: "500",
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "1.5rem",
                }}
              >
                Internal Resident Disclosure List
              </h6>
              <p>
                I authorize and agree that
                <span>
                  <AutosizeInput
                    inputStyle={{ border: "none", outline: "none" }}
                    placeholder="COMPANY NAME"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </span>{" "}
                may verbally disclose my protected health information (PHI) to
                the following family members, individuals and / or significant
                others in my life each of whom is directly involved in my care
                and are concerned about my well being specifically for the
                purpose of coordinating care issues either in person or on the
                telephone.
              </p>
              <p>
                I authorize and agree that{" "}
                <span>
                  <AutosizeInput
                    type="text"
                    inputStyle={{ border: "none", outline: "none" }}
                    placeholder="COMPANY NAME"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </span>{" "}
                may acknowledge and accept telephone calls from the following
                family members, individuals and / or significant others in my
                life each of whom is directly involved in my care and are
                concerned about my well being who may want to talk to me while
                at{" "}
                <span>
                  <AutosizeInput
                    inputStyle={{ border: "none", outline: "none" }}
                    placeholder="COMPANY NAME"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </span>
              </p>

              <div className="safetyplandiv">
                <div className="form-field">
                  <label htmlFor="AHCCCS">Name of Person</label>
                  <input
                    type="text"
                    id="AHCCCS"
                    value={internalName}
                    placeholder="Enter text"
                    onChange={(e) => setInternalName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="AHCCCS">Relationship</label>
                  <input
                    type="text"
                    id="AHCCCS"
                    value={internalRelationship}
                    placeholder="Enter text"
                    onChange={(e) => setInternalRelationship(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="AHCCCS">Contact</label>
                  <input
                    type="text"
                    id="AHCCCS"
                    value={internalContect}
                    placeholder="Enter text"
                    onChange={(e) => setInternalContect(e.target.value)}
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="safetybutton"
                    onClick={handleinternalData}
                  >
                    SAVE
                  </button>
                </div>
              </div>
              <div className="needs-interventions-container">
                <div className="needs-interventions-column3">
                  {internalDisclosureList.length > 0 && (
                    <table>
                      <thead>
                        <th>Name of Person</th>
                        <th>Relationship</th>
                        <th>Contact</th>
                      </thead>
                      <tbody>
                        {internalDisclosureList?.map((i, index) => (
                          <tr>
                            <td>{`${index + 1}. ${i.internalName}`} </td>
                            <td>
                              {`${index + 1}. ${i.internalRelationship}`}{" "}
                            </td>
                            <td>{`${index + 1}. ${i.internalContect}`} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              <p style={{ marginTop: "1.5rem" }}>
                I acknowledge and agree that{" "}
                <span>
                  <AutosizeInput
                    inputStyle={{ border: "none", outline: "none" }}
                    placeholder="COMPANY NAME"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </span>{" "}
                may disclose my protected health information to the person(s)
                set forth in this form. I understand that I can revoke this
                authorization in writing, except to the extent that action has
                already been taken, at any time and it will expire on{" "}
                <span>
                  <AutosizeInput
                    inputStyle={{
                      border: "none",
                      outline: "none",
                      width: "auto",
                    }}
                    type="date"
                    placeholder="________"
                    value={internalDisclosureListExpire}
                    onChange={(e) =>
                      setInternalDisclosureListExpire(e.target.value)
                    }
                  />
                </span>{" "}
                or one year from the date of my signature.{" "}
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
                {/* <label htmlFor="" className="label-review-resitent">Resident Name</label>
              <input
                type="text"
                vlaue={internalDisclosureListResidentName}
                onChange={(e) =>
                  setInternalDisclosureListResidentName(e.target.value)
                }
              /> */}
                {/* <label htmlFor="dateOfBirth" className="label-review-resitent">Expiry Date</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="date"
                id="dateOfBirth"
                value={internalDisclosureListResidentDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) =>
                  setInternalDisclosureListResidentDate(e.target.value)
                }
              /> */}
              </div>
              <label htmlFor="" className="label-review-resitent">
                Resident Signature
              </label>
              <input
                type="text"
                placeholder="Resident signature"
                value={internalDisclosureListResidentSignature}
                onChange={(e) =>
                  setInternalDisclosureListResidentSignature(e.target.value)
                }
              />
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
                <label>Date </label>
                <input
                  type="date"
                  value={internalDisclosureListResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setInternalDisclosureListResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Guardian/Representative Full Name
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={internalDisclosureListGuardianRepresentativeName}
                  placeholder="Enter text"
                  required
                  onChange={(e) =>
                    setInternalDisclosureListGuardianRepresentativeName(
                      e.target.value
                    )
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian / Representative Signature
              </label>
              <input
                type="text"
                value={internalDisclosureListGuardianRepresentativeSignature}
                placeholder="Signature"
                onChange={(e) =>
                  setInternalDisclosureListGuardianRepresentativeSignature(
                    e.target.value
                  )
                }
              />
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
                <label className="label-review-resitent">Date </label>
                <input
                  type="date"
                  value={internalDisclosureListGuardianRepresentativeDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setInternalDisclosureListGuardianRepresentativeDate(
                      e.target.value
                    )
                  }
                />
              </div>
              {/* <label
              htmlFor=""
              className="label-review-resitent"
            >
              Staff Name
            </label>
            <input
              type="text"
              value={internalDisclosureListStaffName}
              onChange={(e) =>
                setInternalDisclosureListStaffName(e.target.value)
              }
            /> */}
              <label htmlFor="" className="label-review-resitent">
                Staff Signature
              </label>
              <input
                type="text"
                value={internalDisclosureListStaffSignature}
                placeholder="Staff signature"
                onChange={(e) =>
                  setInternalDisclosureListStaffSignature(e.target.value)
                }
              />
              <div className="form-field">
                <label className="label-review-resitent">
                  Date of Signature Obtained
                </label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={internalDisclosureListStaffDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setInternalDisclosureListStaffDate(e.target.value)
                  }
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
                  1. The requirements in subsection (B) and the resident rights
                  in subsection (E) are conspicuously posted on the premises;
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
                  for reasons unrelated to the resident’s treatment needs,
                  except as established in a fee agreement signed by the
                  resident or the resident 's representative; or
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
                  a. Associate with individuals of the resident’s choice,
                  receive visitors, and make telephone calls during the hours
                  established by the behavioral health residential facility;
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
                  b. May refuse or withdraw consent for treatment before
                  treatment is initiated, unless the treatment is ordered by a
                  ourt according to A.R.S. Title 36, Chapter;
                </p>
                <p>
                  5 or A.R.S. 8-341.01; is necessary to save the resident’s life
                  or physical health; or is provided according to A.R.S. §
                  36-512;
                </p>
                <p>
                  c. Except in an emergency, is informed of proposed treatment
                  alternatives, associated risks, and possible complications;
                </p>
                <p>d. Is informed of the following:</p>
                <p>
                  i. The behavioral health residential facility’s policy on
                  health care directives, and
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
                  professional determines that a resident’s treatment requires
                  the behavioral health residential facility to restrict the
                  resident’s ability to participate in the activities in
                  subsection (B)(3), the behavioral health professional shall:
                </p>
                <p>
                  1. Document a specific treatment purpose in the resident’s
                  medical record that justifies restricting the resident from
                  the activity,
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
                  D. For a behavioral health residential facility with a
                  licensed capacity of 10 or more residents, if a clinical
                  director determines that a resident’s treatment requires the
                  behavioral health residential facility to restrict the
                  resident’s ability to participate in the activities in
                  subsection (B)(3), the clinical director shall comply with the
                  requirements in subsections (C)(1) through (3).
                </p>
                <p>E. A resident has the following rights:</p>
                <p>
                  1. Not to be discriminated against based on race, national
                  origin, religion, gender, sexual orientation, age, disability,
                  marital status, or diagnosis;
                </p>
                <p>2. To receive treatment that:</p>
                <p>
                  a. Supports and respects the resident’s individuality,
                  choices, strengths, and abilities;
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
                  3. To receive privacy in treatment and care for personal
                  needs, including the right not to be fingerprinted,
                  photographed, or recorded without consent, except:
                </p>
                <p>
                  a. A resident may be photographed when admitted to a
                  behavioral health residential facility for identification and
                  administrative purposes
                </p>
                <p>
                  b. For a resident receiving treatment according to A.R.S.
                  Title 36, Chapter 37; or
                </p>
                <p>
                  c. For video recordings used for security purposes that are
                  maintained only on a temporary basis;
                </p>
                <p>
                  4. Not to be prevented or impeded from exercising the
                  resident’s civil rights unless the resident has been
                  adjudicated incompetent or a court of competent jurisdiction
                  has found that the resident is not able to exercise a specific
                  right or category of rights;
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
                  resident’s discharge or transfer to a less restrictive
                  physical environment;
                </p>
                <p>
                  9. To receive a referral to another health care institution if
                  the behavioral health residential facility is not authorized
                  or not able to provide physical health services or behavioral
                  health services needed by the resident;
                </p>
                <p>
                  10. To participate or have the resident's representative
                  participate in the development of a treatment plan or
                  decisions concerning treatment;
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
              <label htmlFor="" className="label-review-resitent">
                Resident Signature
              </label>
              <input
                type="text"
                value={residentRightsResidentSignatureValue}
                placeholder="Signature"
                onChange={(e) =>
                  setResidentRightsResidentSignatureValue(e.target.value)
                }
              />
              <div className="form-field">
                <label className="label-review-resitent">Date </label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={residentRightsResidentSignatureValueDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setResidentRightsResidentSignatureValueDate(e.target.value)
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Name
              </label>
              <input
                type="text"
                value={residentRightsResidentName}
                placeholder="Name"
                onChange={(e) => setResidentRightsResidentName(e.target.value)}
              />
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Signature
              </label>
              <input
                type="text"
                value={residentRightsResidentSignature}
                placeholder="Signature"
                onChange={(e) =>
                  setResidentRightsResidentSignature(e.target.value)
                }
              />
              <div className="form-field">
                <label className="label-review-resitent">Date</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={residentRightsResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setResidentRightsResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* section 3 */}
          {page === 3 && (
            <>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "1.5rem",
                }}
              >
                PHOTO/VIDEO CONSENT FORM
              </h6>
              <p>
                Consent to appear in photographs and videotapes. Internal use
                only.
              </p>
              <div className="form-field">
                <label className="label-review-resitent">Resident Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={photoVideoConsentResidentName}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setPhotoVideoConsentResidentName(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Date of Birth</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={photoVideoConsentDateOfBirth}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setPhotoVideoConsentDateOfBirth(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Admission Date:</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={photoVideoConsentAdmissionDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setPhotoVideoConsentAdmissionDate(e.target.value)
                  }
                />
              </div>
              <p style={{ color: "#000000" }}>
                Agree to give{" "}
                <span>
                  <AutosizeInput
                    inputStyle={{ border: "none", outline: "none" }}
                    placeholder="COMPANY NAME"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </span>{" "}
                the consent to appear in photographs and videotapes for the
                purpose of identification and capturing memories from
                activities. I understand that the photographs and videos will
                only be displayed within the home if will never be made or
                displayed in public. I understand that the photographs and
                videos are for internal purposes only, meaning that staff
                members and residents are the only individuals who will see the
                photographs and videotapes.
              </p>
              <div className="yeschechbox2">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="checkbox"
                    id="exampleCheckbox"
                    checked={photoVideoConsentConsentGiven}
                    onChange={() =>
                      setPhotoVideoConsentConsentGiven(
                        !photoVideoConsentConsentGiven
                      )
                    }
                  />
                  <span>
                    {" "}
                    I DO give consent to appear in photographs and videotapes.
                  </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="checkbox"
                    id="exampleCheckbox"
                    checked={photoVideoConsentConsentWithdrawn}
                    onChange={() =>
                      setPhotoVideoConsentConsentWithdrawn(
                        !photoVideoConsentConsentWithdrawn
                      )
                    }
                  />
                  <span>
                    {" "}
                    I DO NOT give consent to appear in photographs and
                    videotapes.
                  </span>
                </div>
              </div>

              {/* <input
              type="text"
              placeholder="Consent Withdrawn"
              value={photoVideoConsentConsentWithdrawn}
              onChange={(e) =>
                setPhotoVideoConsentConsentWithdrawn(e.target.value)
              }
            /> */}

              <label htmlFor="" className="label-review-resitent">
                Resident Signature
              </label>
              <input
                type="text"
                value={photoVideoConsentResidentSignature}
                placeholder="Signature"
                onChange={(e) =>
                  setPhotoVideoConsentResidentSignature(e.target.value)
                }
              />
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
                <label className="label-review-resitent">
                  Date of Signature Obtained
                </label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={photoVideoConsentResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setPhotoVideoConsentResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Guardian/Representative Name:
                </label>
                <input
                  type="text"
                  value={photoVideoConsentGuardianRepresentativeName}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setPhotoVideoConsentGuardianRepresentativeName(
                      e.target.value
                    )
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Signature Date
              </label>
              <input
                type="text"
                placeholder="Representative Signature"
                value={photoVideoConsentGuardianRepresentativeSignature}
                onChange={(e) =>
                  setPhotoVideoConsentGuardianRepresentativeSignature(
                    e.target.value
                  )
                }
              />
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
                <label className="label-review-resitent">
                  Date of Signature Obtained
                </label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={photoVideoConsentGuardianRepresentativeDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setPhotoVideoConsentGuardianRepresentativeDate(
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* section4 */}
          {page === 4 && (
            <>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "1.5rem",
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
                <label className="label-review-resitent">Resident Name:</label>
                <input
                  type="text"
                  value={advanceDirectivesResidentName}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setAdvanceDirectivesResidentName(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Select Gender</label>
                <div className="genderdiv">
                  <div className="genderbox">
                    <input
                      type="radio"
                      id="maleRadio"
                      name="gender"
                      value="male"
                      checked={advanceDirectivesResidentGender === "male"}
                      onChange={() =>
                        setAdvanceDirectivesResidentGender("male")
                      }
                      className="custom-radio"
                    />
                    <label htmlFor="maleRadio">Male</label>
                  </div>
                  <div className="genderbox">
                    <input
                      type="radio"
                      id="femaleRadio"
                      name="gender"
                      value="female"
                      checked={advanceDirectivesResidentGender === "female"}
                      onChange={() =>
                        setAdvanceDirectivesResidentGender("female")
                      }
                      className="custom-radio"
                    />
                    <label htmlFor="femaleRadio">Female</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Date of Birth</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={advanceDirectivesResidentDateOfBirth}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setAdvanceDirectivesResidentDateOfBirth(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Address</label>
                <input
                  type="text"
                  value={advanceDirectivesResidentAddress}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setAdvanceDirectivesResidentAddress(e.target.value)
                  }
                />
              </div>

              {/* <div className="form-field">
              <label htmlFor="dateOfadress">Address</label>
              <input
                style={{ color: "#1A9FB2" }}
                type="text"
                id="dateOfadress"
                value={advanceDirectivesResidentAddress}
                placeholder="Address"
                required
                onChange={(e) =>
                  setAdvanceDirectivesResidentAddress(e.target.value)
                }
              />
            </div> */}
              <div className="form-field">
                <label className="label-review-resitent">Date</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={advanceDirectivesResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setAdvanceDirectivesResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="formsheading">
                <h6>Advance Directives Information</h6>
                <p>
                  I have been provided information and verbal explanation about
                  Advance Directive. Member initials{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="date"
                      value={advanceDirectivesProvidedInfoInitials}
                      onChange={(e) =>
                        setAdvanceDirectivesProvidedInfoInitials(e.target.value)
                      }
                    />
                  </span>
                  Date{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="date"
                      value={advanceDirectivesProvidedInfoDate}
                      onChange={(e) =>
                        setAdvanceDirectivesProvidedInfoDate(e.target.value)
                      }
                    />
                  </span>
                  <p>
                    Resident is refusing advance directives. Member initials
                    <span>
                      <AutosizeInput
                        inputStyle={{
                          border: "none",
                          outline: "none",
                          width: "auto",
                        }}
                        type="date"
                        value={advanceDirectivesProvidedInfoRefusingInitials}
                        onChange={(e) =>
                          setAdvanceDirectivesProvidedInfoRefusingInitials(
                            e.target.value
                          )
                        }
                      />
                    </span>
                    Date{" "}
                    <span>
                      <AutosizeInput
                        inputStyle={{
                          border: "none",
                          outline: "none",
                          width: "auto",
                        }}
                        type="date"
                        value={advanceDirectivesProvidedInfoRefusingDate}
                        onChange={(e) =>
                          setAdvanceDirectivesProvidedInfoRefusingDate(
                            e.target.value
                          )
                        }
                      />
                    </span>
                  </p>
                </p>
              </div>
              <div className="formsheading">
                <h6>Advance Directives Development</h6>
              </div>
              <div className="yeschechbox2">
                <span>Resident has developed an Advanced Directive:</span>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="yesRadio"
                    name="option"
                    value="yes"
                    checked={advanceDirectivesDeveloped === "yes"}
                    onChange={() => setAdvanceDirectivesDeveloped("yes")}
                  />
                  <span htmlFor="yesRadio">Yes</span>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="noRadio"
                    name="option"
                    value="no"
                    checked={advanceDirectivesDeveloped === "no"}
                    onChange={() => setAdvanceDirectivesDeveloped("no")}
                  />
                  <span htmlFor="noRadio">No</span>
                </div>
              </div>
              {advanceDirectivesDeveloped === "no" && (
                <input
                  style={{ marginBottom: "1rem" }}
                  type="text"
                  placeholder="Please enter"
                  value={advanceDirectivesDevelopedComment}
                  onChange={(e) =>
                    setAdvanceDirectivesDevelopedComment(e.target.value)
                  }
                />
              )}
              <div className="yeschechbox2">
                <span>
                  If No, stop and let Resident know that assistance in
                  developing an Advanced Directive is available.
                </span>
              </div>
              <div className="yeschechbox2">
                <span>
                  If the Advanced Directive has been executed (developed), is it
                  in the BHRF medical record?
                </span>
                <div>
                  <input
                    type="checkbox"
                    id="yesCheckbox"
                    checked={advanceDirectivesExecutedInRecord === "yes"}
                    onChange={() => setAdvanceDirectivesExecutedInRecord("yes")}
                  />
                  <span htmlFor="yesCheckbox">Yes</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="noCheckbox"
                    checked={advanceDirectivesExecutedInRecord === "no"}
                    onChange={() => setAdvanceDirectivesExecutedInRecord("no")}
                  />
                  <span htmlFor="noCheckbox">No</span>
                </div>
              </div>
              {advanceDirectivesExecutedInRecord === "no" && (
                <input
                  type="text"
                  style={{ marginBottom: "1rem" }}
                  placeholder="Please enter"
                  value={advanceDirectivesExecutedInRecordComment}
                  onChange={(e) =>
                    setAdvanceDirectivesExecutedInRecordComment(e.target.value)
                  }
                />
              )}
              <div className="yeschechbox2">
                <span>
                  If the Advanced Directive has been executed, but not filed in
                  the BHRF medical record, please check the applicable box
                  below:
                </span>
              </div>
              <div className="yeschechbox2">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="exampleCheckbox"
                    checked={advanceDirectivesFilingStatusWishNotFiled}
                    onChange={() =>
                      setAdvanceDirectivesFilingStatusWishNotFiled(
                        !advanceDirectivesFilingStatusWishNotFiled
                      )
                    }
                  />
                  <span htmlFor="advanceDirectivesFilingStatusWishNotFiled">
                    Resident does not wish to have it filed in his/her medical
                    record.
                  </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="checkbox"
                    id="exampleCheckbox"
                    checked={
                      advanceDirectivesFilingStatusAskedForCopyNotProvided
                    }
                    onChange={() =>
                      setAdvanceDirectivesFilingStatusAskedForCopyNotProvided(
                        !advanceDirectivesFilingStatusAskedForCopyNotProvided
                      )
                    }
                  />
                  <span>
                    BHRF has asked for a copy, but it has not been provided.
                  </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="checkbox"
                    id="exampleCheckbox"
                    checked={advanceDirectivesFilingStatusOther}
                    onChange={() =>
                      setAdvanceDirectivesFilingStatusOther(
                        !advanceDirectivesFilingStatusOther
                      )
                    }
                  />
                  Other
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
                  <input
                    type="checkbox"
                    id="yesCheckbox"
                    checked={
                      advanceDirectivesCoordinationOfCareCopySentToPCP === "yes"
                    }
                    onChange={() =>
                      setAdvanceDirectivesCoordinationOfCareCopySentToPCP("yes")
                    }
                  />
                  <span htmlFor="yesCheckbox">Yes</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="noCheckbox"
                    checked={
                      advanceDirectivesCoordinationOfCareCopySentToPCP === "no"
                    }
                    onChange={() =>
                      setAdvanceDirectivesCoordinationOfCareCopySentToPCP("no")
                    }
                  />
                  <span htmlFor="noCheckbox">No</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <span>
                    Has the Advance Directive document ever been acted on?
                  </span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="yesCheckbox"
                    checked={
                      advanceDirectivesCoordinationOfCareActedOn === "yes"
                    }
                    onChange={() =>
                      setAdvanceDirectivesCoordinationOfCareActedOn("yes")
                    }
                  />
                  <span htmlFor="yesCheckbox">Yes</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="noCheckbox"
                    checked={
                      advanceDirectivesCoordinationOfCareActedOn === "no"
                    }
                    onChange={() =>
                      setAdvanceDirectivesCoordinationOfCareActedOn("no")
                    }
                  />
                  <span htmlFor="noCheckbox">No</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <span>
                    If Yes, have all appropriate parties been notified?
                  </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <span>Yes (Specify who)</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="yesCheckbox"
                    checked={
                      advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                      "yes"
                    }
                    onChange={() =>
                      setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified(
                        "yes"
                      )
                    }
                  />
                  {advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                    "yes" && (
                    <input
                      type="text"
                      style={{ outline: "none", border: "none" }}
                      placeholder="__________________"
                      value={
                        advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment
                      }
                      onChange={(e) =>
                        setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment(
                          e.target.value
                        )
                      }
                    />
                  )}
                  {/* <span>
                  (Specify who)________________________________________________{" "}
                </span> */}
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <span>No (Describe why) </span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="noCheckbox"
                    checked={
                      advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                      "no"
                    }
                    onChange={() =>
                      setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified(
                        "no"
                      )
                    }
                  />
                  {advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                    "no" && (
                    <input
                      type="text"
                      style={{ outline: "none", border: "none" }}
                      placeholder="__________________"
                      value={
                        advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment
                      }
                      onChange={(e) =>
                        setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment(
                          e.target.value
                        )
                      }
                    />
                  )}
                </div>
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* section 5 */}
          {page === 5 && (
            <>
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
                I,{" "}
                <span>
                  <AutosizeInput
                    inputStyle={{ border: "none", outline: "none" }}
                    type="text"
                    placeholder="__________________"
                    value={complaintProcessAcknowledgementCompany}
                    onChange={(e) =>
                      setComplaintProcessAcknowledgementCompany(e.target.value)
                    }
                  />
                </span>
                have been explained by facility staff of the facility resident
                complaint process. Resident/Guardian understands that they have
                the right to file complaint with the facility, and with the
                Arizona Department of Residential Licensing when complaint can
                not be resolved with the facility.
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
              {/* <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={complaintProcessAcknowledgementResidentName}
              onChange={(e) =>
                setComplaintProcessAcknowledgementResidentName(e.target.value)
              }
            /> */}
              <label htmlFor="" className="label-review-resitent">
                Resident Signature
              </label>
              <input
                type="text"
                placeholder="Signature"
                value={complaintProcessAcknowledgementResidentSignature}
                onChange={(e) =>
                  setComplaintProcessAcknowledgementResidentSignature(
                    e.target.value
                  )
                }
              />
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
                <label className="label-review-resitent">Date: </label>
                <input
                  type="date"
                  value={complaintProcessAcknowledgementResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setComplaintProcessAcknowledgementResidentDate(
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Guardian/Representative Name:
                </label>
                <input
                  type="text"
                  value={
                    complaintProcessAcknowledgementGuardianRepresentativeName
                  }
                  placeholder="Enter text"
                  required
                  onChange={(e) =>
                    setComplaintProcessAcknowledgementGuardianRepresentativeName(
                      e.target.value
                    )
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Signature:
              </label>
              <input
                type="text"
                value={
                  complaintProcessAcknowledgementGuardianRepresentativeSignature
                }
                placeholder="Signature"
                onChange={(e) =>
                  setComplaintProcessAcknowledgementGuardianRepresentativeSignature(
                    e.target.value
                  )
                }
              />
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
                <label className="label-review-resitent">Date:</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={
                    complaintProcessAcknowledgementGuardianRepresentativeDate
                  }
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setComplaintProcessAcknowledgementGuardianRepresentativeDate(
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* section 6 */}
          {page === 6 && (
            <>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "1.5rem",
                }}
              >
                ORIENTATION TO AGENCY
              </h6>
              <div className="Residentrights">
                <p>
                  I,
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="text"
                      placeholder="________"
                      value={orientationToAgencyCompany}
                      onChange={(e) =>
                        setOrientationToAgencyCompany(e.target.value)
                      }
                    />
                  </span>
                  received an orientation by facility by staff. The orientation
                  included but not limited to the following:
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
              <label htmlFor="" className="label-review-resitent">
                Resident Signature:
              </label>
              <input
                type="text"
                value={orientationToAgencyResidentSignature}
                placeholder="Signature"
                onChange={(e) =>
                  setOrientationToAgencyResidentSignature(e.target.value)
                }
              />

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
                <label className="label-review-resitent">Date: </label>
                <input
                  type="date"
                  value={orientationToAgencyResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setOrientationToAgencyResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Guardian/Representative Name:
                </label>
                <input
                  type="text"
                  value={orientationToAgencyGuardianRepresentativeName}
                  placeholder="Enter text"
                  required
                  onChange={(e) =>
                    setOrientationToAgencyGuardianRepresentativeName(
                      e.target.value
                    )
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Signature:
              </label>
              <input
                value={orientationToAgencyGuardianRepresentativeSignature}
                type="text"
                onChange={(e) =>
                  setOrientationToAgencyGuardianRepresentativeSignature(
                    e.target.value
                  )
                }
              />
              <div className="form-field">
                <label className="label-review-resitent">Date: </label>
                <input
                  type="date"
                  value={orientationToAgencyGuardianRepresentativeDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setOrientationToAgencyGuardianRepresentativeDate(
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* section 7 */}
          {page === 7 && (
            <>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "1.5rem",
                }}
              >
                Resident Lock Box Key Issue and Return
              </h6>
              <div className="form-field">
                <label className="label-review-resitent">Resident’s Name</label>
                <input
                  type="text"
                  value={promotionTalkStrategicApproach}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setPromotionTalkStrategicApproach(e.target.value)
                  }
                />
              </div>
              <div>
                <label className="label-review-resitent">
                  Date Key Issued:
                </label>
                <input
                  type="date"
                  value={lockBoxKeyIssueReturnDateKeyIssued}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnDateKeyIssued(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Date Key Returned:
                </label>
                <input
                  type="date"
                  value={lockBoxKeyIssueReturnDateKeyReturned}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnDateKeyReturned(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Address</label>
                <input
                  type="text"
                  value={lockBoxKeyIssueReturnAddress}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnAddress(e.target.value)
                  }
                />
              </div>
              <div className="Residentrights" style={{ marginTop: "1.5rem" }}>
                <p>
                  I,{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="text"
                      placeholder="________"
                      value={lockBoxKeyIssueReturnResponsibleFor}
                      onChange={(e) =>
                        setLockBoxKeyIssueReturnResponsibleFor(e.target.value)
                      }
                    />
                  </span>
                  will be responsible for my individual lock box key to
                  <span>
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        type="text"
                        placeholder="________"
                        value={lockBoxKeyIssueReturnResponsibleForCorporation}
                        onChange={(e) =>
                          setLockBoxKeyIssueReturnResponsibleForCorporation(
                            e.target.value
                          )
                        }
                      />
                    </span>
                  </span>{" "}
                  Corporation lock box located in my room. I will not give my
                  key to anyone except to staff upon request. I understand that
                  if I loose my key I will be charged a $
                  <span>
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        type="number"
                        placeholder="____"
                        value={lockBoxKeyIssueReturnCharged}
                        onChange={(e) =>
                          setLockBoxKeyIssueReturnCharged(e.target.value)
                        }
                      />
                    </span>
                  </span>{" "}
                  re-key fee. I understand that upon my discharge from this
                  program I will return my key to the program.
                </p>
              </div>
              {/* <label
              htmlFor=""
              className="label-review-resitent"
            >
              Resident Name:
            </label>
            <input
              placeholder="Name"
              value={lockBoxKeyIssueReturnResidentName}
              type="text"
              onChange={(e) =>
                setLockBoxKeyIssueReturnResidentName(e.target.value)
              }
            /> */}
              <label htmlFor="" className="label-review-resitent">
                Resident Signature:
              </label>
              <input
                placeholder="Signature"
                value={lockBoxKeyIssueReturnResidentSignature}
                type="text"
                onChange={(e) =>
                  setLockBoxKeyIssueReturnResidentSignature(e.target.value)
                }
              />

              <div className="form-field">
                <label className="label-review-resitent">Date: </label>
                <input
                  type="date"
                  value={lockBoxKeyIssueReturnResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Guardian/Representative Name:
                </label>
                <input
                  type="text"
                  value={lockBoxKeyIssueReturnGuardianRepresentativeName}
                  placeholder="Enter text"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnGuardianRepresentativeName(
                      e.target.value
                    )
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Signature:
              </label>
              <input
                type="text"
                placeholder="Signature"
                value={lockBoxKeyIssueReturnGuardianRepresentativeSignature}
                onChange={(e) =>
                  setLockBoxKeyIssueReturnGuardianRepresentativeSignature(
                    e.target.value
                  )
                }
              />
              <div className="form-field">
                <label htmlFor="dateOfBirth">Date of Signature Obtained</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={lockBoxKeyIssueReturnGuardianRepresentativeDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnGuardianRepresentativeDate(
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Staff Witness</label>
                <input
                  type="text"
                  value={lockBoxKeyIssueReturnStaffName}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnStaffName(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Signature Witness
                </label>
                <input
                  type="text"
                  value={lockBoxKeyIssueReturnStaffSignature}
                  placeholder="Enter signature"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnStaffSignature(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">Date</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={lockBoxKeyIssueReturnStaffDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setLockBoxKeyIssueReturnStaffDate(e.target.value)
                  }
                />
              </div>
              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

          {/* section 8 */}
          {page === 8 && (
            <>
              <h6
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "1.5rem",
                }}
              >
                INSURANCE INFORMATION
              </h6>
              <div className="Residentrights">
                <p>Primary Insurance:</p>
                <p>
                  Name of Policyholder{" "}
                  <span>
                    <span>
                      <AutosizeInput
                        inputStyle={{ border: "none", outline: "none" }}
                        type="text"
                        placeholder="________________"
                        value={
                          insuranceInformationPrimaryInsurancePolicyholderName
                        }
                        onChange={(e) =>
                          setInsuranceInformationPrimaryInsurancePolicyholderName(
                            e.target.value
                          )
                        }
                      />
                    </span>
                  </span>{" "}
                  Policy holder Date of Birth{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="date"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderDateOfBirth
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Policyholder Address (if different than Resident)
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="_______________"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderAddress
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderAddress(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  City:
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="____________________________"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderCity
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderCity(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  State:
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="____________________________"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderState
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderState(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Zip:
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="____________________________"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderZip
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderZip(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Phone Number
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="_________________________________________________________"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderPhone
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderPhone(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Policyholder Relationship to Resident
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="_________________________________________________________"
                      value={
                        insuranceInformationPrimaryInsurancePolicyholderRelationship
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsurancePolicyholderRelationship(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Insurance Company Name
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="_________________________________________________________"
                      value={insuranceInformationPrimaryInsuranceCompany}
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsuranceCompany(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Customer Service Phone Number
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      type="text"
                      placeholder="_________________________________________________________"
                      value={
                        insuranceInformationPrimaryInsuranceCustomerServicePhone
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsuranceCustomerServicePhone(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Subscriber #{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="text"
                      placeholder="_______________"
                      value={
                        insuranceInformationPrimaryInsuranceSubscriberNumber
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsuranceSubscriberNumber(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Group#{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="text"
                      placeholder="_______________"
                      value={
                        insuranceInformationPrimaryInsuranceSubscriberGroup
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsuranceSubscriberGroup(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Effective Date{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="date"
                      placeholder="_____________"
                      value={
                        insuranceInformationPrimaryInsuranceSubscriberEffectiveDate
                      }
                      onChange={(e) =>
                        setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Secondary Insurance Name of Policyholder{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="text"
                      placeholder="_______________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderName
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderName(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Policy holder Date of Birth{" "}
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="date"
                      placeholder="_______________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderDateOfBirth
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>

                <p>
                  Policyholder Address (if different than Resident)
                  <span>
                    <AutosizeInput
                      inputStyle={{ border: "none", outline: "none" }}
                      type="text"
                      placeholder="_______________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderAddress
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderAddress(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  City:
                  <span>
                    <AutosizeInput
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderCity
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderCity(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  State:
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderState
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderState(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Zip
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderZip
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderZip(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Phone Number
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderPhone
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderPhone(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Policyholder Relationship to Resident
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsurancePolicyholderRelationship
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsurancePolicyholderRelationship(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  <span></span>
                </p>
                <p>
                  Insurance Company Name{" "}
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={insuranceInformationSecondaryInsuranceCompany}
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsuranceCompany(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Customer Service Phone Number
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsuranceCustomerServicePhone
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsuranceCustomerServicePhone(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  Subscriber #
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsuranceSubscriberNumber
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsuranceSubscriberNumber(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Group#{" "}
                  <span>
                    <AutosizeInput
                      type="text"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsuranceSubscriberGroup
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsuranceSubscriberGroup(
                          e.target.value
                        )
                      }
                    />
                  </span>
                  Effective Date{" "}
                  <span>
                    <AutosizeInput
                      type="date"
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        width: "auto",
                      }}
                      placeholder="______________________"
                      value={
                        insuranceInformationSecondaryInsuranceSubscriberEffectiveDate
                      }
                      onChange={(e) =>
                        setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate(
                          e.target.value
                        )
                      }
                    />
                  </span>
                </p>
                <p>
                  OBLIGATIONS OF RESPONSIBLE PARTY: Our facility files for
                  reimbursement with your insurance company. However, the
                  ultimate responsibility for your account is yours. Insurance
                  billing is a courtesy, and the facility does not accept the
                  responsibility for collection of your claim or of negotiating
                  a settlement on a disputed claim. If the Resident is
                  responsible for a balance due, you will receive monthly
                  statements.
                </p>
                <p>
                  ASSIGNMENT OF BENEFITS: I hereby authorize this facility to
                  release the minimum medical
                </p>
                <p>
                  information necessary to process my insurance claims. I
                  further authorize the above insurance company(s) to make
                  payment directly to the provider for the benefits herein and
                  otherwise payable to me.
                </p>
              </div>
              {/* <div className="form-field">
              <label className="label-review-resitent">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value={obligationsAndAuthorizationResidentName}
                placeholder="Enter Name"
                required
                onChange={(e) =>
                  setObligationsAndAuthorizationResidentName(e.target.value)
                }
              />
            </div> */}
              <label htmlFor="" className="label-review-resitent">
                Resident Signature:
              </label>
              <input
                type="text"
                value={obligationsAndAuthorizationResidentSignature}
                onChange={(e) =>
                  setObligationsAndAuthorizationResidentSignature(
                    e.target.value
                  )
                }
              />
              <div className="form-field">
                <label className="label-review-resitent">Date: </label>
                <input
                  type="date"
                  value={obligationsAndAuthorizationResidentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setObligationsAndAuthorizationResidentDate(e.target.value)
                  }
                />
              </div>
              <div className="form-field">
                <label className="label-review-resitent">
                  Guardian/Representative Name:
                </label>
                <input
                  type="text"
                  value={obligationsAndAuthorizationGuardianRepresentativeName}
                  placeholder="Enter Name"
                  required
                  onChange={(e) =>
                    setObligationsAndAuthorizationGuardianRepresentativeName(
                      e.target.value
                    )
                  }
                />
              </div>
              <label htmlFor="" className="label-review-resitent">
                Guardian/Representative Signature:
              </label>
              <input
                type="text"
                value={
                  obligationsAndAuthorizationGuardianRepresentativeSignature
                }
                onChange={(e) =>
                  setObligationsAndAuthorizationGuardianRepresentativeSignature(
                    e.target.value
                  )
                }
              />
              <div className="form-field">
                <label className="label-review-resitent">Date: </label>
                <input
                  type="date"
                  value={obligationsAndAuthorizationGuardianRepresentativeDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) =>
                    setObligationsAndAuthorizationGuardianRepresentativeDate(
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="form-actions-next">
                {page !== 1 && (
                  <div>
                    <button
                      type="button"
                      className="initalsubmitRisistent"
                      onClick={handlePrevPage}
                    >
                      Prev Page
                    </button>
                  </div>
                )}

                {page !== 8 &&
                  (
                    <div>
                      <button
                        type="button"
                        className="initalsubmitRisistent"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  )}
              </div>
            </>
          )}

        </form>
      </div>
      {draftModel && <Draftinmodel onClose={() => setDraftModel(false)} />}
    </>
  );
};

export default ResidentIntakes;
