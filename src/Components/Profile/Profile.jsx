import React, { useEffect, useState } from "react";
import "./Profile.css";
import AppointmentsCard from "../Cards/AppointmentsCard";
import profile from "../../img/profile1.png";
import cards from "../../img/card1.png";
import nurse1 from "../../img/nurse (1).png";
import nurse2 from "../../img/nurse (2).png";
import nurse3 from "../../img/nurse (3).png";
import { user_detail } from "../../Api_Collection/Api";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    user_detail(setUser);
  }, []);

  console.log(user, "user data");
  const data = [
    {
      imageUrl: cards,
      date: "DD/MM/YYYY",
      slot: "HH:MM AM ",
      location: "CENTRE 1",
    },
    {
      imageUrl: cards,
      date: "DD/MM/YYYY",
      slot: "HH:MM AM ",
      location: "CENTRE 1",
    },
    {
      imageUrl: cards,
      date: "DD/MM/YYYY",
      slot: "HH:MM AM ",
      location: "CENTRE 1",
    },
  ];
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <img src={profile} alt="Profile" className="profile-image" />
          <h2>{user?.fullName}</h2>
          <p>
            <span>STATUS:</span> ADMITTED AT CENTRE 1
          </p>
        </div>
        <div className="personal-info">
          <h3>Personal Information</h3>
          <p>
            <span>DATE OF BIRTH : </span>
            {new Date(user?.date).toLocaleDateString()}
          </p>
          <p>
            <span>AGE : </span>
            {user?.age}
          </p>
          <p>
            <span>GENDER : </span>
            {user?.gender}
          </p>
          <p>
            <span>EMAIL : </span>
            {user?.email}
          </p>
          <p>
            {" "}
            <span>CONTACT NO. : </span>
            {user?.mobileNumber}
          </p>
          <p>
            <span>ADDRESS : </span>
            {user?.address}
          </p>
        </div>
      </div>
      <div className="profile_right">
        <div className="profileppointments">
          <p>Recent Centres</p>
          {data.map((appointment, index) => (
            <AppointmentsCard
              key={index}
              imageUrl={appointment.imageUrl}
              date={appointment.date}
              slot={appointment.slot}
              location={appointment.location}
            />
          ))}
        </div>
        <div className="nurse">
          <p>Recent Nurses / CNA</p>
          <div className="nurse-card">
            <div className="nursecard">
              <img src={nurse1} alt="" />
              <p>Nina Johnson</p>
              <span>Centre 1</span>
            </div>
            <div className="nursecard">
              <img src={nurse2} alt="" />
              <p>Clara Davis</p>
              <span>Centre 1</span>
            </div>
            <div className="nursecard">
              <img src={nurse3} alt="" />
              <p>John Smith</p>
              <span>Centre 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
