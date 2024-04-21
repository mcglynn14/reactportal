import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import '../index.css';

const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    localStorage.removeItem('parent'); // Remove parent from local storage
    navigate('/login'); // Navigate to the login page
  };

  const [token, setToken] = useState(null); // State variable for token
  const [parent, setParent] = useState(false); // State variable for parent

  useEffect(() => {
    const storedToken = localStorage.getItem('token'); // Get token from local storage
    const storedParent = localStorage.getItem('parent'); // Get parent from local storage
    setToken(storedToken); // Set token state variable
    setParent(storedParent === 'true'); // Set parent state variable based on storedParent value
  }, []);

  useEffect(() => {
    console.log('token has changed:', token); // Log token value when it changes
    console.log('Parents click here:', parent); // Log parent value when it changes
  }, [token, parent]);

  useEffect(() => {
    const handleNavbarToggleClick = () => {
      const mainnav = document.getElementById("mobile-nav"); // Get mobile-nav element
      const navOpen = document.getElementById("open-toggle"); // Get open-toggle element
      const navClose = document.getElementById("close-toggle"); // Get close-toggle element
      
      mainnav.classList.toggle("active"); // Toggle active class on mainnav element
      navOpen.classList.toggle("open-toggle"); // Toggle open-toggle class on navOpen element
      navClose.classList.toggle("close-toggle"); // Toggle close-toggle class on navClose element
    };

    const navbarToggle = document.getElementById("navbar-toggle"); // Get navbar-toggle element
    navbarToggle.addEventListener("click", handleNavbarToggleClick); // Add event listener for click event on navbarToggle element

    return () => {
      navbarToggle.removeEventListener("click", handleNavbarToggleClick); // Remove event listener when component unmounts
    };
  }, []);

  return (
    <>
      <div className="headerinner">
        <div className="logo">
          <img src="/assets/img/GCWHlogo.svg" alt="" /> {/* Logo image */}
        </div>
        <div className="navbartoggle" id="navbar-toggle">
          <svg id="open-toggle" x-show="!menu" className="bars block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> {/* SVG path for open toggle */}
          </svg>
          <svg id="close-toggle" x-show="menu" className="x hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> {/* SVG path for close toggle */}
          </svg>
        </div>
      </div>
      <nav>
        <ul className="ul-links" id="mobile-nav">
          {token ? ( // If token exists
            <>
              {parent ? ( // If parent is true
                <>
                  <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Home </Link> {/* Link to home */}
                  <Link to="/parentdashboard" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Parent dashboard</Link> {/* Link to parent dashboard */}
                  <Link to="/appointment" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Appointment</Link> {/* Link to appointment */}
                </>
              ) : ( // If parent is false
                <>
                  <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Home </Link> {/* Link to home */}
                  <Link to="/dashboard" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Dashboard</Link> {/* Link to dashboard */}
                  <Link to="/appointment" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Appointment</Link> {/* Link to appointment */}
                  <Link to="/games" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Games</Link> {/* Link to games */}
                </>
              )}
              <button className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700" onClick={logout}>Logout</button> {/* Logout button */}
            </>
          ) : ( // If token does not exist
            <>
              <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Home</Link> {/* Link to home */}
              <Link to="/login" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Login</Link> {/* Link to login */}
              <Link to="https://www.nhsinform.scot/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">NHS Inform</Link> {/* External link to NHS Inform */}
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;