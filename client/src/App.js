import './app.css'
import LeftMenu from './components/menus/left-menu.jsx'
import RightMenu from './components/menus/right-menu.jsx'
import TanksContainer from './components/tanks/tanks-container';

function App() {
  return (
    <div className="app">
      <h2 style={{ fontSize: "calc(10% + 2vmin)" }}>Welcome, User</h2>
      <LeftMenu />      

      <RightMenu />
      <TanksContainer />
      
    </div>
  );
}

export default App;
