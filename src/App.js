import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import initialUsers from "./utils/initialUsers";

const App = () => {
  console.log("app start!");

  const [currentUser, setCurrentUser] = useState({});
  const [introduceUser, setIntroduceUser] = useState({});

  const setInitialUsers = () => {
    // https://teratail.com/questions/74962
    const prevUsers = localStorage.getItem("users");

    if (!prevUsers) {
      localStorage.setItem("users", JSON.stringify(initialUsers));
      setCurrentUser(initialUsers[0]);
      setIntroduceUser(initialUsers[1]);
    } else if (prevUsers) {
      const parsed = JSON.parse(prevUsers);
      // console.log(parsed[0]);
      setCurrentUser(parsed[0]);
      setIntroduceUser(parsed[1]);
    }
  };

  useEffect(() => {
    setInitialUsers();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Post
        introduceUser={introduceUser}
        setIntroduceUser={setIntroduceUser}
        currentUser={currentUser}
      />
    </div>
  );
};

export default App;
