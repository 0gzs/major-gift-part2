import '../assets/sass/components/Tanks.scss'
import React from 'react'
import Tank from './Tank.jsx'

const TanksContainer = () => {
  return (
    <div id="tanks-container">
      <Tank 
        width="100%"
        height="calc(95% - ((750 / 1610 * 30vw)))"
      />

      <div id="bottom-tanks">
        <Tank />
        <Tank />
        <Tank />
      </div>
    </div>
  )
}

export default TanksContainer
