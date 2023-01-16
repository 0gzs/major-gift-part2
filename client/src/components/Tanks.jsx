import './Tanks.scss'
import React, { useState, useEffect } from 'react'

const Tanks = () => {
  const [tankSelected, setTankSelected] = useState(false)
  const [tanks, setTanks] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])

  const selectTank = id => {
    let tank = document.getElementById(`${id}`)

    tank.style.position = "relative"
  
    id == 1 ? tank.style.transform = 'scale(2) translate(50%, -50%)' :
    id == 2 ? tank.style.transform = 'scale(2) translateY(-50%)' :
    tank.style.transform = 'scale(2) translate(-50%, -50%)' 
  }

  return (
    <>
      <div className="big-tank-container">
        <div className="big-tank"></div>
      </div>
        <div className="small-tank-container">
          {tanks.map(tank => <div className='tank' id={`${tank.id}`} onClick={() => selectTank(`${tank.id}`)}></div>)}
        </div>
    </>
  )
}

export default Tanks
