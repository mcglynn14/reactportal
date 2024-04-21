import React from 'react'

const Nurse = ( {nurse_name, nurse_image} ) => {
  return (
    <>
        <div className=""> {/* Start of outer div */}
            <div className=""> {/* Start of inner div */}
                <img src={`assets/img/staff/${nurse_image}`} alt="Department nurse" className="" /> {/* Nurse image */}
                <div className=""> {/* Start of inner div */}
                    <h3 className="">{nurse_name}</h3> {/* Nurse name */}
                    <p className=""> {/* Nurse description */}
                        Just like how a hospital has superhero doctors, it also has a superhero nurse who is like the captain of the nursing team. 
                        This superhero nurse is called the head nurse of the department. The head nurse is really good at taking care of patients and helps all the other nurses do their jobs well. 
                        They make sure everyone has what they need, like band-aids and medicine, and they keep everything organized. 
                        The head nurse is like the team leader, making sure all the nurses work together smoothly, helping the doctors, and making sure patients feel safe and cared for. 
                        They're a bit like the caring captain of a big ship, making sure everything sails smoothly and everyone is happy and healthy.
                    </p>
                </div> {/* End of inner div */}
            </div> {/* End of inner div */}
        </div> {/* End of outer div */}
    </>
  )
}

export default Nurse