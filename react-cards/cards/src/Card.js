import React, { useState } from "react";
import "./Card.css";

function Card({ name, image }) {
  const [angle, setAngle] = useState(Math.random() * 90 - 45);
  const [xPos, setXPos] = useState(Math.random() * 40 - 20);
  const [yPos, setYPos] = useState(Math.random() * 40 - 20);

  const cardStyle = {
    transform: `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`,
  };

  return (
    <img
      className="Card"
      alt={name}
      src={image}
      style={cardStyle}
    />
  );
}

export default Card;

