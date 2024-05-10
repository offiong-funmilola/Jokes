import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="menu">
      <nav className="menu-nav">
        <NavLink to='/' className={({isActive}) => isActive? 'active': 'items'}>New Jokes</NavLink>
        <NavLink to='/library' className={({isActive}) => isActive ? 'active': 'items'}>Library</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
