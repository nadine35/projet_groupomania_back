import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/Trending" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Trending</li>
        </NavLink>
        <NavLink
          to="/Profil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Profil</li>
        </NavLink>
        
      </ul>
    </div>
  );
};

export default Navigation;
