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

const PostList = ({ posts, users, currnetUser, setUsers }) => {
  const ascPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const hundleClap = (introduceUser, introducedUser) => {
    console.log("click!");
    const introduceId = introduceUser[0].id;
    const introducedId = introducedUser[0].id;
    console.log(currnetUser.id, introduceId, introducedId);

    if (currnetUser.id === introduceId || currnetUser.id === introducedId) {
      alert("紹介した人/された人は拍手できません");
    } else {
      const newUsers = users.map((user) => {
        if (user.id === currnetUser.id) {
          user.clapPt -= 2;
          return user;
        }

        if (user.id === introduceId) {
          user.clapedPt += 1;
          return user;
        }

        if (user.id === introducedId) {
          user.clapedPt += 1;
          return user;
        }

        return user;
      });

      // console.log(newUsers);
      setUsers(newUsers);
    }
  };

  return (
    <div>
      {[
        posts &&
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
                  <button
                    onClick={() =>
                      hundleClap(introduceUserData, introducedUserData)
                    }
                  >
                    拍手
                  </button>
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
