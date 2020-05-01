import React, { Fragment } from "react";
import Dropdown from "./DropDown";
import Icon from "./Icon";
import ClapPoints from "./ClapPoints";
import "./style.css";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="headerContainer">
      <div className="iconDropdown">
        <Icon currentUser={currentUser} />
        <Dropdown currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      <ClapPoints currentUser={currentUser} />
    </div>
  );
};

export default Header;
