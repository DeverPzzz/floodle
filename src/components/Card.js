import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card__dot card__dot--visible"></div>
      <div className="card__date">{props.card.cardDate}</div>
      <div className="card__discription">{props.card.cardDiscription}</div>
    </div>
  );
}

export default Card;
