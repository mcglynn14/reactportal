import React from 'react'
import './candocard.css'

const Candocard = () => {
  return (
    <>
        <div className="candocard">
          <img src="assets/img/gameimg.jpg" alt="" loading="lazy" />
          <p className="candocard-title">Play games</p>
        </div>
        <div className="candocard">
            <img src="assets/img/appointmentimg.webp" alt="" loading="lazy" />
            <p className="candocard-title">View appointments</p>
        </div>
        <div className="candocard">
            <img src="assets/img/departmentimg.webp" alt="" loading="lazy" />
            <p className="candocard-title">Department details</p>
        </div>
        <div className="candocard">
            <img src="assets/img/teamimg.webp" alt="" loading="lazy" />
            <p className="candocard-title">Meet the team</p>
        </div>
    </>
  )
}

export default Candocard