import React from 'react'
import './hero.css'

const Hero = ({ title, dashboardtitle, loginsubtitle, logintitle }) => {
  return (
    <section className="home-topsection hero-topsection">
        <h1 className="home-title">{title}{dashboardtitle}{logintitle}</h1>
        <h2 className="hero-subtitle">{loginsubtitle} </h2>
    </section>
  )
}

export default Hero