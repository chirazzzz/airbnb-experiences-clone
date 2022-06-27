import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots > 1 && props.openSpots < 6) {
    badgeText = "LIMITED SPACES";
  } else if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  console.log(props)
  // img={item.coverImg}
  // imgAlt={item.imgAlt}
  // rating={item.stats.rating}
  // reviewCount={item.stats.reviewCount}
  // location={item.location}
  // title={item.title}
  // price={item.price}
  // openSpots={item.openSpots}

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + `images/${props.coverImg}`}
        alt={props.imgAlt}
        className="card--img"
      />
      <div className="card-info">
        <img
          src={process.env.PUBLIC_URL + "images/star.png"}
          alt="star rating graphic"
          className="card--star"
        />
        <p>
          {props.stats.rating}
          <span className="card--light">
            ({props.stats.reviewCount}) • {props.location}
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
