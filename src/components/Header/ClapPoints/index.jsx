import React, { memo } from "react";
import "./style.css";

const ClapPoints = memo(({ currentUser }) => (
  <div className="pointsContainer">
    <p className="clap">{`拍手できる: ${currentUser.clapPt}`}</p>
    <p className="claped">{`拍手された: ${currentUser.clapedPt}`}</p>
  </div>
));

export default ClapPoints;
