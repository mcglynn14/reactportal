import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Userinformation from '../../components/Userinformation';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import './appointment.css';

function Appointment(){
  const user = Userinformation();
  console.log('user:', user);

  return (
    <>
      <header className="">
        <Nav />
      </header>
      <Hero title="Appointment" />
      {user && (
        <section className="appointment">
          <div className="">
            <img src={`/img/department/${user.department_id.img_one}`} alt={` ${user.department_id.name} department details`} className="" />
          </div>
          <div className="mb-6">
            <p className="">Patient Number: {user.patient_number}</p>
            <h2 className="">{user.forename}'s Appointment details</h2>
          </div>
          <div className="mb-6">
            <p className="">Department: </p>
            <div className="">
              <p className="">{user.department_id.name}</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="">Date: </p>
            <div className="">
              <p className="">   {format(new Date(user.appointment_date), 'MMMM dd, yyyy hh:mm a')}</p>
            </div>
          </div>
          <div className="mb-8">
            <Link to="/department">
              <button className="btn department-btn">Meet the team</button>
            </Link>
          </div>
        </section>
      )}
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Appointment