import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        src={process.env.PUBLIC_URL + "images/airbnb-logo.png"}
        alt="Airbnb logo"
        className="nav--logo"
      />
    </nav>
  );
}

export default Navbar;
