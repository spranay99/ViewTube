import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { Comments } from "../utils/constants";
import { RxCross1 } from "react-icons/rx";
import Profile from "../../public/profile.png";
import { VscSend } from "react-icons/vsc";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [showChat, setShowChat] = useState(true);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 20);

      //API Polling
      dispatch(
        addMessage({
          img: Comments[randomNumber].img,
          name: Comments[randomNumber].name,
          message: Comments[randomNumber].message,
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      {showChat ? (
        <>
          <div className="flex justify-between items-center py-2 px-5 border border-gray-700 rounded-t-xl">
            <h1 className="text-lg">Live Chat</h1>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RxCross1
                className="text-white text-2xl cursor-pointer hover:bg-[#303030]/[0.6]"
                onClick={() => setShowChat(false)}
              />
            </div>
          </div>
          <div className="border border-gray-700 h-[30vh] sm:h-[55vh] p-2 overflow-y-scroll flex flex-col-reverse live-chat">
            {chatMessages.map((chat, ind) => (
              <ChatMessage
                key={ind}
                img={chat.img}
                name={chat.name}
                message={chat.message}
              />
            ))}
          </div>
          <div className="border border-gray-700 rounded-b-xl overflow-hidden px-5 py-2 flex justify-center gap-6 mb-5">
            <div className="flex h-8 w-8 overflow-hidden rounded-full">
              <img src={Profile} alt="profile-img" />
            </div>
            <form
              className="w-2/3 wborder border-black flex justify-around"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addMessage({
                    img: Profile,
                    name: "Pranay Shah",
                    message: liveMessage,
                  })
                );
                setLiveMessage("");
              }}
            >
              <input
                className="w-full py-1 px-3 rounded-full bg-white/[0.1] outline-none text-white"
                type="text"
                placeholder="Chat..."
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
              />
            </form>
            <div className="flex items-center h-8 w-8 overflow-hidden rounded-full">
              <VscSend className="text-white text-2xl cursor-pointer" />
            </div>
          </div>
        </>
      ) : (
        <div
          className="border border-gray-700 p-2 rounded-full flex items-center justify-center          cursor-pointer hover:bg-[#303030]/[0.6] font-bold mb-5"
          onClick={() => setShowChat(true)}
        >
          Show Chat
        </div>
      )}
    </>
  );
};

export default LiveChat;
