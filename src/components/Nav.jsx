import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import '../index.css';

const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('parent');
    navigate('/login');
  };

  const [token, setToken] = useState(null);
  const [parent, setParent] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedParent = localStorage.getItem('parent');
    setToken(storedToken);
    setParent(storedParent === 'true');
  }, []);

  useEffect(() => {
    console.log('token has changed:', token);
    console.log('Parents click here:', parent);
  }, [token, parent]);

  useEffect(() => {
    const handleNavbarToggleClick = () => {
      const mainnav = document.getElementById("mobile-nav");
      const navOpen = document.getElementById("open-toggle");
      const navClose = document.getElementById("close-toggle");
      
      mainnav.classList.toggle("active");
      navOpen.classList.toggle("open-toggle");
      navClose.classList.toggle("close-toggle");
    };

    const navbarToggle = document.getElementById("navbar-toggle");
    navbarToggle.addEventListener("click", handleNavbarToggleClick);

    return () => {
      navbarToggle.removeEventListener("click", handleNavbarToggleClick);
    };
  }, []);

  return (
    <>
      <div className="headerinner">
        <div className="logo">
          <img src="/assets/img/GCWHlogo.svg" alt="" />
        </div>
        <div className="navbartoggle" id="navbar-toggle">
          <svg id="open-toggle" x-show="!menu" className="bars block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg id="close-toggle" x-show="menu" className="x hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
      <nav>
        <ul className="ul-links" id="mobile-nav">
          {token ? (
            <>
              {parent ? (
                <>
                  <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Home </Link>
                  <Link to="/parentdashboard" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Parent dashboard</Link>
                  <Link to="/appointment" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Appointment</Link>
                </>
              ) : (
                <>
                  <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Home </Link>
                  <Link to="/dashboard" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Dashboard</Link>
                  <Link to="/appointment" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Appointment</Link>
                  <Link to="/games" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Games</Link>
                </>
              )}
              <button className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Home</Link>
              <Link to="/login" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">Login</Link>
              <Link to="https://www.nhsinform.scot/" className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-ctc-black hover:bg-gcwh-violet hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">NHS Inform</Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;