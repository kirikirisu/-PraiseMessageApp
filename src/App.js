import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import initialUsers from "./utils/initialUsers";

const App = () => {
  console.log("app start!");

  const [currentUser, setCurrentUser] = useState({});

  const setInitialUsers = () => {
    // https://teratail.com/questions/74962
    const prevUsers = localStorage.getItem("users");
    // console.log(prevUsers, initialUsers);

    if (!prevUsers) {
      localStorage.setItem("users", JSON.stringify(initialUsers));
    }
  };

  useEffect(() => {
    setInitialUsers();
    setCurrentUser(initialUsers[0]);
  }, []);

  return <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />;
};

export default App;
