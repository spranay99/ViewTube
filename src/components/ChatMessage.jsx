import React from "react";

const ChatMessage = ({ img, name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 text-xs">
      <img className="h-8 w-8 rounded-full" src={img} alt="profile-img" />
      <div className="px-2">
        <span className="font-bold pr-2">{name}</span>
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
