import React from 'react'

const MenuItem = ({ label, width, height, marginRight }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="menu-item" 
        style={{ width, height, marginRight  }}  
      >
        <p>ICON</p>
      </div>
      {label && <p className="label">{label}</p> }
    </div>
  )
}

export default MenuItem
