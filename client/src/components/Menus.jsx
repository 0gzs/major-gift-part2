import './Menus.scss'
import React, { useState } from 'react'
import MenuPopup from './MenuPopup'

const MenuBtn = ({ marginTop }) => {
  const [showPopup, setShowPopup] = useState(false)

  const handleBtnClick = () => setShowPopup(!showPopup)

  return (
    <>
      <div onClick={handleBtnClick} className="menu-btn" style={{ marginTop: marginTop }}></div> 
      { showPopup ? 
        <MenuPopup close={handleBtnClick}/> 
      : null }
    </>
  )
}

const Menus = () => {
  return (
    <>
      <div className="top-menu">
        <MenuBtn />
        <MenuBtn />
        <MenuBtn />
      </div>
      <div className="menu left-menu">
        <MenuBtn />
        <MenuBtn />
        <MenuBtn />
        <MenuBtn />
        <MenuBtn />
        <MenuBtn />
      </div>
      <div className="menu right-menu">
        <MenuBtn />
        <MenuBtn marginTop={"3.5vw"} />
        <MenuBtn />
      </div>
    </>
  )
}

export default Menus
