import React, { useEffect } from 'react';
import './gcwhicon.css';

const Gcwhicon = () => {
  useEffect(() => {
    const slideInOnScroll = () => {
      const icons = document.querySelectorAll('.gcwhicon');
      
      icons.forEach(icon => {
        const position = icon.getBoundingClientRect().top;
        // Check if the icon is in the viewport
        if (position < window.innerHeight) {
          icon.classList.add('slide-in'); // Add slide-in class
        } else {
          icon.classList.remove('slide-in'); // Remove slide-in class
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', slideInOnScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', slideInOnScroll);
    };
  }, []);

  return (
    <section className="home-gcwhicon-section">
      <div className="container">
        <img src="assets/img/GCWHicon.svg" alt="" className="gcwhicon-both gcwhicon" loading="lazy" />
        <img src="assets/img/GCWHicon.svg" alt="" className="gcwhicon-desktop gcwhicon" loading="lazy" />
      </div>
    </section>
  );
};

export default Gcwhicon;
