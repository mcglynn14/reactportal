import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardcards.css';


const Dashboardcards = () => {
  return (
    <section className="dashboard-cards">
        <Link to="/profile" className="dashboard-card bg-gcwh-oceanblue">
            <img src="assets/img/profileimg.webp" alt="" className="card-img" />
            <p className="card-text">Your profile</p>
        </Link>
        <Link to="/hospitalinfo" className="dashboard-card bg-gcwh-mango-orange">
            <img src="assets/img/hospitalinfo.jpg" alt="" className="card-img" />
            <p className="card-text">Information about hospital</p>
        </Link>
        <Link to="/games" className="dashboard-card bg-gcwh-skyblue">
            <img src="assets/img/gameimg.jpg" alt="" className="card-img" />
            <p className="card-text">Games</p>
        </Link>
        <Link to="/medicalinfo" className="dashboard-card bg-gcwh-mintgreen">
            <img src="assets/img/medicalinfoimg.webp" alt="" className="card-img" />
            <p className="card-text">Information on medical events</p>
        </Link>
        <Link to="/appointment" className="dashboard-card bg-gcwh-sunnyorange">
            <img src="assets/img/appointmentimg.webp" alt="" className="card-img" />
            <p className="card-text">Appointment</p>
        </Link>
        <Link to="/department" className="dashboard-card bg-gcwh-violet">
            <img src="assets/img/teamimg.webp" alt="" className="card-img" />
            <p className="card-text">Department</p>
        </Link>
    </section>
  )
}

export default Dashboardcards