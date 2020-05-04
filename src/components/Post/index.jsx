import React, { useEffect, useState } from "react";
import Icon from "../Header/Icon";
import Dropdown from "../Header/DropDown";
import Comment from "./Comment";
import "./style.css";

// https://stackoverflow.com/questions/57853288/react-warning-maximum-update-depth-exceeded
const createPostItem = (
  currentUser,
  callback,
  introduceUser,
  setIntroduceUser,
  users
) => {
  const item = users.filter((user) => user.name !== currentUser.name);
  callback(item);
  if (currentUser.name === introduceUser.name) {
    setIntroduceUser(item[0]);
  }
};

const Post = ({
  introduceUser,
  setIntroduceUser,
  currentUser,
  setPosts,
  posts,
  users,
}) => {
  const [listItem, setListItem] = useState([]);
  // console.log(introduceUser);
  useEffect(() => {
    if (users) {
      createPostItem(
        currentUser,
        setListItem,
        introduceUser,
        setIntroduceUser,
        users
      );
    }
  }, [currentUser, introduceUser, setIntroduceUser, users]);

  return (
    <div className="postContainer">
      <Icon icon={introduceUser.icon} />
      <Dropdown
        user={introduceUser}
        setUser={setIntroduceUser}
        listItem={listItem}
      />
      <Comment
        currentUser={currentUser}
        introduceUser={introduceUser}
        setPosts={setPosts}
        posts={posts}
      />
    </div>
  );
};

export default Post;
