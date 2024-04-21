import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardcards.css';

// Define a functional component called Dashboardcards
const Dashboardcards = () => {
    return (
        // Create a section with the class name "dashboard-cards"
        <section className="dashboard-cards">
                {/* Create a Link component that navigates to "/map" */}
                <Link to="/map" className="dashboard-card bg-gcwh-oceanblue">
                        {/* Display an image with the source "assets/img/mapimg.webp" */}
                        <img src="assets/img/mapimg.webp" alt="" className="card-img" />
                        {/* Display a paragraph with the text "Map" */}
                        <p className="card-text">Map</p>
                </Link>
                {/* Create a Link component that navigates to "/hospitalinfo" */}
                <Link to="/hospitalinfo" className="dashboard-card bg-gcwh-mango-orange">
                        {/* Display an image with the source "assets/img/hospitalinfo.jpg" */}
                        <img src="assets/img/hospitalinfo.jpg" alt="" className="card-img" />
                        {/* Display a paragraph with the text "Information about hospital" */}
                        <p className="card-text">Information about hospital</p>
                </Link>
                {/* Create a Link component that navigates to "/appointment" */}
                <Link to="/appointment" className="dashboard-card bg-gcwh-sunnyorange">
                        {/* Display an image with the source "assets/img/appointmentimg.webp" */}
                        <img src="assets/img/appointmentimg.webp" alt="" className="card-img" />
                        {/* Display a paragraph with the text "Appointment" */}
                        <p className="card-text">Appointment</p>
                </Link>
                {/* Create a Link component that navigates to "/department" */}
                <Link to="/department" className="dashboard-card bg-gcwh-violet">
                        {/* Display an image with the source "assets/img/teamimg.webp" */}
                        <img src="assets/img/teamimg.webp" alt="" className="card-img" />
                        {/* Display a paragraph with the text "Department" */}
                        <p className="card-text">Department</p>
                </Link>
        </section>
    )
}

// Export the Dashboardcards component as the default export
export default Dashboardcards