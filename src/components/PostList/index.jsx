import React from "react";
import Icon from "../Header/Icon";
import "./style.css";

const arrowImg =
  "https://frame-illust.com/fi/wp-content/uploads/2018/03/yajirushi-tegaki-03.png";

const formatDate = (date, format) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  format = format.replace(/HH/, date.getHours());
  format = format.replace(/SS/, date.getMinutes());

  return format;
};

const PostList = ({ posts }) => {
  const users = JSON.parse(localStorage.getItem("users"));
  const ascPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      {[
        ascPosts.map((post) => {
          const introduceUserData = users.filter(
            (user) => user.id === post.introduceUser
          );
          const introducedUserData = users.filter(
            (user) => user.id === post.introducedUser
          );
          return (
            <div key={post.createdAt} className="itemContainer">
              <div className="icons">
                <Icon icon={introduceUserData[0].icon} />
                <Icon icon={arrowImg} />
                <Icon icon={introducedUserData[0].icon} />
              </div>
              <div className="comment">{`${post.comment}`}</div>
              <div className="commentDate">
                <div>hogehgoe</div>
                <div>
                  {formatDate(new Date(post.createdAt), "YYYY/MM/DD HH:SS")}
                </div>
              </div>
            </div>
          );
        }),
      ]}
    </div>
  );
};

export default PostList;
