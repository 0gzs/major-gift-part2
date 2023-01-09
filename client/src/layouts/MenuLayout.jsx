import React from 'react'
import '../assets/sass/layouts/MenuLayout.scss'
import MenuContainer from "../components/MenuContainer";
import MenuItem from '../components/MenuItem.jsx'

const MenuLayout = ({ children }) => {
  return (
    <div className="menuLayout">
      <section id="left-menu">
        <MenuContainer
          left={20}
          top="5%"
          options={["Profiles", "Schedule", "Notepad", "Shark Wiki", "Mini Game"]} />
        <MenuContainer
          left={20}
          bottom="2%"
          options={["Customize"]} />
      </section>
      
      { children }

      <section id="right-menu">
        <MenuContainer
          flex="flex"
          top="3%"
          right={20}>
          <MenuItem 
            width="3vw"
            height="3vw"
            marginRight="1em"
          />
          <MenuItem 
            width="3vw"
            height="3vw"
            marginRight="1em"
          />
          <MenuItem 
            width="3vw"
            height="3vw"
            marginRight="1em"
          />
        </MenuContainer>

        <MenuContainer 
          top="12%"
          right={"2vw"}
          options={["Achievements"]} />
        <MenuContainer 
          bottom="20%"
          right={"2vw"}
          options={["Add donor", "Remove donor"]} />
      </section> 
    </div>
  )
}

export default MenuLayout
