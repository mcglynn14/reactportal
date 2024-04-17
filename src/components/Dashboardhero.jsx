import React from 'react'

const Dashboardhero = ({title, subtitle}) => {
  return (
    <>
        <section className="hero-topsection">
            <h1 className="home-title">{title}</h1>
            <h2 className="hero-subtitle">{subtitle} </h2>
        </section>
    </>
  )
}

export default Dashboardhero