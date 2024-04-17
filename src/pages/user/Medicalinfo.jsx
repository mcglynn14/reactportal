import React, { useState, useEffect} from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';


const Medicalinfo = () => {

  const [userAge, setUserAge] = useState();
  const [xrayDepartment, setXrayDepartment] = useState('');
  const [mriDepartment, setMriDepartment] = useState('');
  const [clinics, setClinics] = useState('');
  const [wards, setWards] = useState('');
  const [playAreas, setPlayAreas] = useState('');
  const [surgicalTheatres, setSurgicalTheatres] = useState('');
  const [childrensWingMap, setChildrensWingMap] = useState('');

  useEffect(() => {
    if (userAge >= 14 && userAge <= 18) {
      setXrayDepartment("X-ray Department: Our X-ray department is equipped with advanced imaging technology to provide precise diagnostic images for a wide range of medical conditions. From routine X-rays to more specialized imaging procedures, our experienced radiology team ensures accurate and timely results to aid in diagnosis and treatment planning.");
      setMriDepartment("MRI Department: Our state-of-the-art MRI department is equipped with the latest technology to provide accurate diagnostic imaging. Our experienced radiologists ensure that patients receive the best care and attention during their scans.");
      setClinics("Clinics: We have various specialized clinics catering to different medical needs, including cardiology, orthopedics, pediatrics, and more. Our expert medical staff are here to address your concerns and provide personalized care.");
      setWards("Wards: Our hospital has dedicated wards for different specialties, ensuring that patients receive specialized care tailored to their needs. Whether you're here for surgery, recovery, or treatment, our comfortable wards provide a peaceful environment for healing.");
      setPlayAreas("Play Areas: We understand the importance of play in a child's recovery and well-being. That's why we have designated play areas within the hospital, filled with toys, games, and activities to keep our young patients entertained and engaged during their stay.");
      setSurgicalTheatres("Surgical Theatres: Our advanced surgical theatres are equipped with cutting-edge technology to ensure safe and successful surgeries. Our skilled surgical teams are dedicated to providing the highest quality care before, during, and after your procedure.");
      setChildrensWingMap("Children's Wing Map: For our younger visitors aged 14 to 18, we have a specially designed map of our children's wing. This map highlights key areas such as the play areas, pediatric wards, and clinics, making it easier for teenagers to navigate the hospital and find the services they need.");
    } else if (userAge >= 7 && userAge <= 13) {
      setXrayDepartment("X-ray Department: Our X-ray department is like a special camera that takes pictures inside your body to help doctors see what's going on. We use cool machines to do this and our team of experts makes sure everything is accurate and quick to help you feel better.");
      setMriDepartment("MRI Department: Our amazing MRI department has a big machine that takes really detailed pictures of the inside of your body, helping doctors figure out what's wrong. Our friendly radiologists make sure you're comfortable and well taken care of during your scan.");
      setClinics("Clinics: We have different clinics for different parts of your body and health needs, like your heart, bones, and for kids too! Our super-friendly doctors and nurses are here to help you feel better and answer all your questions.");
      setWards("Wards: Our hospital has special rooms just for kids with different health needs, like if you need an operation or if you're getting better from being sick. We want you to feel cozy and safe while you're with us.");
      setPlayAreas("Play Areas: We know that playing and having fun is important, especially when you're in the hospital. That's why we have fun play areas with toys and games to keep you entertained and happy during your visit.");
      setSurgicalTheatres("Surgical Theatres: Our high-tech surgery rooms are like the set of a superhero movie, with all the cool gadgets and tools to help our amazing doctors perform surgeries safely and successfully.");
      setChildrensWingMap("Children's Wing Map: For our older kids, aged 7 to 13, we have a special map of our children's wing. This map shows you where all the fun places are, like the play areas and clinics, to make it easier for you to find your way around and get the help you need.");
    } else if (userAge >= 2 && userAge <= 6) {
      setXrayDepartment("X-ray Department: Our X-ray department is like a magic room with a special camera that takes pictures of your insides to help the doctors understand how to help you feel better. It's quick and easy, and our friendly team makes sure you're safe and comfy.");
      setMriDepartment("MRI Department: Our wonderful MRI room has a big machine that takes pictures of the inside of your body, just like a superhero's scanner! It helps the doctors know what's wrong so they can help you feel better. Our nice radiologists will make sure you're cozy during your picture.");
      setClinics("Clinics: We have special rooms for different parts of your body and different kinds of care, like for your heart or your tummy. Our friendly doctors and nurses are here to give you a big hug and help you feel all better.");
      setWards("Wards: Our hospital has cozy rooms just for kids like you, where you can rest and feel better if you're sick or need a little operation. We'll make sure you have everything you need to feel happy and safe.");
      setPlayAreas("Play Areas: We know that being in the hospital can be a little scary, so we have super fun play areas with toys and games to make you smile and laugh. Our friendly staff are here to play with you and make you feel at home.");
      setSurgicalTheatres("Surgical Theatres: Our special surgery rooms are like the stage for a brave superhero adventure! Our amazing doctors and nurses use special tools to fix things inside your body and help you feel strong and healthy again.");
      setChildrensWingMap("Children's Wing Map: For our little friends aged 2 to 6, we have a special map to help you find all the fun places in our children's wing, like the play areas and special rooms. It's like a treasure map to make your visit even more exciting!");
    }
  }, [userAge]);

  return (
    <>
      <header className="">
        <Nav />
      </header>
      <Hero title="Medical Information" />
      <section className="medicalinfo">
        <div>
          <h2>Medical Information</h2>
          <p></p>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Medicalinfo