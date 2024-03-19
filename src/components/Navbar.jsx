import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="./logo.png" alt="" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact  to="/home" activeClassName="active" className="nav-links"onClick={handleClick}> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" activeClassName="active" className="nav-links"onClick={handleClick}>About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/Portfolio" activeClassName="active" className="nav-links"onClick={handleClick}>Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/Service" activeClassName="active" className="nav-links"onClick={handleClick}>Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" activeClassName="active" className="nav-links"onClick={handleClick}>Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars" }
             
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
