import './style.css'
import MenuItem from './menu-item.jsx'

const MenuContainer = ({ 
  children,
  flex,
  top,
  left,
  right,
  bottom,
  options,
  width="4vw",
  height="4vw" 
}) => {
  return (
    <div className="menu-container"
      style={{ display: flex, top, right, left, bottom }}
    >
     { children || options.map((item, i) => {
          return <MenuItem 
            label={item} 
            key={i}
            width={width}
            height={height} />
        }) } 
    </div>
  )
}

export default MenuContainer
