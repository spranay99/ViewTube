import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Comment = ({ comment }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    comment?.snippet?.topLevelComment?.snippet;

  return (
    <div>
      <div className="flex flex-col mt-3">
        <div className="flex items-center gap-2">
          <img
            className="h-8 w-8 rounded-full"
            src={authorProfileImageUrl}
            alt="profile-img"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-sm">{authorDisplayName}</h1>
            <h3>{textOriginal}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-1">
        <div className="flex items-center ml-7">
          <div className="flex items-center">
            <div className="flex items-center rounded-full px-1">
              <button className="rounded-full p-2 hover:bg-[#303030]/[0.6]">
                <BiLike className="text-xl" />
              </button>
            </div>
            <button className="rounded-full p-2 hover:bg-[#303030]/[0.6]">
              <BiDislike className="text-xl" />
            </button>
          </div>
          <div className="px-4 py-1 cursor-pointer rounded-full hover:bg-[#303030]/[0.6]">
            <span className="text-sm font-bold">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
