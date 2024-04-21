import React, { useEffect } from 'react';
import './gcwhicon.css';

// Define a functional component called Gcwhicon
const Gcwhicon = () => {
  // useEffect is a hook that runs side effects after the component has rendered
  useEffect(() => {
    // Define a function called slideInOnScroll
    const slideInOnScroll = () => {
      // Get all elements with the class 'gcwhicon'
      const icons = document.querySelectorAll('.gcwhicon');
      
      // Loop through each icon
      icons.forEach(icon => {
        // Get the position of the icon relative to the viewport
        const position = icon.getBoundingClientRect().top;
        
        // Check if the icon is in the viewport
        if (position < window.innerHeight) {
          // Add the 'slide-in' class to the icon
          icon.classList.add('slide-in');
        } else {
          // Remove the 'slide-in' class from the icon
          icon.classList.remove('slide-in');
        }
      });
    };

    // Attach a scroll event listener to the window and call slideInOnScroll
    window.addEventListener('scroll', slideInOnScroll);

    // Clean up by removing the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', slideInOnScroll);
    };
  }, []);

  // Render the component
  return (
    <section className="home-gcwhicon-section">
      <div className="container">
        <img src="assets/img/GCWHicon.svg" alt="" className="gcwhicon-both gcwhicon" loading="lazy" />
        <img src="assets/img/GCWHicon.svg" alt="" className="gcwhicon-desktop gcwhicon" loading="lazy" />
      </div>
    </section>
  );
};

// Export the Gcwhicon component as the default export
export default Gcwhicon;
