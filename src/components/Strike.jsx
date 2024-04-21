import React from 'react'
import './strike.css';

// Define a functional component called Strike
const Strike = ( {strikeClass} ) => {
  // Render a div element with the class name 'strike' and the value of strikeClass
  return (
    <div className={`strike ${strikeClass}`}></div>
  )
}

// Export the Strike component as the default export
export default Strike