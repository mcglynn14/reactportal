import React from 'react';
import './home.css'; // Importing the CSS file for the Home component
import '../../index.css'; // Importing the CSS file for the entire application
import Hero from '../../components/Hero'; // Importing the Hero component
import Nav from '../../components/Nav'; // Importing the Nav component
import Cando from '../../components/Cando'; // Importing the Cando component
import Gcwhicon from '../../components/Gcwhicon'; // Importing the Gcwhicon component
import Footer from '../../components/Footer'; // Importing the Footer component

const Home = () => {

  return (
    <>
      <header className="bg-white border-b-2 border-ctc-black">
        <Nav /> {/* Rendering the Nav component */}
      </header>
      <Hero title="Welcome to Glasgow Children's Wellness Hospital"/> {/* Rendering the Hero component with a title prop */}
      <Cando /> {/* Rendering the Cando component */}
      <Gcwhicon /> {/* Rendering the Gcwhicon component */}
      <Footer /> {/* Rendering the Footer component */}
    </>
  )
}

export default Home; // Exporting the Home component as the default export