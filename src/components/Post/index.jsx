import React, { useEffect, useState } from "react";
import Icon from "../Header/Icon";
import Dropdown from "../Header/DropDown";
import "./style.css";

// https://stackoverflow.com/questions/57853288/react-warning-maximum-update-depth-exceeded
const createPostItem = (currentUser, callback) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const item = users.filter((user) => user.name !== currentUser.name);
  callback(item);
};

const Post = ({ introduceUser, setIntroduceUser, currentUser }) => {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    createPostItem(currentUser, setListItem);
  }, [currentUser]);

  return (
    <div className="postContainer">
      <Icon icon={introduceUser.icon} />
      <Dropdown
        user={introduceUser}
        setUser={setIntroduceUser}
        listItem={listItem}
      />
    </div>
  );
};

export default Post;
