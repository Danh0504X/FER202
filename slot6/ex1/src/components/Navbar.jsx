import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand">Stormi</div>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Login
          </NavLink>

          <NavLink to="/manage-users" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Manage Users
          </NavLink>

          <NavLink to="/home" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
