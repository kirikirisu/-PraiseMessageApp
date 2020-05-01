import React, { Fragment } from "react";
import Dropdown from "./DropDown";
import Icon from "./Icon";
import ClapPoints from "./ClapPoints";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <Fragment>
      <Icon currentUser={currentUser} />
      <Dropdown currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <ClapPoints currentUser={currentUser} />
    </Fragment>
  );
};

export default Header;
