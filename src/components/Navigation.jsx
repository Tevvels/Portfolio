import React, { useState } from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import "../Styles/Navigation.css";
import DarkModeButton from "./DarkModeButton";
function Navigation({ className }) {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`${className} nav`}>
      <div className="nav-left">
        <DarkModeButton />
      </div>
      <div className="nav-right">
        <a
          href="#home"
          className={`nav-Item`}
          onClick={(e) => handleScroll(e, "home")}
          to="/"
        >
          home
        </a>
        <a
          href="#work"
          className={`nav-Item`}
          onClick={(e) => handleScroll(e, "work")}
          to="/MyWork"
        >
          Work
        </a>
        <a
          href="#contact"
          className={`nav-Item`}
          onClick={(e) => handleScroll(e, "contact")}
          to="/contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
