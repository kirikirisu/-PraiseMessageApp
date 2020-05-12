import React, { useState, memo } from "react";
import "./style.css";

const DropDownMenu = memo(({ user, setUser, listItem }) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const handleClickMenu = (val) => {
    setListOpen(false);
    setUser(val);
  };

  return (
    <div className="dropDownMenu">
      <div onClick={() => toggleList()} className="dropDownButton">
        {`${user.name}`}
      </div>
      {listOpen && (
        <div className="dropDownList">
          {listItem.map((user) => (
            <div onClick={() => handleClickMenu(user)} key={user.name}>
              {`${user.name}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default DropDownMenu;
