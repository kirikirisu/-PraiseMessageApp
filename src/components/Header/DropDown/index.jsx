import React, { useState } from "react";

const DropDownMenu = ({ currentUser, setCurrentUser }) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const handleClickMenu = (val) => {
    setListOpen(false);
    setCurrentUser(val);
  };

  const listItem = JSON.parse(localStorage.getItem("users"));
  // console.log(listItem);

  return (
    <div style={styles.dropDownMenu}>
      <div onClick={() => toggleList()} style={styles.menuButton}>
        {`${currentUser.name}`}
      </div>
      {listOpen && (
        <div style={styles.menuBox}>
          {listItem.map((user) => (
            <div onClick={() => handleClickMenu(user)} key={user.id}>
              {`${user.name}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  dropDownMenu: {
    position: "relative",
    margin: 5,
  },
  menuButton: {
    display: "inline",
    cursor: "pointer",
    border: "1px solid black",
    padding: "3px 5px",
  },
  menuBox: {
    position: "absolute",
    top: "23px",
    width: "120px",
    zIndex: 1,
    cursor: "pointer",
    border: "1px solid black",
  },
  menuContent: {
    padding: "3px 5px",
    borderBottom: "1px solid black",
  },
  lastMenuContent: {
    padding: "3px 5px",
  },
};

export default DropDownMenu;
