import React from "react";
import cardImg from "../images/katie-zaferes.png";
import cardStar from "../images/star.png"
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card() {
  return (
    <div className="card">
      <img src={cardImg} alt="The swimmer Katie Zaferes" className="card--img"/>
      <p className="card--status">sold out</p>
      <div className="card-info">
        <img src={cardStar} alt="star rating graphic" className="card--star"/>
        <p>5.0 <span className="card--light">(6) • USA</span></p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="card--bold">From $136</span> / person</p>
    </div>
  );
}

export default Card;
