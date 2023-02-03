import './Tanks.scss'
import React, { useState } from 'react'
import Tank from './Tank'

const Tanks = () => {
  const [tankSelected, setTankSelected] = useState(false)
  const [sharkMenu, setSharkMenu] = useState(false)

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
 
  const optionsHandler = () => setSharkMenu(!sharkMenu)
  
  return (
    <>
      <div className="big-tank-container">
        <div className="big-tank"></div>
      </div>
      <div className="small-tank-container">
        {[1, 2, 3].map(tankId => {
          return <Tank id={tankId} key={tankId} zoom={triggerZoom} optionsHandler={optionsHandler} />
        })}
      </div>

      {sharkMenu && (
        <div className='sharkOptionsBubble'>
          <h1>Little Shark</h1>
          <div className='sharkOptionSelect'>
            Option 1
          </div>
          <div className='sharkOptionSelect'>
            Option 1
          </div>
          <div className='sharkOptionSelect'>
            Option 1
          </div>
          <button className='button' onClick={optionsHandler}>close</button>
        </div>
      )}
    </>
  )
}

export default Tanks
