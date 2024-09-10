import React from "react";
import "./index.css";

const Nav = () => {
  return (
    <div className="vertical-navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
