import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-4 dark:bg-[#0f0f0f] w-full text-white">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
