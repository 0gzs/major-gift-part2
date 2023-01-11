import './Menus.scss'
import React from 'react'

const MenuBtn = ({ marginTop }) => {
  return <div className="menu-btn" style={{ marginTop: marginTop }}></div> 
}

const Menus = ({ children }) => {
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
      { children }
      <div className="menu right-menu">
        <MenuBtn />
        <MenuBtn marginTop={"3.5vw"} />
        <MenuBtn />
      </div>
    </>
  )
}

export default Menus
