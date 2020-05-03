import React from "react";
import "./style.css";

const Icon = ({ icon }) => (
  <div className="iconContainer">
    <img className="icon" src={icon} alt="icon" />
  </div>
);

export default Icon;
