import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Userinformation from '../../components/Userinformation';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import { format } from 'date-fns'; // Import format function for date formatting
import './appointment.css';

function Appointment() {
  const user = Userinformation();
  console.log('user:', user);

  if (!user || !user.department_id) {
    // Render a loading state or handle the case where user or department_id is not available
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <Hero title="Appointment" />
      <section className="appointment">
        <div className="flex content-center justify-center">
          <img src={`assets/img/department/${user.department_id.img_one}`} alt={`${user.department_id.name} department details`} />
        </div>
        <div className="mb-6">
          <p>Patient Number: {user.patient_number}</p>
          <h2>{user.forename}'s Appointment details</h2>
        </div>
        <div className="mb-6">
          <p>Department: </p>
          <div>
            <p>{user.department_id.name}</p>
          </div>
        </div>
        <div className="mb-6">
          <p>Date: </p>
          <div>
            <p>{format(new Date(user.appointment_date), 'MMMM dd, yyyy hh:mm a')}</p>
          </div>
        </div>
        <div className="mb-8">
          <Link to="/department">
            <button className="btn department-btn">Meet the team</button>
          </Link>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  );
}

export default Appointment;
