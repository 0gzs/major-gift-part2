import React from 'react';
import { createRoot } from 'react-dom/client'
import $ from './global.scss'

import LeftMenu from './components/menus/left-menu.jsx'
import RightMenu from './components/menus/right-menu.jsx'
import TanksContainer from './components/tanks/tanks-container';

const container = document.getElementById('app')
const root = createRoot(container)

function App() {
  return (
    <div className="app">
      <h2 style={{ fontSize: "calc(10% + 2vmin)" }}>Welcome, User</h2>
      <LeftMenu />      

      <RightMenu />
      <TanksContainer />
      
    </div>
  )
}

root.render(<App />)
