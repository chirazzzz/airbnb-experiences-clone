import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + `images/${props.img}`}
        alt={props.imgAlt}
        className="card--img"
      />
      <p className="card--status">sold out</p>
      <div className="card-info">
        <img
          src={process.env.PUBLIC_URL + "images/star.png"}
          alt="star rating graphic"
          className="card--star"
        />
        <p>
          {props.rating}
          <span className="card--light">
            ({props.reviewCount}) • {props.location}
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="card--bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
