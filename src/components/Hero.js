import React from "react";

function Hero() {
  return (
    <section className="hero">
      <img
        src={process.env.PUBLIC_URL + "images/photo-grid.png"}
        alt="grid showing possible experiences"
        className="hero--img"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--desc">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
