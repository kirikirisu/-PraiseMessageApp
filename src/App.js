import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import initialUsers from "./utils/initialUsers";

const App = () => {
  console.log("app start!");

  const [currentUser, setCurrentUser] = useState({});
  const [introduceUser, setIntroduceUser] = useState({});
  const [posts, setPosts] = useState([]);

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

  const setInitialPosts = () => {
    const prevPosts = localStorage.getItem("posts");

    if (prevPosts) {
      setPosts(JSON.parse(prevPosts));
    }
  };

  const upDatePosts = useCallback(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    setInitialUsers();
    setInitialPosts();
  }, []);

  // 投稿した時に起動する
  useEffect(() => {
    upDatePosts();
  }, [posts, upDatePosts]);

  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Post
        introduceUser={introduceUser}
        setIntroduceUser={setIntroduceUser}
        currentUser={currentUser}
        setPosts={setPosts}
        posts={posts}
      />
    </div>
  );
};

export default App;
