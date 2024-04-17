import React from 'react'
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';

const Map = () => {
  return (
    <>
      <header className="">
        <Nav />
      </header>
      <Hero title="Map" />
      <section className="map flex justify-center items-center">
        <div className="flex justify-center flex-col items-center">
          <h2>Map</h2>
          <p>Our hospital map is designed to help you navigate our facilities with ease. Whether you're looking for a specific department, clinic, or ward, our map provides clear directions to help you find your way around. If you need assistance, our friendly staff are always available to guide you and answer any questions you may have.</p>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  )
}

export default Map