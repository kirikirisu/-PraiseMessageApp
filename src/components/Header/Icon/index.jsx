import React, { memo } from "react";
import "./style.css";

const Icon = memo(({ icon }) => (
  <div className="iconContainer">
    <img className="icon" src={icon} alt="icon" />
  </div>
));

export default Icon;
