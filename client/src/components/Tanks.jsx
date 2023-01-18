import './Tanks.scss'
import React, { useState, useEffect } from 'react'

const Tanks = () => {
  const [tankSelected, setTankSelected] = useState(false)
  const [tanks, setTanks] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])

  const zoomIn = id => {
    let tank = document.getElementById(`${id}`)
    tank.classList.add(`tank${id}ZoomedIn`)
    tank.style.zIndex = 10
    setTankSelected(true)
  }

  const zoomOut = id => {
    let tank = document.getElementById(`${id}`)
    tank.classList.remove(`tank${id}ZoomedIn`)
    tank.style.zIndex = 0
    setTankSelected(false)
  }

  const triggerZoom = id => {
    if (tankSelected) zoomOut(id)
    else zoomIn(id)
  }

  return (
    <>
      <div className="big-tank-container">
        <div className="big-tank"></div>
      </div>
        <div className="small-tank-container">
          {tanks.map(tank => {
            return (
              <div key={tank.id} className='tank' id={`${tank.id}`}>
                <div className='zoomTrigger' onClick={() => triggerZoom(`${tank.id}`)}></div>
              </div>
            )})}
        </div>
    </>
  )
}

export default Tanks
