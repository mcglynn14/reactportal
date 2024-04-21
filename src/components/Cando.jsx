import React from 'react' // Importing the React library
import Candocard from './Candocard' // Importing the Candocard component
import './cando.css' // Importing the cando.css file

const Cando = () => { // Defining the Cando component
  return (
    <section className="home-cando"> {/* Creating a section with the class "home-cando" */}
        <h2 className="home-candotitle">What can you do</h2> {/* Creating an h2 element with the class "home-candotitle" */}
        <Candocard /> {/* Rendering the Candocard component */}
    </section>
  )
}

export default Cando // Exporting the Cando component as the default export