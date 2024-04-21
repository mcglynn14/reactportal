import React from 'react'
import './footer.css';

// Define a functional component called Footer
const Footer = () => {
  return (
    <>
        {/* Start of footer */}
        <footer className="">
            {/* Start of copyright section */}
            <div className="copyright">
                <p className="text-center">&copy; 2024 Glasgow Children's Wellness Hospital</p>
            </div>
            {/* End of copyright section */}
        </footer>
        {/* End of footer */}
    </>
  )
}

// Export the Footer component as the default export
export default Footer