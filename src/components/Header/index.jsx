import React from "react";
import Dropdown from "./DropDown";
import Icon from "./Icon";
import ClapPoints from "./ClapPoints";
import "./style.css";

const Header = ({ currentUser, setCurrentUser, users }) => (
  <div className="headerContainer">
    <div className="iconDropdown">
      <Dropdown user={currentUser} setUser={setCurrentUser} listItem={users} />
      <Icon icon={currentUser.icon} />
    </div>
    <div>
      <ClapPoints currentUser={currentUser} />
    </div>
  </div>
);

export default Header;
