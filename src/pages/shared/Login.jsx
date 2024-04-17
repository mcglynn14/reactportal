import './login.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';


const Login = () => {
  const [patient_number, setPatientNumber] = useState('');
  const [password, setPassword] = useState('');
  const [parent , setParent] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const response = await axios.post('http://localhost:5001/api/login', {
        patient_number,
        password,
      });

      console.log('Login successful');
      console.log('Token:', response.data.token);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('patientNum', response.data.patient_number);

      if(parent){
        localStorage.setItem('parent', 'true');
      } else{
        localStorage.removeItem('parent');
      }

      if(parent){
        navigate('/parentDashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };
  useEffect(() => {
    const storedParent = localStorage.getItem('parent');
    if(storedParent){
      setParent(true);
    }
  }, []);
  
  return (
    <>
    <header>
        <Nav />
    </header>
    <Hero loginsubtitle='Please Login below' logintitle='Login'/>
      <section className="login">
      <h1 className="text-3xl font-bold title text-center mb-10 mt-16">Login</h1>
        <div className="login-form">
        <div className="flex flex-col">
          <label htmlFor="patient_number" className="username-label">Username</label>
          <input className="login-input mb-12 border border-black py-2 px-3" type="tel" id="patient_number" value={patient_number} onChange={(e) => setPatientNumber(e.target.value)} placeholder="Patient Number" />
          <label htmlFor="password" className="password-label">Password</label>
          <input className="login-input mb-12 border border-black py-2 px-3" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="parent-checker">
            <input type="checkbox" className="checkbox" id="checkbox_id" checked={parent} onChange={() => setParent(!parent)} />
            <label htmlFor="checkbox_id" className="">Parent/Guardian please select</label>
          </div>
          <button className="border border-black btn mb-12" type="submit" onClick={handleLogin}>Login</button>
        </div>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Login;