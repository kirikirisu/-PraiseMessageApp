import React from "react";
import "./style.css";

const Icon = ({ currentUser }) => (
  <div className="iconContainer">
    <img className="icon" src={currentUser.icon} alt="icon" />
  </div>
);

export default Icon;
