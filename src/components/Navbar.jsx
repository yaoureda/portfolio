import { NavLink } from "react-router-dom";
import { FaHome, FaGraduationCap, FaFolderOpen } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}><FaHome /> Accueil</NavLink></li>
        <li><NavLink to="/formation" className={({ isActive }) => isActive ? "active" : ""}><FaGraduationCap /> Formation</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}><FaFolderOpen /> Projets</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
