import React from 'react'
import Userinformation from '../../components/Userinformation';
import Consultant from '../../components/Consultant';
import Nurse from '../../components/Nurse';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import './department.css';


const Department = () => {
  const user = Userinformation();

  const handlegoBack = () => {
    window.history.back();
  };

  return (
    <>
      <header className="">
        <Nav />
      </header>
      <Hero title="Department" />
      {user && (
        <section className="department-section">
          <button className="btn appointment-btn" onClick={handlegoBack}>
            Back to appointment
          </button>
          <h2 className="text-center">{user.forename}'s team</h2>
          <div className="">
            <Consultant consultant_name={user.department_id.consultant} consultant_image={user.department_id.consultant_img} />
            <Nurse nurse_name={user.department_id.nurse} nurse_image={user.department_id.nurse_img} />
          </div>
        </section>
      )}
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Department