import MenuContainer from './menu-container.jsx'

const LeftMenu = () => {
  return (
    <section id="left-menu">
      <MenuContainer 
        left={20}
        top="5%"
        options={["Profiles", "Schedule", "Notepad", "Shark Wiki", "Mini Game"]}
      />
      <MenuContainer 
        left={20}
        bottom="2%"
        options={["Customize"]} />
    </section>
  ) }

export default LeftMenu
