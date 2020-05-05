import React, { useState } from "react";
import "./style.css";

const Comment = ({ currentUser, introduceUser, setPosts, posts }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue.trim().length);

    if (inputValue.trim().length < 5) {
      alert("投稿には５文字以上必要です");
    } else {
      const postInfor = {
        createdAt: new Date(),
        introduceUser: currentUser.id,
        introducedUser: introduceUser.id,
        comment: inputValue,
        clapInfor: [],
      };
      setPosts([...posts, postInfor]);
      setInputValue("");
    }
  };

  return (
    <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input"
        placeholder="投稿には５文字以上必要です"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input className="inputButton" type="submit" value="投稿" />
    </form>
  );
};

export default Comment;
