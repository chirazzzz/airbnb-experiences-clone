import React from "react";
import heroImg from "../images/photo-grid.png";

function Hero() {
  return (
    <main className="hero">
      <img src={heroImg} alt="Airbnb logo" className="hero--img" />
      <div className="hero--text">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--desc">Join unique interactive activities 
        led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </main>
  );
}

export default Hero;
