import React from "react";

function Card(props) {
  let badgeText;
  if (props.item.openSpots > 1 && props.item.openSpots < 6) {
    badgeText = "LIMITED SPACES";
  } else if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  console.log(props.item)
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
        src={process.env.PUBLIC_URL + `images/${props.item.coverImg}`}
        alt={props.item.imgAlt}
        className="card--img"
      />
      <div className="card-info">
        <img
          src={process.env.PUBLIC_URL + "images/star.png"}
          alt="star rating graphic"
          className="card--star"
        />
        <p>
          {props.item.stats.rating}
          <span className="card--light">
            ({props.item.stats.reviewCount}) • {props.item.location}
          </span>
        </p>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="card--bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
