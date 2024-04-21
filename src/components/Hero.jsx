// Import the necessary dependencies
import React from 'react'
import './hero.css' // Import the CSS file for styling

// Define the Hero component
const Hero = ({ title, dashboardtitle, loginsubtitle, logintitle }) => {
  return (
    // Render a section with the class names "home-topsection" and "hero-topsection"
    <section className="home-topsection hero-topsection">
        {/* Render the title, dashboard title, and login title */}
        <h1 className="home-title">{title}{dashboardtitle}{logintitle}</h1>
        {/* Render the login subtitle */}
        <h2 className="hero-subtitle">{loginsubtitle} </h2>
    </section>
  )
}

// Export the Hero component as the default export
export default Hero