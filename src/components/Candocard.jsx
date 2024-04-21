import React from 'react'
import './candocard.css'

const Candocard = () => {
  return (
    <>
        {/* Card 1 */}
        <div className="candocard">
          <img src="assets/img/gameimg.jpg" alt="" loading="lazy" />
          <p className="candocard-title">Play games</p>
        </div>
        
        {/* Card 2 */}
        <div className="candocard">
            <img src="assets/img/appointmentimg.webp" alt="" loading="lazy" />
            <p className="candocard-title">View appointments</p>
        </div>
        
        {/* Card 3 */}
        <div className="candocard">
            <img src="assets/img/departmentimg.webp" alt="" loading="lazy" />
            <p className="candocard-title">Department details</p>
        </div>
        
        {/* Card 4 */}
        <div className="candocard">
            <img src="assets/img/teamimg.webp" alt="" loading="lazy" />
            <p className="candocard-title">Meet the team</p>
        </div>
    </>
  )
}

export default Candocard