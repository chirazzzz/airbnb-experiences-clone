import React from "react";
import heroImg from "../images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Airbnb logo" className="hero--img" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--desc">Join unique interactive activities 
        led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
}

export default Hero;
