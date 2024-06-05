import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import Userinformation from '../../components/Userinformation';

const Medicalinfo = () => {
  const userData = Userinformation();  
  const userDOB = userData ? userData.dob : null;
  const [userAge, setUserAge] = useState();
  const [medicalInfo, setMedicalInfo] = useState('');

  useEffect(() => {
    if (!userDOB) {
      // User date of birth not available
      return;
    }

    const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };

    setUserAge(calculateAge(userDOB));

  }, [userDOB]);

  useEffect(() => {
    if (userAge >= 14 && userAge <= 18) {
      setMedicalInfo("During adolescence, focus on promoting independence while providing guidance on healthy choices. Encourage regular exercise to support physical and mental well-being. Ensure a balanced diet that includes plenty of fruits, vegetables, whole grains, and lean proteins. Discuss the importance of good sleep hygiene and establish a consistent sleep schedule. Address any concerns about body image or self-esteem with sensitivity and support. Encourage responsible decision-making regarding substance use and sexual health. Regular medical check-ups should include discussions about puberty, reproductive health, and vaccinations. Encourage open communication with healthcare providers and emphasize the importance of seeking medical attention for any concerning symptoms or issues.");
    } else if (userAge >= 7 && userAge <= 13) {
      setMedicalInfo("As children enter school age, maintaining overall health becomes increasingly important. Encourage regular physical activity through sports, outdoor play, or structured exercise routines. Monitor screen time and ensure they have a healthy balance of activities.Emphasize the importance of good posture, especially with increased time spent sitting in school or using electronic devices. Monitor dental health and ensure regular dental check-ups. Encourage open communication about any physical or emotional concerns they may have.");
    } else if (userAge >= 2 && userAge <= 6) {
      setMedicalInfo("During these early years, it's crucial to focus on establishing healthy habits and routines. Ensure your child receives regular pediatric check-ups to monitor growth and development. Encourage a balanced diet rich in fruits, vegetables, whole grains, and lean proteins to support proper growth. Promote physical activity through active play and limit sedentary activities like excessive screen time. Emphasize good hygiene practices, such as regular handwashing, to prevent the spread of germs. Keep up with recommended vaccinations to protect against common childhood illnesses.");
    } else {
      setMedicalInfo("Medical information not available for this age range.");
    }
  }, [userAge]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <Hero title="Medical Information" />
      <section className="medicalinfo">
        <div>
          <h2 className="text-center">Medical Information</h2>
          {/* Display medical information based on user age */}
          <p className="px-5">{medicalInfo}</p>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  );
};

export default Medicalinfo;
