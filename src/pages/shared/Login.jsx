// Importing necessary dependencies and components
import './login.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';

// Login component
const Login = () => {
  // State variables
  const [patient_number, setPatientNumber] = useState(''); // State variable for patient number
  const [password, setPassword] = useState(''); // State variable for password
  const [parent , setParent] = useState(false); // State variable for parent status
  const navigate = useNavigate(); // React Router's navigate function

  // Function to handle login
  const handleLogin = async () => {
    try{
      // Sending login request to the server
      const response = await axios.post('http://localhost:5001/api/login', {
        patient_number,
        password,
      });

      console.log('Login successful');
      console.log('Token:', response.data.token);

      // Storing token and patient number in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('patientNum', response.data.patient_number);

      // Storing parent status in local storage
      if(parent){
        localStorage.setItem('parent', 'true');
      } else{
        localStorage.removeItem('parent');
      }

      // Navigating to appropriate dashboard based on parent status
      if(parent){
        navigate('/parentDashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  // useEffect hook to check if parent status is stored in local storage
  useEffect(() => {
    const storedParent = localStorage.getItem('parent');
    if(storedParent){
      setParent(true);
    }
  }, []);
  
  
  return (
    <>
    {/* Header */}
    <header>
        <Nav />
    </header>
    {/* Hero */}
    <Hero loginsubtitle='Please Login below' logintitle='Login'/>
      {/* Login section */}
      <section className="login">
      <h1 className="text-3xl font-bold title text-center mb-10 mt-16">Login</h1>
        <div className="login-form">
        <div className="flex flex-col">
          {/* Username input */}
          <label htmlFor="patient_number" className="username-label">Username</label>
          <input className="login-input mb-12 border border-black py-2 px-3" type="tel" id="patient_number" value={patient_number} onChange={(e) => setPatientNumber(e.target.value)} placeholder="Patient Number" />
          {/* Password input */}
          <label htmlFor="password" className="password-label">Password</label>
          <input className="login-input mb-12 border border-black py-2 px-3" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* Parent/Guardian checkbox */}
          <div className="parent-checker">
            <input type="checkbox" className="checkbox" id="checkbox_id" checked={parent} onChange={() => setParent(!parent)} />
            <label htmlFor="checkbox_id" className="">Parent/Guardian please select</label>
          </div>
          {/* Login button */}
          <button className="border border-black btn mb-12" type="submit" onClick={handleLogin}>Login</button>
        </div>
        </div>
      </section>
      {/* Gcwhicon */}
      <Gcwhicon />
      {/* Footer */}
      <Footer />
    </>
  )
}
export default Login;