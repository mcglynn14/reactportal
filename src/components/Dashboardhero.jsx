import React, { useEffect } from 'react';

const Dashboardhero = ({ title, subtitle, firstRowFinished, handleFirstRowFinish }) => {
  useEffect(() => {
    if (firstRowFinished) {
     handleFirstRowFinish(); // Call the handler when firstRowFinished changes to true
    }
  }, [firstRowFinished, handleFirstRowFinish]);

  return (
    <>
      <section className="hero-topsection">
        <h1 className="home-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
      </section> 
    </>
  );
}

export default Dashboardhero;


// {firstRowFinished && (
//   <h2 className="hero-subtitle">{subtitle}</h2>
// )}
