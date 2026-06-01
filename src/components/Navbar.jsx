import { NavLink } from "react-router-dom";
import { FaHome, FaGraduationCap, FaFolderOpen, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <FaHome /> Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/formation" onClick={() => setIsOpen(false)}>
            <FaGraduationCap /> Formation
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            <FaFolderOpen /> Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/experiences" onClick={() => setIsOpen(false)}>
            <FaBriefcase /> Expériences
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
