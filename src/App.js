import React, { useEffect } from "react";
import Header from "./components/Header";
import initialUsers from "./utils/initialUsers";

const App = () => {
  console.log("app start!");
  const setInitialUsers = () => {
    const prevUsers = JSON.parse(localStorage.getItem("users"));
    // console.log(prevUsers, initialUsers);

    if (prevUsers === null) {
      localStorage.setItem("users", JSON.stringify(initialUsers));
    }

    localStorage.setItem("users", JSON.stringify(prevUsers));
  };

  useEffect(() => {
    setInitialUsers();
  });

  return <Header />;
};

export default App;
