import React, { useState } from "react";
import "./style.css";

const Comment = ({ currentUser, introduceUser, setPosts, posts }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postInfor = {
      createdAt: new Date(),
      introduceUser: currentUser.id,
      introducedUser: introduceUser.id,
      comment: inputValue,
      clapInfor: [],
    };
    // console.log(postInfor);
    setPosts([...posts, postInfor]);
    setInputValue("");
  };

  return (
    <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="投稿" />
    </form>
  );
};

export default Comment;
