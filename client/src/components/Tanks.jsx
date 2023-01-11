import './Tanks.scss'
import React from 'react'

const Tanks = () => {
  return (
    <div className="tank-container">
      <div className="big-tank-container">
        <div className="big-tank"></div>
      </div>
        <div className="small-tank-container">
          <div className="tank"></div>
          <div className="tank"></div>
          <div className="tank"></div>
        </div>
    </div>
  )
}

export default Tanks
