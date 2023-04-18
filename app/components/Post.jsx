import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className="post__container">
      <h2>{title.substring(0, 15)}</h2>
      <p>{body.substring(0, 110) + "..."}</p>
    </div>
  );
};

export default Post;
