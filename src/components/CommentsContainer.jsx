import React from "react";
import Comment from "./Comment";

const CommentsContainer = ({ comments }) => {
  return (
    <>
      <div className="text-xl font-bold">50 Comments</div>
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default CommentsContainer;
