import React, { useState } from "react";

export const Navbar = () => {
  const [navOpen, setnavOpen] = useState(true);
  return (
    <header className="header">
      <div className="hamburger-div">
        <h3 className="logo">teez&amp;feelz</h3>
        <i
          className="fas fa-bars hamburger"
          onClick={() => setnavOpen(!navOpen)}
        ></i>
      </div>

      <div className={navOpen ? "nav-wrapper" : "nav-wrapper nav-open"}>
        <nav className="nav ">
          <ul className="nav-ul">
            <li className="nav-list">HOME</li>
            <li className="nav-list">ABOUT</li>
            <li className="nav-list">LOGIN</li>
            <li className="nav-list">REGISTER</li>
          </ul>
          <div className="socials">
            <i className="fab fa-instagram icon-1"></i> &nbsp;{" "}
            <i className="fab fa-facebook icon-2"></i> &nbsp;{" "}
            <i className="fas fa-shopping-bag icon-3"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
