import React from 'react'
import Nav from '../../components/Nav'; // Importing the Nav component
import Hero from '../../components/Hero'; // Importing the Hero component
import Gcwhicon from '../../components/Gcwhicon'; // Importing the Gcwhicon component
import Footer from '../../components/Footer'; // Importing the Footer component

const Map = () => {
  return (
    <>
      <header className="">
        <Nav /> {/* Rendering the Nav component */}
      </header>
      <Hero title="Map" /> {/* Rendering the Hero component with a title prop */}
      <section className="map flex justify-center items-center">
        <div className="flex justify-center flex-col items-center">
          <h2>Map</h2> {/* Displaying a heading */}
          <p className="px-5">Our hospital map is designed to help you navigate our facilities with ease. Whether you're looking for a specific department, clinic, or ward, our map provides clear directions to help you find your way around. If you need assistance, our friendly staff are always available to guide you and answer any questions you may have.</p> {/* Displaying a paragraph */}
          <img src="assets/img/ground-floor-map-updated-22012024.png" alt="" /> {/* Displaying an image */}
          <img src="assets/img/2-first-floor.jpg" alt="" /> {/* Displaying an image */}
          <img src="assets/img/3-third-floor.jpg" alt="" /> {/* Displaying an image */}
          <img src="assets/img/third-floor-map-updated-22012024.png" alt="" /> {/* Displaying an image */}
          <img src="assets/img/5-fourth-floor.jpg" alt="" /> {/* Displaying an image */}
        </div>
      </section>
      <Gcwhicon /> {/* Rendering the Gcwhicon component */}
      <Footer /> {/* Rendering the Footer component */}
    </>
  )
}

export default Map // Exporting the Map component as the default export