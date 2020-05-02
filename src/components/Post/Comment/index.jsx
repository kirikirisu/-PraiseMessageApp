import React, { useState } from "react";
import "./style.css";

const Coment = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(`${inputValue}`);
  };

  return (
    <form className="formContainer" onSubmit={() => handleSubmit()}>
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

export default Coment;
