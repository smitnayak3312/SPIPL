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
          <NavLink exact="true" to="/" className="nav-logo">
            <img src="./logo.png" alt="" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact="true"  to="/" activeclassname="active" className="nav-links"onClick={handleClick}> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" to="/about" activeclassname="active" className="nav-links"onClick={handleClick}>About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" to="/Portfolio" activeclassname="active" className="nav-links"onClick={handleClick}>Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" to="/Service" activeclassname="active" className="nav-links"onClick={handleClick}>Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" to="/Team" activeclassname="active" className="nav-links"onClick={handleClick}>Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" to="/contact" activeclassname="active" className="nav-links"onClick={handleClick}>Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" to="/career" activeclassname="active" className="nav-links"onClick={handleClick}>Careear
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
