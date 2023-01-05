import './style.css'
import MenuContainer from './menu-container.jsx'
import MenuItem from './menu-item.jsx'

const RightMenu = () => {

  return (
    <section id="right-menu">
      <MenuContainer
        flex="flex"
        top="3%"
        right={20}
        >
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
  )
}

export default RightMenu
