import axios,{useState} from "axios";
import { Store } from "react-notifications-component";

const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

const Token = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};


export const show_notification = (title, message, type) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate_animated", "animate_fadeIn"],
    animationOut: ["animate_animated", "animate_fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const login_user = async (payLoad, navigate) => {
  try {
    const res = await axios.post(`${BaseUrl}Patient/signin`, payLoad);
   
    localStorage.setItem("token", res?.data?.accessToken);
    show_notification("Success !", "Singin Successfully", "success");
    navigate("/patient_panel");
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const user_detail = async (setUser) => {
  try {
    const res = await axios.get(`${BaseUrl}Patient/getProfile`, Token);
    setUser(res?.data?.data);
   
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};


export const safety_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createResidentSafetyPlan`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const initialAssestment_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createInitialAssessment`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const patient_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createTreatmentPlan`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Resident_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createResidentIntake`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Nurssing_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createNursingAssessment`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appoinment_Booking = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createAppointment`,
      payLoad,
      Token
    );
    show_notification(
      "Success !",
      "Appointment Submit Successfully",
      "success"
    );
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appointment_Upcoming = async (setAppoinment) => {
  try {
    const res = await axios.get(
      `${BaseUrl}Patient/getAllPastAppointments`,
      Token
    );
    setAppoinment(res?.data);
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appointment_get = async (setAppoinmentPast) => {
  try {
    const res = await axios.get(
      `${BaseUrl}Patient/getAllUpcomingAppointments`,
      Token
    );
    setAppoinmentPast(res?.data);
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};


export const medication_get = async (patientId,setMedication) => {
  try {
    const res = await axios.get(
      `${BaseUrl}Patient/getOngoingMedications/${patientId}`,
      Token
    );
    setMedication(res?.data?.data);
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};
