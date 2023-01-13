import './MenuPopup.scss'
import React from 'react'

const MenuPopup = ({ close }) => {
  return (
    <div id="modal" className="popup">
      <p className="popup__menu-title">
        That doesn't really do <br />
        anything yet. Try again later.
      </p>
      <p className="popup__text"></p>

      <button onClick={close}>Close</button>
    </div>
  )
}

export default MenuPopup
