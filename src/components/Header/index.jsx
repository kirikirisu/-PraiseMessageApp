import React from "react";
import Dropdown from "./DropDown";
import Icon from "./Icon";
import ClapPoints from "./ClapPoints";
import "./style.css";

const Header = ({ currentUser, setCurrentUser }) => {
  const listItem = JSON.parse(localStorage.getItem("users"));

  // console.log(listItem);
  return (
    <div className="headerContainer">
      <div className="iconDropdown">
        <Icon icon={currentUser.icon} />
        <Dropdown
          user={currentUser}
          setUser={setCurrentUser}
          listItem={listItem}
        />
      </div>
      <ClapPoints currentUser={currentUser} />
    </div>
  );
};

export default Header;
