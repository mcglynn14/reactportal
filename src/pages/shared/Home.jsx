import React from 'react';
import './home.css';
import '../../index.css';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';
import Cando from '../../components/Cando';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';

const Home = () => {

  return (
    <>
      <header className="bg-white border-b-2 border-ctc-black">
        <Nav />
      </header>
      <Hero title="Welcome to Glasgow Children's Wellness Hospital"/>
      <Cando />
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Home;