import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="dark:bg-[#0f0f0f] w-full text-white overflow-hidden ml-[94px]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
