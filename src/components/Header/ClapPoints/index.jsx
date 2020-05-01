import React from "react";
import "./style.css";

const ClapPoints = ({ currentUser }) => (
  <div className="pointsContainer">
    <p>{`拍手できる: ${currentUser.clapPt}`}</p>
    <p>{`拍手された: ${currentUser.clapedPt}`}</p>
  </div>
);

export default ClapPoints;
