import React from "react";
import "./Card.css";
import defaultImage from "../../img/Astrology.png"; // Import the default background image

const Card = ({ emoji = defaultImage, heading, detail }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#fff",
        color: "#000",
        borderColor: "darkblue",
      }}
    >
      <div
        className="card-emoji"
        style={{
          backgroundImage: `url(${emoji})`,
        }}
      ></div>
      <span
        className="card-heading"
        style={{
          color: "#666", // Grey text for headings
        }}
      >
        {heading}
      </span>
      <span
        className="card-detail"
        style={{
          color: "#666", // Grey text for details
        }}
      >
        {detail}
      </span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
