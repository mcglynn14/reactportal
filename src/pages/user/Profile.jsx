import React from 'react'
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import './profile.css';

const Profile = () => {
  return (
    <>
      <header className="">
        <Nav />
      </header>
      <Hero title="Profile" />
      <section className="profile-section">
        <div className="img-div">
          <img src="assets/img/profileimg.webp" alt="" className="profile-img" />
          <button className="btn uploadprofile-btn">Upload profile picture</button>
        </div>
        <div className="profile-input">
            <label htmlFor="patient_number" className="username-label">Age</label>
            <input className="login-input mb-12 border border-black py-2 px-3" type="tel" id="patient_number" />
            <label htmlFor="patient_number" className="username-label">Name</label>
            <input className="login-input mb-12 border border-black py-2 px-3" type="tel" id="patient_number" />
            <button className="btn uploadprofile-btn">Save</button>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Profile