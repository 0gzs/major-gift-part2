import React from 'react';
import { createRoot } from 'react-dom/client'
import './global.scss'

import PageLayout from './layouts/MenuLayout.jsx'
import TanksContainer from './components/TankContainer.jsx';

const container = document.getElementById('app')
const root = createRoot(container)

function App() {
  return (
    <>
      <PageLayout>
        <h2 style={{ fontSize: "calc(10% + 2vmin)" }}>Welcome, User</h2>
        <TanksContainer />
      </PageLayout>
    </>
  )
}

root.render(<App />)
