import './Tanks.scss'
import React, { useState, useEffect } from 'react'

const Tanks = () => {
  const tanks = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const [tankSelected, setTankSelected] = useState(false)
  const [sharkOptions, setSharkOptions] = useState(null)
  const [count, setCount] = useState(0)

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

  const moveSharkLeft = () => {
    let shark = document.getElementById('shark')

    shark.classList.remove('moveSharkRight')
    shark.classList.add('moveSharkLeft')
  }

  const moveSharkRight = () => {
    let shark = document.getElementById('shark')

    shark.classList.remove('moveSharkLeft')
    shark.classList.add('moveSharkRight')
  }

  const sharkOpts = () => {
    setSharkOptions(true)
  }

  useEffect(() => {
    let newCount = count + 1
    setTimeout(moveSharkLeft, 500)
    setTimeout(moveSharkRight, 15000)
    setTimeout(() => {
      setCount(newCount)
    }, 25000)
  }, [count])

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
              <img onClick={sharkOpts} id="shark" className="shark" src="https://i.imgur.com/GcLRw0s.png" />
            </div>
          )
        })}
      </div>
      {sharkOptions && (
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
          <button className='button' onClick={() => setSharkOptions(false)}>close</button>
        </div>
      )}
    </>
  )
}

export default Tanks
