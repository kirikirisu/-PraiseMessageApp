import React, { useEffect, useState, memo } from "react";
import Icon from "../Header/Icon";
import Dropdown from "../Header/DropDown";
import Comment from "./Comment";
import "./style.css";

// https://stackoverflow.com/questions/57853288/react-warning-maximum-update-depth-exceeded
const createPostUsers = (
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

const Post = memo(
  ({
    introduceUser,
    setIntroduceUser,
    currentUser,
    setPosts,
    posts,
    users,
  }) => {
    const [listItem, setListItem] = useState([]);
    useEffect(() => {
      if (users) {
        createPostUsers(
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
        <div className="postDropdown">
          <Icon icon={introduceUser.icon} />
          <Dropdown
            user={introduceUser}
            setUser={setIntroduceUser}
            listItem={listItem}
          />
        </div>
        <div>
          <Comment
            currentUser={currentUser}
            introduceUser={introduceUser}
            setPosts={setPosts}
            posts={posts}
          />
        </div>
      </div>
    );
  }
);

export default Post;
