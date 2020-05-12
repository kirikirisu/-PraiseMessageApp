import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
import initialUsers from "./users";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [introduceUser, setIntroduceUser] = useState({});

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const setInitialUsers = () => {
    // https://teratail.com/questions/74962
    const prevUsers = localStorage.getItem("users");

    if (!prevUsers) {
      localStorage.setItem("users", JSON.stringify(initialUsers));

      setCurrentUser(initialUsers[0]);
      setIntroduceUser(initialUsers[1]);
      setUsers(initialUsers);
    } else if (prevUsers) {
      const parsed = JSON.parse(prevUsers);

      setCurrentUser(parsed[0]);
      setIntroduceUser(parsed[1]);
      setUsers(parsed);
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

  const upDateUsers = useCallback(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    setInitialUsers();
    setInitialPosts();
  }, []);

  useEffect(() => {
    upDatePosts();
  }, [posts, upDatePosts]);

  useEffect(() => {
    upDateUsers();
  }, [upDateUsers, users]);

  return (
    <div className="app">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        users={users}
      />
      <Post
        introduceUser={introduceUser}
        setIntroduceUser={setIntroduceUser}
        currentUser={currentUser}
        setPosts={setPosts}
        posts={posts}
        users={users}
      />
      <PostList
        posts={posts}
        users={users}
        currnetUser={currentUser}
        setUsers={setUsers}
        setPosts={setPosts}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
};

export default App;
