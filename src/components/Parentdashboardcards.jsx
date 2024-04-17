import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardcards.css';


const Dashboardcards = () => {
  return (
    <section className="dashboard-cards">
        <Link to="/map" className="dashboard-card bg-gcwh-oceanblue">
            <img src="assets/img/mapimg.webp" alt="" className="card-img" />
            <p className="card-text">Map</p>
        </Link>
        <Link to="/hospitalinfo" className="dashboard-card bg-gcwh-mango-orange">
            <img src="assets/img/hospitalinfo.jpg" alt="" className="card-img" />
            <p className="card-text">Information about hospital</p>
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