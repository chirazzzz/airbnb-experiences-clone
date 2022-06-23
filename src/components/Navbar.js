import React from "react";
import logoImg from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoImg} alt="Airbnb logo" className="nav--logo" />
    </nav>
  );
}

export default Navbar;
