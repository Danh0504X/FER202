// src/components/Nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const tabs = [
  { to: "/ex1", label: "Bài tập 1" },
  { to: "/ex2", label: "Bài tập 2" },
  { to: "/ex3", label: "Bài tập 3" },
  { to: "/ex4", label: "Bài tập 4" },
];

export default function Nav() {
  return (
    <nav className="appTabs" aria-label="Primary">
      
      {/* LEFT: Lab4 Brand */}
      <NavLink to="/" className="navBrand">
        Lab4
      </NavLink>

      {/* Tabs */}
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) => `appTab ${isActive ? "active" : ""}`}
        >
          {t.label}
        </NavLink>
      ))}

      {/* RIGHT: Vietnam Flag */}
      <div className="navFlagWrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
          alt="Vietnam Flag"
          className="navFlag"
        />
      </div>
    </nav>
  );
}
