// Navbar.js
import React, { useState, useEffect } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import "./UpperBar.css";
import sun from "../../img/sun.png";
import profile from "../../img/profile.png";
import { MdOutlineSegment } from "react-icons/md";
import ProfileModal from "../Modal/ProfileModal";
import CompleteIntake from "../Modal/CompleteIntake";
import NotificationModal from "../Modal/NotificationModal";
import profilemodal from "../../img/profilemodal.png";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCalendarCheckLight } from "react-icons/pi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import notification1 from "../../img/notification.png";
import notification2 from "../../img/notification1.png";
import ChattingModal from "../Modal/ChattingModal";
import { useNavigate } from "react-router-dom";
import chatting1 from "../../img/chatting1.png";
import { RiSearchLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import intake from "../../img/Mask group.png";
import { user_detail, show_notification,notification_get } from "../../Api_Collection/Api";

const UpperBar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [ischattingModalOpen, setChattingModalOpen] = useState(false);
  const [user, setUser] = useState("");

  //notification
  const [notification,setNotification]=useState("");
  const [todayData, setTodayData] = useState([]);
  const [otherData, setOtherData] = useState([]);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Filter data based on today's date
    const todayFiltered = notification?.data?.filter(item => item.updatedAt === today);
    setTodayData(todayFiltered);

    // Filter data for other dates
    const otherFiltered = notification?.data?.filter(item => item.updatedAt !== today);
    setOtherData(otherFiltered);

    // console.log(todayFiltered,"today data",otherFiltered,"other data");
  }, [notification, today]);

 

  useEffect(() => {
    user_detail(setUser);
    notification_get(setNotification);
  }, []);

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  const openNotificationModal = () => {
    setNotificationModalOpen(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalOpen(false);
  };

  const openChattingModal = () => {
    setChattingModalOpen(true);
  };
  const closeChattingModal = () => {
    setChattingModalOpen(false);
  };

  // const closeCompleteIntakeModal = () => {
  //   setcompleteintakeModalopne(false);
  // };

  // const handleCompleteIntake = () => {
  //   closeCompleteIntakeModal();
  //   navigate('/intake');
  // };

  return (
    <>
      <div className="navbar1">
        <div className="left-section">
          <span>
            <MdOutlineSegment onClick={toggleMenu} />
          </span>
          <span>Welcome,</span>
          <h6>{user?.fullName}</h6>
          <img src={sun} alt="" />
        </div>
        <div className="right-section">
          <img src={profile} alt="" onClick={openProfileModal} />
          <RiMessage2Line className="icons" onClick={openChattingModal} />
          <FaBell className="icons" onClick={openNotificationModal} />
        </div>
      </div>
      {/* Modal */}
      {isProfileModalOpen && (
        <ProfileModal onClose={closeProfileModal}>
          <div className="profilemodal-container">
            <div className="profilemodal-header">
              <img
                src={profilemodal}
                alt="Profile"
                className="profilemodal-image"
              />
              <h2>{user?.fullName}</h2>
              <p>
                <span>STATUS:</span> ADMITTED AT CENTRE 1
              </p>
              <button
                className="profilemodalbutton"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  show_notification(
                    "success! ",
                    "LogOut Successfully",
                    "success"
                  );
                  navigate("/");
                }}
              >
                SIGN OUT
              </button>
            </div>
            <div className="personalmodal-info">
              <p>
                {" "}
                <IoDocumentTextOutline />
                Intake Documents <MdErrorOutline />
              </p>
              <p>
                {" "}
                <PiCalendarCheckLight /> Medical Appointment
              </p>
              <p>
                {" "}
                <MdOutlineNoteAlt /> Staffing Note/ Concurrent Review
              </p>
              <p>
                {" "}
                <PiCalendarCheckLight /> Medication Script Upload
              </p>
              <p>
                {" "}
                <IoSettingsOutline /> Settings
              </p>
            </div>
          </div>
        </ProfileModal>
      )}

      {/* Notification Modal */}
      {isNotificationModalOpen && (
        <NotificationModal onClose={closeNotificationModal}>
          <div className="notification">
            <h5>NOTIFICATIONS</h5>
            <hr />
            {/* <p>Today</p> */}
            {
              notification?.data?.slice(0,4)?.map((item,i)=>(
                <div className="notificationcontent" style={{display:"flex" ,alignItems:"center",marginTop:"1rem"}}>
              <img src={item?.patientId?.profilePic?item?.patientId?.profilePic:notification1} alt="" style={{borderRadius:"50%"}}/>
              <span >{item?.title}</span>
            </div>
              ))
            }
            {/* <div className="notificationcontent">
              <img src={notification1} alt="" />
              <span>Your Intake Documents have been Uploaded Succesfully!</span>
            </div>
            <p style={{ color: "#1E1E1E99" }}>TOMORROW</p>
            <div className="notificationcontent">
              <img src={notification2} alt="" />
              <span>You Have 2 APPOINTMENTS Scheduled for today!</span>
            </div>
            <p
              style={{
                color: "#1E1E1E99",
                fontWeight: "700",
                fontSize: "14px",
                marginTop: "20px",
              }}
            >
              TAP TO VIEW
            </p> */}
          </div>
        </NotificationModal>
      )}

      {/* Chatting Modal */}
      {ischattingModalOpen && (
        <ChattingModal onClose={closeChattingModal}>
          <div className="chatting">
            <p>CHAT</p>
            <div className="search-bar">
              <input type="text" placeholder="Search" value="" />
              <RiSearchLine className="searchicon" />
            </div>
            <div className="chattingdiv">
              <img src={chatting1} alt="User" />
              <p>Nina Johnson</p>
              <span>Have you Checked my Pulse Rate??</span>
            </div>
            <div className="chattingdiv">
              <img src={chatting1} alt="User" />
              <p>Nina Johnson</p>
              <span>Have you Checked my Pulse Rate??</span>
            </div>
            <div className="chattingdiv">
              <img src={chatting1} alt="User" />
              <p>Nina Johnson</p>
              <span>Have you Checked my Pulse Rate??</span>
            </div>
            <div className="chattingdiv">
              <img src={chatting1} alt="User" />
              <p>Nina Johnson</p>
              <span>Have you Checked my Pulse Rate??</span>
            </div>
          </div>
        </ChattingModal>
      )}

      {/* Notification Modal */}
      {/* {iscompleteintakeModalopne && (
        <CompleteIntake >
          <div className='completeintake'>
            <div>
              <img src={intake} alt="" />
              <p>You Haven’t Uploaded your Intake
                Documents Yet!....Complete your
                Intake Process Now!</p>
                <button className='completeintakebutton'  onClick={handleCompleteIntake}>COMPLETE INTAKE NOW</button>
                <button className='skiptakebutton'  onClick={closeCompleteIntakeModal} >SKIP FOR NOW</button>
            </div>
          </div>
        </CompleteIntake>
      )} */}
    </>
  );
};

export default UpperBar;
