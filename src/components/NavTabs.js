import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <div>
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Skills"
          className={location.pathname === "/Skills" ? "nav-link active" : "nav-link"}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact"className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
      </li>
    </ul>
    </div>
  
  );
}

export default NavTabs;
