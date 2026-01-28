// src/components/Nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const tabs = [
  { to: "/ex1", label: "Bài tập 1" },
  { to: "/ex2", label: "Bài tập 2" },
  { to: "/ex3", label: "Bài tập 3" },
  { to: "/ex4", label: "Bài tập 4" },
  { to: "/ex5", label: "Bài tập 5" },
];

export default function Nav() {
  return (
    <nav className="appTabs" aria-label="Primary">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) => `appTab ${isActive ? "active" : ""}`}
          end
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
