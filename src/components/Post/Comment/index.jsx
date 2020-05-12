import React, { useState, useEffect, useCallback, memo } from "react";
import "./style.css";

const Comment = memo(({ currentUser, introduceUser, setPosts, posts }) => {
  const [inputValue, setInputValue] = useState("");
  const [isNotExist, setIsNotExist] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const judgText = useCallback(() => {
    if (inputValue.trim().length >= 5) {
      setIsNotExist(false);
    } else {
      setIsNotExist(true);
    }
  }, [inputValue]);

  useEffect(() => {
    judgText();
  }, [inputValue, judgText]);

  return (
    <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input"
        placeholder="投稿には５文字以上必要です"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        style={{ cursor: isNotExist ? "not-allowed" : "pointer" }}
        className="inputButton"
        type="submit"
        value="投稿"
        disabled={isNotExist}
      />
    </form>
  );
});

export default Comment;
