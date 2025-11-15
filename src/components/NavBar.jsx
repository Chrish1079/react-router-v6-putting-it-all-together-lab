import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  const activeClass = ({ isActive }) => (isActive ? "active" : "")

  return (
    <nav className="navbar">
      <NavLink to="/" className={activeClass} end>
        Home
      </NavLink>
      <NavLink to="/directors" className={activeClass}>
        Directors
      </NavLink>
      <NavLink to="/about" className={activeClass}>
        About
      </NavLink>
    </nav>
  )
}

export default NavBar
